import { User, AuthProviderContextValue } from './types.ts';
import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext<AuthProviderContextValue>({
    user: null,
    setAccessToken(access: string) {},
    setRefreshToken(refresh: string) {},
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);


    const setAccessToken = (access: string) => localStorage.setItem('access', access);
    const getAccessToken = () => localStorage.getItem('access');

    const setRefreshToken = (refresh: string) => localStorage.setItem('refresh', refresh);
    const getRefreshToken = () => localStorage.getItem('refresh');


    useEffect(() => {
        const RefreshUserToken = async () => {
            const refresh = getRefreshToken();

            if (!refresh) {
                return null;
            }

            const response = await fetch('http://127.0.0.1:8000/api/v1/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ 'refresh' : refresh })
            });

            if (response.ok) {
                const data = await response.json();
                setAccessToken(data.access);
            }

            return null;
        }

        RefreshUserToken();
    }, []);


    useEffect(() => {
        const fetchUserCredentials = async () => {
            const accessToken = getAccessToken();

            if (!accessToken) {
                setUser(null);
                return
            }

            const response = await fetch('http://127.0.0.1:8000/api/v2/users/credentials/', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${accessToken}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUser(data.user);
            }
        }

        fetchUserCredentials();
    }, []);


    return (
        <AuthContext.Provider value={{ user, setAccessToken, setRefreshToken }}>
            { children }
        </AuthContext.Provider>
    )
}