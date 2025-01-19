import { WebsocketContextProviderValue, Message, Chat } from './types.ts';
import React, { createContext, useEffect, useRef, useState } from "react";


export const WebsocketContext = createContext<WebsocketContextProviderValue>({
    chat: null,
    messages: null,
    setChat: () => {},
    setMessage: () => {},
    HandleAddMessage: () => {},
    sendMessage: () => {},
});

export default function WebsocketProvider({ children } : { children : React.ReactNode}) {
    const [messages, setMessage] = useState<string[]>([]);
    const [chat, setChat] = useState<Chat | null>(null);
    const webSocketRef = useRef<WebSocket | null>(null);


    const HandleAddMessage = (message) => {
        if (message) {
            setMessage((messages) => [...messages, message]);
        }
        console.log(messages);
    }

    const sendMessage = (message) => {
        if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
            webSocketRef.current.send(message);
        } else {
            console.log('Failed to open WS connection!')
        }
    }



    useEffect(() => {
        const webSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/1/');

        webSocketRef.current = webSocket;

        webSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Received a message : ', message);
            HandleAddMessage(message);
        }
    });

    return (
        <WebsocketContext.Provider value={{ chat, messages, setChat, setMessage, HandleAddMessage, sendMessage }}>
            { children }
        </WebsocketContext.Provider>
    )
}