import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Firestore imports

const db = getFirestore(); // Initialize Firestore
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser({ ...currentUser, displayName: userDoc.data().name });
        } else {
          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Register function with name support
  const register = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update display name in Firebase Authentication
    await updateProfile(user, { displayName: name });

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: user.email,
      createdAt: new Date().toISOString(),
    });

    // Update state with name
    setUser({ ...user, displayName: name });

    return user;
  };

  // 🔹 Login function
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch name from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      setUser({ ...user, displayName: userDoc.data().name });
    } else {
      setUser(user);
    }

    return user;
  };

  // 🔹 Logout function
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
