import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText } from '@mui/material';
import useFetchChats from '../../hooks/useFetchChatsHook.ts';
import Scrollbar from "../custom/Scrollbar.tsx";
import React, { useContext } from "react";
import { WebsocketContext } from '../../providers/WebsocketProvider/WebsocketProvider.tsx';


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


const SidebarChats = () => {
    const { setChat } = useContext(WebsocketContext);
    const { loading, error, data } = useFetchChats();

    const chats = data || [];

    const handleSelectChat = (chat: Chat) => {
        setChat(chat);
        console.log(chat);
    }

    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {chats.map((chat: Chat) => (
                        <ListItem
                            key={chat.id}
                            onClick={() => handleSelectChat(chat)}
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                    background: 'rgba(0, 0, 0, 0.25)',
                                    borderRadius: '12px',
                                },
                                transition: 'all 0.1s',
                            }}
                        >
                            <ListItemAvatar>
                                <Badge
                                    color="success"
                                    variant="dot"
                                    invisible={!true}
                                    anchorOrigin={{ vertical: 'bottom' }}
                                >
                                    <Avatar />
                                </Badge>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{chat.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    last message here
                                </Typography>
                            </ListItemText>
                            <Typography variant="body2" color="textSecondary" align="right">
                                12:04 PM
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Scrollbar>
        </Box>
    );
};

export default SidebarChats;
