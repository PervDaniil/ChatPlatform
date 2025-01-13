export interface User {
    id: number,
    username: string,
}

export interface AuthProviderContextValue {
    user: User | null,
    setAccessToken: (access: string) => void,
    setRefreshToken: (refresh: string) => void,
}