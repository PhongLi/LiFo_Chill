import React, { useState, createContext } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [modalType, setModalType] = useState();
    const value = {
        modalType,
        setModalType,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
