import React, { createContext, useState } from 'react';

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {}
});

export const AuthProvider = ({ children }:  { children: React.ReactNode }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};