import React, { useState, createContext, useReducer } from 'react';
import reducer, { INITIAL_STATE } from './reducer';
import { logger } from '~/utils';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [modalType, setModalType] = useState();
    const [menuActive, setMenuActive] = useState();
    const [backgroundState, backgroundDispatch] = useReducer(logger(reducer), INITIAL_STATE);

    console.log('-----------provider render------------');
    const value = {
        modalType,
        setModalType,
        menuActive,
        setMenuActive,
        background: [backgroundState, backgroundDispatch],
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
