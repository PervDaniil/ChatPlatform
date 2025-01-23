import { Avatar, Box, Fab, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import useFetchUsers from "../../../hooks/useFetchUsersHook.ts";
import { User } from "../../../providers/AuthProvider/types.ts";
import { Add as CreateIcon } from "@mui/icons-material";
import React, { useState } from "react";


export default function CreateNewChatTab() {
    const [userToAdd, setUserToAdd] = useState<User | null>(null);
    const { loading, error, data } = useFetchUsers();
    const users = data || [];

    const handleAddUser = (user: User) => {
        setUserToAdd(user);
        console.log(user);
    }
    

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
        </Box>
    )
}