import React, { useState, createContext, useReducer } from 'react';
import reducer, {INITIAL_STATE} from './reducer';
export const AppContext = createContext();

function AppProvider({ children }) {
    const [modalType, setModalType] = useState();
    const [backgroundState, backgroundDispatch] = useReducer(reducer, INITIAL_STATE)

    const value = {
        modalType,
        setModalType,
        // backgroundState,
        // backgroundDispatch
        background: [backgroundState, backgroundDispatch]
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
