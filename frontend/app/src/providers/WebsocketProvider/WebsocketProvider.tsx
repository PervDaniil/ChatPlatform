import { AuthContext } from '../AuthProvider/AuthProvider.tsx';
import { WebsocketContextProviderValue, Message, Chat } from './types.ts';
import React, { createContext, useContext, useEffect, useRef, useState } from "react";


export const WebsocketContext = createContext<WebsocketContextProviderValue>({
    chat: null,
    messages: [],
    setChat: () => { },
    setMessage: () => { },
    sendMessage: () => { },
});

export default function WebsocketProvider({ children }: { children: React.ReactNode }) {
    const { accessToken } = useContext(AuthContext);
    const [messages, setMessage] = useState<Message[]>([]);
    const [chat, setChat] = useState<Chat | null>(null);
    const webSocketRef = useRef<WebSocket | null>(null);


    const sendMessage = (message) => {
        if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
            webSocketRef.current.send(message);

        } else {
            console.log('Failed to open WS connection!')
        }
    }


    useEffect(() => {
        const messagesFromChat = chat?.messages || [];
        setMessage(messagesFromChat);
    }, [chat]);


    useEffect(() => {
        if (chat) {
            const webSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chat?.id}/?jwt_token=${accessToken}`);
            webSocketRef.current = webSocket;

            webSocket.onmessage = (event) => {
                const data = JSON.parse(event.data);

                setMessage((prev) => [...prev, {
                    text: data.text,
                    sender: data.sender,
                }]);
            }

            return () => {
                webSocket.close();
            }
        }

    }, [chat]);

    return (
        <WebsocketContext.Provider value={{ chat, messages, setChat, setMessage, sendMessage }}>
            {children}
        </WebsocketContext.Provider>
    )
}