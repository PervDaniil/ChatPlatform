import React, { useEffect, useState } from "react"
import { createContext } from "react";


interface User {
    id: number,
    username: string,
    is_authenticated: boolean,
}


export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children} : { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    
    const UserJWT = () => {
        return localStorage.getItem('access');
    }

    const RefreshUserToken = () => {
        
    }

    useEffect(() => {
        
    }, []);

    return (
        <AuthContext.Provider value={{ id: 0, username: '', is_authenticated: false}}>
            { children }
        </AuthContext.Provider>
    )
}

