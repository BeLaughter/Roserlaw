import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// Initialize Firestore
const db = getFirestore();
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Ensure we get the latest verification status
        await currentUser.reload();
        // Check if email is verified before updating Firestore
        if (currentUser.emailVerified) {
          const userDocRef = doc(db, "users", currentUser.uid);
          await updateDoc(userDocRef, { emailVerified: true }); // Update Firestore
        }
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));

        if (userDoc.exists() && currentUser.emailVerified) {
          setUser({
            ...currentUser,
            displayName: userDoc.data().name,
          });
        } else {
          setUser(null); // User is unverified or missing in Firestore
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Register function (Enforces Email Verification)
  const register = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Store user in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email: user.email,
        createdAt: new Date().toISOString(),
        emailVerified: false, // User must verify first
      });

      // Log out to prevent login before verification
      await signOut(auth);

      throw new Error(
        "Registration successful! Please verify your email before logging in."
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // ✅ Login function (Blocks Unverified Users)
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        await signOut(auth);
        throw new Error("Email not verified. Please check your inbox.");
      }

      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        await updateDoc(userDocRef, { emailVerified: true }); // Mark verified
        setUser({ ...user, displayName: userDoc.data().name });
      } else {
        setUser(user);
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // ✅ Logout function
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
