import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    token: string | null;
    userId: string | null;
    setTokenState: (token: string | null) => void;
    setUserId: (userId: string | null) => void;
}

export interface CustomJwtPayload {
    id: string;
    exp: number;
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
    userId: '',
    setTokenState: () => {},
    setUserId: () => {}
});

const isTokenExpired = (token: string) => {
    const decoded = jwtDecode(token);
    if(decoded.exp){
        return decoded.exp * 1000 < Date.now();
    }else{
        console.log("Error in decoding");
        return false;
    }
}

export const AuthProvider = ({ children }:  { children: React.ReactNode }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    const setTokenState = (newToken) => {
        if(newToken && !isTokenExpired(newToken)){
            setToken(newToken);
            localStorage.setItem('token', newToken);
            startTokenExpirationTimer(newToken);
        }else{
            localStorage.removeItem('token');
            setToken(null);
        }
    };

    const startTokenExpirationTimer = (newToken) => {
        const decode = jwtDecode(newToken);
        if(decode.exp){
            const expTime = decode.exp*1000 - Date.now();
            console.log(expTime);
            if(expTime > 0){
                setTimeout(() => {
                    localStorage.removeItem('token');
                    setToken(null);
                }, expTime);
            }else{
                localStorage.removeItem('token');
                setToken(null);
            }
        }
    };

    useEffect(() => {
        if (token) {
            if (isTokenExpired(token)) {
              localStorage.removeItem('token');
              setToken(null); 
            }else{
                const decodedToken = jwtDecode<CustomJwtPayload>(token);
                setUserId(decodedToken.id);
                startTokenExpirationTimer(token);
            }
          }
    }, [token]);

    return (
        <AuthContext.Provider value={{token, userId, setTokenState, setUserId}}>
            {children}
        </AuthContext.Provider>
    );
};