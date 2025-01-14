import SidebarTabsMenu from "./SidebarTabsMenu.tsx";
import SidebarHeader from "./SidebarHeader.tsx";
import SidebarSearch from "./SidebarSearch.tsx";
import { Drawer, Box } from "@mui/material";
import React from "react";


export default function Sidebar() {
    return (
        <Drawer variant="permanent" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={styles.wrapper}>
                <SidebarHeader />
                <SidebarSearch />
                <SidebarTabsMenu />
            </Box>
        </Drawer>
    )
}

const styles = {
    wrapper: { height: '100vh', minWidth: '440px', maxWidth: '440px', overflow: 'hidden' },
}