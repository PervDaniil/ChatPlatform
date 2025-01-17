import { WebsocketContextProviderValue, Message } from './types.ts';
import React, { createContext, useEffect, useState } from "react";


export const WebsocketContext = createContext<WebsocketContextProviderValue>({
    messages: null,
    setMessage: () => {},
    HandleAddMessage: () => {},
});

export default function WebsocketProvider({ children } : { children : React.ReactNode}) {
    const [messages, setMessage] = useState<Message[]>([]);

    const HandleAddMessage = (message) => {
        setMessage((messages) => [...messages, message])
    }

    useEffect(() => {
        const webSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/1/');

        webSocket.onmessage = (event) => {
            console.log('Received a message from websocket', JSON.parse(event.data))
        }
    });

    return (
        <WebsocketContext.Provider value={{ messages, setMessage, HandleAddMessage }}>
            { children }
        </WebsocketContext.Provider>
    )
}