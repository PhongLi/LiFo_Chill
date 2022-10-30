import { createContext, useEffect, useReducer, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '~/firebase/config';
import LoadingPage from '~/pages/LoadingPage/LoadingPage';
import { logger } from '~/utils';
import reducer, { INITIAL_STATE } from './reducer';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [userState, userDispatch] = useReducer(logger(reducer), INITIAL_STATE)

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);

            setTimeout(() => setLoading(false), 1000);
        });
        return () => {
            unsubscribed();
        };
    }, []);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };

    const changeProfile = (username) => {
        return updateProfile(auth.currentUser, { displayName: username });
    };
    const changeEmail = (email) => {
        return updateEmail(auth.currentUser, email);
    };
    const changePassword = (password) => {
        return updatePassword(auth.currentUser, password);
    };
    const reauthenticate = (password) => {
        let credential = EmailAuthProvider.credential(currentUser.email, password);
        return reauthenticateWithCredential(currentUser, credential);
    };
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };



    const value = {
        createUser,
        currentUser,
        login,
        logout,
        changeProfile,
        changeEmail,
        changePassword,
        reauthenticate,
        resetPassword,
        user: [userState, userDispatch]
    };
    return (
        <AuthContext.Provider value={value}>{loading ? <LoadingPage /> : children}</AuthContext.Provider>
    );
}

export default AuthProvider;
export { AuthContext, auth };
