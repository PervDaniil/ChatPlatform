import { Box, ListItem, ListItemAvatar, ListItemText, IconButton, Typography, Badge, Avatar } from '@mui/material';
import { Notifications as NotificationsIcon, Menu as MenuIcon } from '@mui/icons-material';
import SettingsTabLayout from "./SettingsTabLayout.tsx";
import BadgeDot from "../custom/Badge.tsx";
import React, { useState } from "react";



const SidebarHeader = () => {
    const [open, setOpen] = useState<boolean>(false);

    const HandleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <Box pt={1} sx={{ position: 'relative' }}>
            <SettingsTabLayout closeLayout={HandleOpen} isOpen={open} />
            <ListItem>
                <ListItemAvatar>
                    <BadgeDot badgeColor="success">
                        <Avatar sx={{ width: '2.75em', height: '2.75em' }} src="https://images.datacamp.com/image/upload/v1657018082/Python_snake_c7d86ba58b.jpg" />
                    </BadgeDot>
                </ListItemAvatar>
                <ListItemText>
                    <Typography variant="h6" align="center" color="textSecondary" fontFamily="Bruno Ace" fontWeight="600">
                        Chats
                    </Typography>
                </ListItemText>
                <Box>
                    <IconButton sx={{ color: '#999' }}>
                        <Badge variant="dot" color="error" >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ color: '#999' }} onClick={HandleOpen}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </ListItem>
        </Box>
    )
}


export default SidebarHeader;