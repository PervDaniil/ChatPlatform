import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText } from '@mui/material';
import { WebsocketContext } from '../../providers/WebsocketProvider/WebsocketProvider.tsx';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider.tsx';
import useFetchChats from '../../hooks/useFetchChatsHook.ts';
import Scrollbar from "../custom/Scrollbar.tsx";
import React, { useContext } from "react";
import { Chat } from './types.ts';


const SidebarChats = () => {
    const { user } = useContext(AuthContext);
    const { setChat } = useContext(WebsocketContext);
    const { loading, error, data } = useFetchChats();

    const showChatName = (chat: Chat) => {
        if (chat.private) {
            if (chat.members[0] && chat.members[1]) {
                return (
                    chat.members[0].username === user?.username ?
                    chat.members[1].username :
                    chat.members[0].username
    
                )
            }
        }

        return chat.name;
    }

    const chats = data || [];

    const handleSelectChat = (chat: Chat) => {
        setChat(chat);
    }

    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List sx={{ p: 2 }}>
                    {chats.map((chat: Chat) => (
                        <ListItem
                            key={chat.id}
                            sx={styles.hover}
                            onClick={() => handleSelectChat(chat)}>
                            <ListItemAvatar>
                                <Badge
                                    color="success"
                                    variant="dot"
                                    invisible={!true}
                                    anchorOrigin={{ vertical: 'bottom' }}>
                                    <Avatar src={`http://127.0.0.1:8000${chat.image}` || 'Chat'}/>
                                </Badge>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{showChatName(chat)}</Typography>
                                <Typography variant="body2" color="textSecondary" textOverflow="ellipsis" overflow="hidden" sx={{ textWrap: 'nowrap', pr: 2 }}>
                                    { chat?.messages[0]?.text || 'No messages yet'}
                                </Typography>
                            </ListItemText>
                            <Typography variant="body2" color="textSecondary" align="right" sx={{ textWrap: 'nowrap' }}>
                                12:04 PM
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Scrollbar>
        </Box>
    );
};

const styles = {
    hover: {
        '&:hover': {
            cursor: 'pointer',
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '12px',
        },
        transition: 'all 0.1s',
    }
}

export default SidebarChats;
