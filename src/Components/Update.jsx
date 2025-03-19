import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // 🔥 Import useNavigate
import { db, storage } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Update = () => {
  const auth = getAuth();
  const navigate = useNavigate(); // 🔥 Initialize navigate
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    class: "",
    address: "",
    passportURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await fetchUserData(currentUser.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setFormData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `passports/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setFormData((prevData) => ({ ...prevData, passportURL: downloadURL }));
      setMessage("Passport uploaded successfully!");
    } catch (error) {
      console.error("Error uploading passport:", error);
      setMessage("Error uploading passport.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await updateDoc(doc(db, "users", user.uid), formData);
      setMessage("Profile updated successfully!");

      // 🔥 Redirect to dashboard after 3 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="signindiv">
      <div className="profile-container">
        <h2 className="text-center text-dark title">Profile</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            className="input-reg"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            className="input-reg"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            className="input-reg"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="class"
            className="input-reg"
            placeholder="Class"
            value={formData.class}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            className="input-reg"
            onChange={handleChange}
            required
          />
          <label>Upload Passport:</label>
          <input
            type="file"
            accept="image/*"
            className="input-reg"
            onChange={handleFileUpload}
          />
          {uploading && <p>Uploading...</p>}
          {formData.passportURL && (
            <img src={formData.passportURL} alt="Passport" width="100" />
          )}
          <button type="submit" className="btn teach-btn">
            Update Profile
          </button>
        </form>
        <p className="text-center ptop">
          Return to home <Link to="/dashboard">DASHBOARD</Link>
        </p>
      </div>
    </div>
  );
};

export default Update;
