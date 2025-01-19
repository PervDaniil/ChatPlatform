export interface User {
    id: number,
    username: string,
    last_login: string, 
    online: boolean,
}

export interface AuthProviderContextValue {
    user: User | null,
    logout: () => void,
    accessToken: string | null,
    getAccessToken: () => string | null,
    setAccessToken: (access: string) => void,
    setRefreshToken: (refresh: string) => void,
}