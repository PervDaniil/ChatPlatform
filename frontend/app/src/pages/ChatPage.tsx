import React from "react";
import { Box } from "@mui/material";
import Main from "../components/Main.tsx";
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import BottomPanel from "../components/BottomPanel.tsx";
import MessagesLayout from "../components/MessagesLayout.tsx";


export default function ChatPage() {
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

const styles = {
    gridLayout: { display: 'grid', gridTemplateColumns: '420px 1fr'}
}