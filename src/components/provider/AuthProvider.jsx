import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase-key";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/brands2.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  const provider = new GoogleAuthProvider();

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, passwords) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwords);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleAlert = (type, message) => {
    Swal.fire({
      icon: type,
      title: message,
    });
  };

  const authInfo = {
    handleAlert,
    loading,
    user,
    createUser,
    logIn,
    logOut,
    googleLogIn,
    brands,
    setLoading,
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-10 text-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  } else {
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  }
  // return (
  //   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  // );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
