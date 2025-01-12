import React from "react";
import FlexRow from "./layouts/flex/FlexRow.tsx";
import { Box, Toolbar, Typography, Card, IconButton, Avatar } from "@mui/material";
import { Videocam as VideoCallIcon, Call as CallIcon, MoreHoriz as MoreHorizIcon } from "@mui/icons-material";


export default function Header() {
    return (
        <Box component="header" width="100%">
            <Card elevation={0} sx={{ py: 1 }}>
                <Toolbar>
                    <Avatar src="https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/466564593_755963856707781_7842934320972208484_n.jpg?ccb=11-4&oh=01_Q5AaIMhdJm_bQTZfmhgP7BuwhmYA1Hc2d1tRiTCZ-ngwc2-f&oe=678F9467&_nc_sid=5e03e0&_nc_cat=107" sx={{ mr: 5, width: '2.5em', height: '2.5em' }} />
                    <Box flex="1">
                        <Typography variant="h6" color="white" fontFamily="Bruno Ace">Our queen 👑✨💖</Typography>
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