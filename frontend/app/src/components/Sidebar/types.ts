export type Message = {
    id: number,
    text: string,
    time: string,
    sender: Member,
}


export type Member = {
    id: number,
    username: string,
    last_login: string,
    online: boolean,
}


export type Chat = {
    id: number,
    name: string,
    private: boolean,
    members: Member[],
    messages: Message[],
    image: string | null,
}