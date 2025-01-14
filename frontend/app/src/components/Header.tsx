import React from "react";
import FlexRow from "./layouts/flex/FlexRow.tsx";
import { Box, Toolbar, Typography, Card, IconButton, Avatar } from "@mui/material";
import { Videocam as VideoCallIcon, Call as CallIcon, MoreHoriz as MoreHorizIcon } from "@mui/icons-material";


export default function Header() {
    return (
        <Box component="header" width="100%">
            <Card elevation={0} sx={{ py: 1 }}>
                <Toolbar>
                    <Avatar sx={{ mr: 5, width: '2.5em', height: '2.5em' }} />
                    <Box flex="1">
                        <Typography variant="h6" fontFamily="Bruno Ace">Username</Typography>
                        <Typography variant="body2" color="textSecondary">Last seen 21 minutes ago</Typography>
                    </Box>
                    <FlexRow styles={{ gap: '0 1em' }}>
                        <IconButton sx={{ background: 'rgba(150, 150, 150, 0.1)' }}>
                            <VideoCallIcon />
                        </IconButton>
                        <IconButton sx={{ background: 'rgba(150, 150, 150, 0.1)' }}>
                            <CallIcon />
                        </IconButton>
                        <IconButton sx={{ background: 'rgba(150, 150, 150, 0.1)' }}>
                            <MoreHorizIcon />
                        </IconButton>
                    </FlexRow>
                </Toolbar>
            </Card>
        </Box>

    )
}