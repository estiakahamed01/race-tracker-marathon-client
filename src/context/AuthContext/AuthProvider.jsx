import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";



const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( auth,email,password)
    }
    const singInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser.email}

                axios.post('http://localhost:5000/jwt',user, {withCredentials: true})
                .then(res => console.log(res.data))
            }
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        singInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;