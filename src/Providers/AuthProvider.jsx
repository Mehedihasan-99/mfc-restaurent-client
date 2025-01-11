import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

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
    }



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout
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