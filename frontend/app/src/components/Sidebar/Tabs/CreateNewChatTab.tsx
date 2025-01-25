import { Alert, AlertTitle, Avatar, Box, Fab, List, ListItem, ListItemAvatar, ListItemText, Snackbar, SnackbarContent, Typography } from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider.tsx";
import useFetchUsers from "../../../hooks/useFetchUsersHook.ts";
import { User } from "../../../providers/AuthProvider/types.ts";
import useFetchRequest from "../../../hooks/useFetchHook.ts";
import { Add as CreateIcon } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import fetchRequest from "../../../utils/fetchRequest.ts";


export default function CreateNewChatTab() {
    const { accessToken } = useContext(AuthContext);
    const [chatCreatedInfo, setChatCreatedInfo] = useState<string | null>(null);
    const [userToAdd, setUserToAdd] = useState<User | null>(null);
    const { loading, error, data } = useFetchUsers();
    const users = data || [];

    const handleAddUser = (user: User) => {
        setUserToAdd(user);
        console.log(user);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchRequest({
                url: 'http://127.0.0.1:8000/api/v3/chats/',
                method: 'POST',
                headers: {
                    'Authorization' : `Bearer ${accessToken}`
                },
                body: { 'user_id' : userToAdd?.id }
            });

            console.log(response);
            setChatCreatedInfo(response);
        }

        if (userToAdd) {
            fetchData();
        }
    }, [userToAdd]);

    return (
        <Box p={2} flex={1} position="relative" minHeight="70vh">
            <Box>
                <List>
                    {users.map((user: User) => (
                        <ListItem key={user.id} onClick={() => handleAddUser(user)}>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography>{user.username}</Typography>
                                <Typography color="textSecondary" variant="body2">{ user.last_login }</Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Fab color="primary" sx={{ position: 'absolute', right: '1em', bottom: '1em' }}>
                <CreateIcon />
            </Fab>
            {chatCreatedInfo && 
            <Snackbar open autoHideDuration={600}>
                <Alert severity="info">
                    <AlertTitle>{chatCreatedInfo}</AlertTitle>
                </Alert>
            </Snackbar>}
        </Box>
    )
}