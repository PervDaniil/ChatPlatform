import React from "react";

export interface Message {
    id: number,
    time: string,
    text: string,
    sender: string,
}

export interface WebsocketContextProviderValue {
    messages: Message[] | null,
    setMessage: React.Dispatch<React.SetStateAction<Message[]>>,
    HandleAddMessage: (message: string) => void, 
}