import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText } from '@mui/material';
import useFetchChats from '../../hooks/useFetchChatsHook.ts';
import Scrollbar from "../custom/Scrollbar.tsx";
import React, { useContext} from "react";

interface User {
    id: number
    name: string;
    time: string;
    image: string;
    online: boolean;
    lastMessage: string;
}

const SidebarChats = () => {
    const { loading, error, data } = useFetchChats();

    console.log(data);

    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {/* {data.map((user: User) => (
                        <ListItem
                            key={user.id}
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
                                    invisible={!user.online}
                                    anchorOrigin={{ vertical: 'bottom' }}
                                >
                                    <Avatar src={user.image} />
                                </Badge>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{user.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.lastMessage}
                                </Typography>
                            </ListItemText>
                            <Typography variant="body2" color="textSecondary" align="right">
                                {user.time}
                            </Typography>
                        </ListItem>
                    ))} */}
                </List>
            </Scrollbar>
        </Box>
    );
};

export default SidebarChats;
