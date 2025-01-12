import React from "react";
import Main from "../components/Main.tsx";
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import { Box, useMediaQuery } from "@mui/material";
import BottomPanel from "../components/BottomPanel.tsx";
import MessagesLayout from "../components/MessagesLayout.tsx";
import PreloadBar from "../components/PreloadBar.tsx";


export default function ChatPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    if (!isMobile) {
        return (
            <Box sx={styles.gridLayout}>
                <Sidebar />
                <Main>
                    <Header />
                    <MessagesLayout />
                    <BottomPanel />
                </Main>
            </Box>
        )
    }

    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Header />
            <MessagesLayout />
            <BottomPanel />
        </Box>
    )
}

const styles = {
    gridLayout: { display: 'grid', gridTemplateColumns: { xs: '0px 1fr', md: '440px 1fr' } }
}