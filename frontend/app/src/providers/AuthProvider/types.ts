export interface User {
    id: number,
    username: string,
}

export interface AuthProviderContextValue {
    user: User | null,
    logout: () => void,
    setAccessToken: (access: string) => void,
    setRefreshToken: (refresh: string) => void,
}