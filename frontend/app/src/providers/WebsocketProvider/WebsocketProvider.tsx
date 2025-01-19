import { AuthContext } from '../AuthProvider/AuthProvider.tsx';
import { WebsocketContextProviderValue, Message, Chat } from './types.ts';
import React, { createContext, useContext, useEffect, useRef, useState } from "react";


export const WebsocketContext = createContext<WebsocketContextProviderValue>({
    chat: null,
    messages: null,
    setChat: () => {},
    setMessage: () => {},
    HandleAddMessage: () => {},
    sendMessage: () => {},
});

export default function WebsocketProvider({ children } : { children : React.ReactNode}) {
    const { accessToken } = useContext(AuthContext);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [messages, setMessage] = useState<string[]>([]);
    const [chat, setChat] = useState<Chat | null>(null);
    const webSocketRef = useRef<WebSocket | null>(null);


    const HandleAddMessage = (message) => {
        if (message) {
            setMessage((prev) => ([...prev, message]));
        }
    }

    const sendMessage = (message) => {
        if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
            if (isSending) {
                webSocketRef.current.send(message);
            }
        } else {
            console.log('Failed to open WS connection!')
        }
    }



    useEffect(() => {
        if (chat) {
            const webSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chat?.id}/?jwt_token=${accessToken}`);
    
            webSocketRef.current = webSocket;
    
            webSocket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received a message : ', message);
                HandleAddMessage(message);
            }
        }
    });

    return (
        <WebsocketContext.Provider value={{ chat, messages, setChat, setMessage, HandleAddMessage, sendMessage }}>
            { children }
        </WebsocketContext.Provider>
    )
}