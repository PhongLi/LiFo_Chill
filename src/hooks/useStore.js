import { useContext } from 'react';
import { AppContext } from '~/Store';

function useStore() {
    const { modalType, setModalType, background } = useContext(AppContext);
    return { modalType, setModalType, background };
}

export default useStore;
