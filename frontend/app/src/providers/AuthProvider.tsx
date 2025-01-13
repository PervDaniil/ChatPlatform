import React, { useEffect, useState } from "react"
import { createContext } from "react";


interface User {
    id: number,
    username: string,
    is_authenticated: boolean,
}

interface AuthContextValue {
    user: User | null,
    setAccessJWT: (access: string) => void,
    setRefreshJWT: (refresh: string) => void,
}


export const AuthContext = createContext<AuthContextValue>({
    user: null,
    setAccessJWT(access: string): void { },
    setRefreshJWT(refresh: string): void { },
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);


    const UserAccessToken = () => localStorage.getItem('access');

    const UserRefreshToken = () => localStorage.getItem('refresh')

    const setAccessJWT = (access: string) => {
        localStorage.setItem('access', access);
    }

    const setRefreshJWT = (refresh: string) => {
        localStorage.setItem('refresh', refresh);
    }


    const RefreshAccessToken = async () => {
        const UserRefresh = UserRefreshToken();

        if (!UserRefresh) return;

        const response = await fetch('http://127.0.0.1:8000/api/v1/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'refresh': UserRefresh })
        });

        console.log(await response.json());
        const data = await response.json();
        setAccessJWT(data.access);
        return data.access;
    }


    const fetchUserCredentials = async () => {
        const UserAccess = UserAccessToken();

        if (!UserAccess) {
            setUser(null);
            return
        }

        const response = await fetch('http://127.0.0.1:8000/api/v2/users/credentials/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${UserAccess}`
            },
        });

        if (response.status == 401) {
            const newAccessToken = await RefreshAccessToken();

            if (newAccessToken) {
                fetchUserCredentials();
            }
            return;
        }

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setUser(data.user);
            return
        }

        setUser(null);
    }


    useEffect(() => {
        fetchUserCredentials();
    }, [])

    return (
        <AuthContext.Provider value={{ setAccessJWT, setRefreshJWT, user }}>
            {children}
        </AuthContext.Provider>
    )
}

