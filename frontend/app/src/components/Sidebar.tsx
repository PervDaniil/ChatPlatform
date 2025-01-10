import React from "react";
import BadgeDot from "./custom/Badge.tsx";
import { Notifications as NotificationsIcon, Menu as MenuIcon, Search } from '@mui/icons-material';
import { Drawer, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Typography, TextField, InputAdornment, Badge } from "@mui/material";


export default function Sidebar() {
    const styles = {
        main: { height: '100vh', maxWidth: '420px' },
        list: { width: '420px' },
    }

    return (
        <Drawer variant="permanent">
            <Box sx={styles.main}>
                <List sx={styles.list}>
                    <SidebarHeader />
                    <SidebarSearch />
                    <SidebarChats />
                </List>
            </Box>
        </Drawer>
    )
}


const SidebarHeader = () => {
    return (
        <ListItem>
            <ListItemAvatar>
                <BadgeDot badgeColor="success">
                    <Avatar sx={{ width: '2.75em', height: '2.75em'}} src="https://images.datacamp.com/image/upload/v1657018082/Python_snake_c7d86ba58b.jpg" />
                </BadgeDot>
            </ListItemAvatar>
            <ListItemText>
                <Typography variant="h6" align="center" color="textSecondary">
                    Chats
                </Typography>
            </ListItemText>
            <Box>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Box>
        </ListItem>
    )
}


const SidebarSearch = () => {
    return (
        <ListItem>
            <TextField
                fullWidth
                size="small"
                placeholder="Search..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <Search color="secondary" />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{ '& .MuiInputBase-root': { borderRadius: '32px', py: 0.5, background: 'rgba(0, 0, 0, 0.25)', fontWeight: 200 }, py: 2, '& *': { transition: 'all 0.2s' } }} />
        </ListItem>
    )
}


const SidebarChats = () => {
    const MockUsers = [
        {
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            name: "DjangoDev",
            lastMessage: "Last message",
            time: "Mon",
            fullTime: "10:26 PM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/43.jpg",
            name: "Ramazan",
            lastMessage: "Jabjik №1",
            time: "Tue",
            fullTime: "05:32 AM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/53.jpg",
            name: "P. Diddy",
            lastMessage: "Hello EHSP-1-24",
            time: "Tue",
            fullTime: "05:32 AM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/48.jpg",
            name: "Mr. Kumar",
            lastMessage: "The best teacher",
            time: "Tue",
            fullTime: "05:32 AM"
        },
        {
            image: "https://randomuser.me/api/portraits/women/51.jpg",
            name: "Jane Smith",
            lastMessage: "How's it going?",
            time: "Wed",
            fullTime: "08:15 PM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/13.jpg",
            name: "Alex Johnson",
            lastMessage: "See you soon",
            time: "Thu",
            fullTime: "03:45 PM"
        },
        {
            image: "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg?w=1250",
            name: "D. Trump",
            lastMessage: "Good morning",
            time: "Fri",
            fullTime: "07:10 AM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/25.jpg",
            name: "Samuel",
            lastMessage: "What's up?",
            time: "Sat",
            fullTime: "11:02 PM"
        },
        {
            image: "https://randomuser.me/api/portraits/men/6.jpg",
            name: "Peter Parker",
            lastMessage: "How have you been?",
            time: "Sun",
            fullTime: "02:58 AM"
        },
    ];


    return (
        <>
            {MockUsers.map((user, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Badge color="success" anchorOrigin={{ vertical: 'bottom' }}>
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
            ))}
        </>
    )
}
