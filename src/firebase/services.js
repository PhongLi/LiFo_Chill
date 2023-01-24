import { db } from './config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

export const getUserData = async (uid) => {
    const userRef = doc(db, 'users', uid);

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        return userSnap.data();
    } else {
        return {};
    }
};

export const addUSer = async (uid, data) => {
    const userRef = doc(db, 'users', uid);

    await setDoc(userRef, {
        ...data,
        templates: [],
        createdAt: serverTimestamp(),
        modifiedAt: serverTimestamp(),
    });
};

export const updateUser = async (uid, data) => {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
        ...data,
        modifiedAt: serverTimestamp(),
    });
};
