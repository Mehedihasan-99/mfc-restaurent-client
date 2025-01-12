import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user login 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // user logout 
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    // user name & photo update 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // google popup login
const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
}


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        updateUserProfile,
        googleLogin
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser);
            setLoading(false);
            console.log('Current User', curentUser);
        });
        return () => {
            return unsubscribe();
        }
    }, []);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;