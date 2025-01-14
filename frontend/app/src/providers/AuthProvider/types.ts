export interface User {
    id: number,
    username: string,
}

export interface AuthProviderContextValue {
    user: User | null,
    logout: () => void,
    getAccessToken: () => string | null,
    setAccessToken: (access: string) => void,
    setRefreshToken: (refresh: string) => void,
}