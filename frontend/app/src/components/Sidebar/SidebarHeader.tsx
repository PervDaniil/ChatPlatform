
import React, {useState} from "react";
import BadgeDot from "../custom/Badge.tsx";
import FlexColumn from "../layouts/flex/FlexColumn.tsx";
import FlexColumnCenter from "../layouts/flex/FlexColumnCenter.tsx";
import { Notifications as NotificationsIcon, Menu as MenuIcon, KeyboardBackspace as BackArrowIcon, DarkMode } from '@mui/icons-material';
import { Box, ListItem, ListItemAvatar, ListItemText, IconButton, Button, Typography, Badge, ListItemIcon, Avatar, Switch, List, Card } from '@mui/material';


const SidebarHeader = () => {
    const [open, setOpen] = useState<boolean>(false);

    const HandleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <Box pt={1} sx={{ position: 'relative' }}>
            {open && <SettingsTabLayout closeLayout={HandleOpen} />}
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



const SettingsTabLayout = ({ closeLayout }) => {
    return (
        <Box width="100%" height="100vh" position="absolute" elevation={0} zIndex={999} component={Card}>
            <FlexColumnCenter styles={{ flexWrap: 'nowrap', height: '100vh'}}>
                <Box width="100%" py={1}>
                    <IconButton onClick={closeLayout}>
                        <BackArrowIcon />
                    </IconButton>
                </Box>
                <Box flex="1" width="100%" pt={1}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <DarkMode />
                            </ListItemIcon>
                            <Typography flex="1" color="textSecondary">Dark mode</Typography>
                            <Switch defaultChecked />
                        </ListItem>
                    </List>
                </Box>
                <Box px={3} pb={5} width="100%">
                    <FlexColumn styles={{ gap: '1em 0'}}>
                        <Button size="large" variant="outlined" fullWidth>Logout</Button>
                        <Button size="large" variant="contained" fullWidth>Login</Button>
                    </FlexColumn>
                </Box>
            </FlexColumnCenter>
        </Box>
    )
}


export default SidebarHeader;