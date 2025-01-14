import React from "react";

export interface Message {
    text: string,
}

export interface WebsocketContextProviderValue {
    messages: Message[] | null,
    setMessage: React.Dispatch<React.SetStateAction<Message[]>>,
    HandleAddMessage: (message: string) => void, 
}