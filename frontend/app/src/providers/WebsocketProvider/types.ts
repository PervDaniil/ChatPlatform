import React from "react";


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


export interface WebsocketContextProviderValue {
    chat: Chat | null,
    messages: Message[] | null,
    setChat: React.Dispatch<React.SetStateAction<Chat | null>>,
    setMessage: React.Dispatch<React.SetStateAction<Message[]>>,
    sendMessage: (message: string) => void,
}