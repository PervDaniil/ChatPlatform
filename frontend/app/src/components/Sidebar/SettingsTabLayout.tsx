import { KeyboardBackspace as BackArrowIcon, DarkMode, Animation as AnimationIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { Box, ListItem, IconButton, Button, Typography, ListItemIcon, Switch, List, Card, Divider } from '@mui/material';
import { ThemeContext } from '../../providers/ThemeProvider/ThemeProvider.tsx';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider.tsx';
import FlexColumnCenter from "../layouts/flex/FlexColumnCenter.tsx";
import FlexColumn from "../layouts/flex/FlexColumn.tsx";
import React, { useContext } from "react";
import { motion } from 'framer-motion';


interface Props {
    closeLayout: () => void,
    isOpen: boolean,
}


const SettingsTabLayout = ({ closeLayout, isOpen } : Props) => {
    const { HandleThemeMode } = useContext(ThemeContext);
    const { logout } = useContext(AuthContext);
    
    const settingsTabs = [
        { name: 'Dark mode', icon: <DarkMode />},
        { name: 'Animations', icon: <AnimationIcon />},
        { name: 'Notifications', icon: <NotificationsIcon />},
        { name: 'Dark mode', icon: <DarkMode />},
        { name: 'Dark mode', icon: <DarkMode />},
    ]

    return (
        <Box width="100%" height="100vh" position="absolute" elevation={0} component={Card} sx={{ zIndex: isOpen ? '999' : '-1'}}>
            <motion.div initial={{ translateX: '-100%' }} animate={{ translateX: isOpen ? '0' : '-100%'}}>
                <FlexColumnCenter styles={{ flexWrap: 'nowrap', height: '100vh' }}>
                    <Box width="100%" py={1}>
                        <IconButton onClick={closeLayout}>
                            <BackArrowIcon />
                        </IconButton>
                    </Box>
                    <Box flex="1" width="100%" pt={1}>
                        <List>
                            { settingsTabs.map(tab => (
                                <ListItem>
                                    <ListItemIcon>
                                        { tab.icon }
                                    </ListItemIcon>
                                    <Typography flex="1" color="textSecondary">{ tab.name }</Typography>
                                    <Switch defaultChecked onClick={HandleThemeMode}/>
                                </ListItem>
                            ))}
                            <Divider />
                        </List>
                    </Box>
                    <Box px={3} pb={5} width="100%">
                        <FlexColumn styles={{ gap: '1em 0' }}>
                            <Button size="large" variant="outlined" fullWidth onClick={logout} href='/'>Logout</Button>
                            <Button size="large" variant="contained" fullWidth href='/login'>Login</Button>
                        </FlexColumn>
                    </Box>
                </FlexColumnCenter>
            </motion.div>
        </Box>
    )
}

export default SettingsTabLayout;