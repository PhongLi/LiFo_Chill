import { useContext } from 'react';
import { AppContext } from '~/store/session';
import { AuthContext } from '~/store/user';

function useStore() {
    const { modalType, setModalType, menuActive, setMenuActive, session } = useContext(AppContext);
    const {
        createUser,
        currentUser,
        login,
        logout,
        changeProfile,
        changeEmail,
        changePassword,
        resetPassword,
        reauthenticate,
        user,
    } = useContext(AuthContext);
    return {
        modalType,
        setModalType,
        menuActive,
        setMenuActive,
        session,
        createUser,
        login,
        logout,
        currentUser,
        changeProfile,
        changeEmail,
        changePassword,
        reauthenticate,
        resetPassword,
        user,
    };
}

export default useStore;
