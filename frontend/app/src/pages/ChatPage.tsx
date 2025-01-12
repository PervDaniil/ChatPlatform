import React from "react";
import Main from "../components/Main.tsx";
import Header from "../components/Header.tsx";
import { Box, useMediaQuery } from "@mui/material";
import BottomPanel from "../components/BottomPanel.tsx";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import MessagesLayout from "../components/MessagesLayout.tsx";


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
    gridLayout: { display: 'grid', gridTemplateColumns: '440px 1fr' }
}