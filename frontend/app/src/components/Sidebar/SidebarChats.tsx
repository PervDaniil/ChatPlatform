import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText } from '@mui/material';
import useFetchChats from '../../hooks/useFetchChatsHook.ts';
import Scrollbar from "../custom/Scrollbar.tsx";
import React from "react";


interface User {
    id: number
    name: string;
    image: string;
    online: boolean;
    last_login: string;
}

interface Chat {
    user: User,
    id: number,
    name: string,
    time: string,
    image: string,
    members: User[],
    lastMessage: string,
}


const SidebarChats = () => {
    const { loading, error, data } = useFetchChats();

    console.log(data);

    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {/* {data && data.map((chat: Chat) => (
                        <ListItem
                            key={chat.id}
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
                                    invisible={!chat.user.online}
                                    anchorOrigin={{ vertical: 'bottom' }}
                                >
                                    <Avatar src={chat.user.image} />
                                </Badge>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{chat.user.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {chat.lastMessage}
                                </Typography>
                            </ListItemText>
                            <Typography variant="body2" color="textSecondary" align="right">
                                {chat.time}
                            </Typography>
                        </ListItem>
                    ))} */}
                </List>
            </Scrollbar>
        </Box>
    );
};

export default SidebarChats;
