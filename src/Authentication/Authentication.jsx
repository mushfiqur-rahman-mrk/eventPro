import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";
 
export const AuthContext = createContext(null)
const Authentication = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    // create user with email
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in with email and password
    const emailLogin=( email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign in with google
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // handle logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // user observer
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
        },[])

    
    const authInfo={createUser,emailLogin,user,logOut,loading,google}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authentication.propTypes = {
    children: PropTypes.node,
};

export default Authentication;