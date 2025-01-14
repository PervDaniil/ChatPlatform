import { Avatar, Box, Fab, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Add as CreateIcon } from "@mui/icons-material";
import React from "react";


export default function CreateNewChatTab() {
    return (
        <Box p={2} flex={1} position="relative" minHeight="70vh">
            <Box>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography>Username</Typography>
                            <Typography color="textSecondary" variant="body2">Last seen at 5.21 PM</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Fab color="primary" sx={{ position: 'absolute', right: '1em', bottom: '1em' }}>
                <CreateIcon />
            </Fab>
        </Box>
    )
}