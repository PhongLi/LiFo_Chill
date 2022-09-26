import { useContext } from 'react';
import { AppContext } from '~/Store/session';

function useStore() {
    const { modalType, setModalType, menuActive, setMenuActive, background } = useContext(AppContext);
    return { modalType, setModalType, menuActive, setMenuActive, background };
}

export default useStore;
