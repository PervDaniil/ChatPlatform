import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText } from '@mui/material';
import useFetchChats from '../../hooks/useFetchChatsHook.ts';
import Scrollbar from "../custom/Scrollbar.tsx";
import React from "react";


type Member = {
    id: number,
    username: string,
    last_login: string,
    online: boolean,
}


type Chat = {
    id: number,
    name: string,
    private: boolean,
    members: Member[],
    image: string | null,
}


const SidebarChats = () => {
    const { loading, error, data } = useFetchChats();

    const chats = data || [];

    const handleSelectChat = (id: number) => {
        console.log(`Selected chat number ${id}`)
    }

    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {chats.map((chat: Chat) => (
                        <ListItem
                            key={chat.id}
                            onClick={() => handleSelectChat(chat.id)}
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
