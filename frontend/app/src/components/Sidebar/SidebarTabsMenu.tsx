import React, { useState } from "react";
import FlexCenter from "../layouts/flex/FlexCenter.tsx";
import { Box, ListItem, Tab, Tabs, Typography, } from '@mui/material';


const SidebarTabsMenu = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const handleChangeTab = (event: React.SyntheticEvent, newIndex: number) => {
        setTabIndex(newIndex);
    }

    return (
        <Box>
            <ListItem sx={{ pb: 2 }}>
                <FlexCenter>
                    <Tabs value={tabIndex} onChange={handleChangeTab}>
                        <Tab value={0} label="All" sx={{ fontSize: '0.85em' }} />
                        <Tab value={1} label="Online" sx={{ fontSize: '0.85em' }} />
                        <Tab value={2} label="Inbox" sx={{ fontSize: '0.85em' }} />
                        <Tab value={3} label="New" sx={{ fontSize: '0.85em' }} />
                    </Tabs>
                </FlexCenter>
            </ListItem>

            <Box>
                {/* {tabIndex === 0 && <SidebarChats />} */}
                {tabIndex === 1 && <Typography>Online Content</Typography>}
                {tabIndex === 2 && <Typography>Inbox Content</Typography>}
                {tabIndex === 3 && <Typography>New Content</Typography>}
            </Box>
        </Box>
    );
}

export default SidebarTabsMenu;