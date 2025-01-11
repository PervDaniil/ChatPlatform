import React, { useState } from "react";
import BadgeDot from "./custom/Badge.tsx";
import Scrollbar from "./custom/Scrollbar.tsx";
import FlexCenter from "./layouts/flex/FlexCenter.tsx";
import RoundedTextField from "./custom/RoundedTextField.tsx";
import { Notifications as NotificationsIcon, Menu as MenuIcon, Search } from '@mui/icons-material';
import { Drawer, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Typography, InputAdornment, Badge, Tabs, Tab } from "@mui/material";


export default function Sidebar() {
    const styles = {
        wrapper: { height: '100vh', minWidth: '440px', maxWidth: '440px', overflow: 'hidden' },
    }

    return (
        <Drawer variant="permanent" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={styles.wrapper}>
                <SidebarHeader />
                <SidebarSearch />
                <SidebarSettingsTab />
                <SidebarChats />
            </Box>
        </Drawer>
    )
}


const SidebarHeader = () => {
    return (
        <Box pt={1}>
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
                    <IconButton sx={{ color: '#999' }}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </ListItem>
        </Box>
    )
}

const SidebarSearch = () => {
    return (
        <Box>
            <ListItem>
                <RoundedTextField size="small" placeholder="Search ..."
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <Search color="secondary" />
                            </IconButton>
                        </InputAdornment>
                    } styles={{
                        '& .MuiOutlinedInput-root': { py: 0.5, fontWeight: 200, px: 1.5 }, pt: 2,
                        '& .MuiInputBase-input::placeholder': { fontSize: '1em' }, '& *': { borderColor: 'rgba(200, 200, 200, 0.085)' }
                    }} />
            </ListItem>
        </Box>
    )
}

const SidebarChats = () => {
    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {MockUsers.map((user, index) => (
                        <ListItem
                            key={index}
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
                    ))}
                </List>
            </Scrollbar>
        </Box>
    );
};


const SidebarSettingsTab = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const handleChangeTab = (tabId: number) => {
        setTabIndex(tabId);
    }

    return (
        <ListItem sx={{ pb: 2 }}>
            <FlexCenter>
                <Tabs value={tabIndex}>
                    <Tab value={0} onClick={() => handleChangeTab(0)} label="All" sx={{ fontSize: '0.85em' }} />
                    <Tab value={1} onClick={() => handleChangeTab(1)} label="Online" sx={{ fontSize: '0.85em' }} />
                    <Tab value={2} onClick={() => handleChangeTab(2)} label="Inbox" sx={{ fontSize: '0.85em' }} />
                    <Tab value={3} onClick={() => handleChangeTab(3)} label="New" sx={{ fontSize: '0.85em' }} />
                </Tabs>
            </FlexCenter>
        </ListItem>
    )
}


const MockUsers = [
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/421731613_823904013221459_4618120717231547116_n.jpg?ccb=11-4&oh=01_Q5AaIIJ0Jsq6iMPBVCB07eRzuCZJw0gxy-v4SXkJHzPk9K5n&oe=678FA588&_nc_sid=5e03e0&_nc_cat=103",
        name: "Elhan",
        lastMessage: "Last message",
        time: "Mon",
        fullTime: "10:26 PM"
    },
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/472511936_1257768672148605_6520826370977465158_n.jpg?ccb=11-4&oh=01_Q5AaILpKoJ0WpiNhLc2rpkkGaLtpcE6RXIC99hayba1g9O0_&oe=678F7278&_nc_sid=5e03e0&_nc_cat=106",
        name: "Ramazan",
        lastMessage: "Jabjik №1",
        time: "Tue",
        fullTime: "05:32 AM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        name: "P. Diddy",
        lastMessage: "Hello EHSP-1-24",
        time: "Today",
        online: true,
        fullTime: "05:32 AM"
    },
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/470018401_1173018404216343_2609227272445371358_n.jpg?ccb=11-4&oh=01_Q5AaIFFN-KEYbpj_Zxt1yxhXJw68CfCUFLNBQx1R8DnmFbYw&oe=678F8EA4&_nc_sid=5e03e0&_nc_cat=103",
        name: "Mr. Chyngyz",
        lastMessage: "will you play BS?",
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
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/454938697_8094976540601733_6950080611740621399_n.jpg?ccb=11-4&oh=01_Q5AaIG5jw6bNJug1aC6Gvq8oi7zp4lQPv5qR8HPuzzh3VsSy&oe=678F9108&_nc_sid=5e03e0&_nc_cat=110",
        name: "M. Ravil",
        lastMessage: "See you soon",
        time: "Thu",
        fullTime: "03:45 PM"
    },
    {
        image: "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg?w=1250",
        name: "D. Trump",
        lastMessage: "Good morning",
        time: "Last Fri",
        online: true,
        fullTime: "07:10 AM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Samuel",
        lastMessage: "What's up bro?",
        time: "7th Jan",
        fullTime: "11:02 PM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "Peter Parker",
        lastMessage: "How have you been?",
        time: "Sun",
        online: true,
        fullTime: "02:58 AM"
    },
];