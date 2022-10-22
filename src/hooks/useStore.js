import { useContext } from 'react';
import { AppContext } from '~/store/session';

function useStore() {
    const { modalType, setModalType, menuActive, setMenuActive, session } = useContext(AppContext);
    return { modalType, setModalType, menuActive, setMenuActive, session };
}

export default useStore;
