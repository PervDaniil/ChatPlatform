import React from "react";
import { Card, Box, Typography } from "@mui/material";
import FlexColumn from "./layouts/flex/FlexColumn.tsx";


const messages = [
    { id: 1, sender: "other", text: "Hey, how are you?", timestamp: "10:00 AM" },
    { id: 2, sender: "me", text: "I'm good, thanks! How about you?", timestamp: "10:05 AM" },
    { id: 5, sender: "other", text: "I understand! Same here.", timestamp: "10:07 AM" },
    { id: 5, sender: "other", text: "I understand! Same here.", timestamp: "10:07 AM" },
    { id: 7, sender: "me", text: "I'm doing well, just busy with work.", timestamp: "10:06 AM" },
];

export default function MessagesLayout() {
    return (
        <Box flex="1" sx={{ p: 5, width: '100%' }}>
            <FlexColumn styles={{ gap: '1.5em' }}>
                {messages.map(message => (
                    <>
                        {message.sender === 'me' ? (
                            <Card sx={{
                                alignSelf: 'flex-end',
                                overflow: 'visible',
                                position: 'relative',
                                background: theme => theme.palette.primary.main,
                                width: '340px', height: '70px', borderTopLeftRadius: '1em',
                                borderBottomLeftRadius: '0', borderBottomRightRadius: '1em', borderTopRightRadius: '1em',
                                '::before': {
                                    content: '""',
                                    left: '-12px', 
                                    bottom: '-8px',
                                    rotate: '155deg',
                                    position: 'absolute',
                                    borderLeft: '20px solid transparent', 
                                    borderRight: '20px solid transparent', 
                                    borderTop: '20px solid', 
                                    borderTopColor: theme => theme.palette.primary.main
                                },
                            }}>
                                <Box sx={{ p: 2, pl: 3 }}>
                                    <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                    <Typography align="right" variant="body2">{message.timestamp}</Typography>
                                </Box>
                            </Card>
                        ) : (
                            <Card elevation={0} sx={{
                                overflow: 'visible',
                                position: 'relative',
                                width: '340px', height: '70px', borderTopLeftRadius: '1em',
                                borderBottomLeftRadius: '1em', borderBottomRightRadius: '0em', borderTopRightRadius: '1em',                                '::before': {
                                    content: '""',
                                    right: '-12px', 
                                    bottom: '-8px',
                                    rotate: '-155deg',
                                    position: 'absolute',
                                    borderLeft: '20px solid transparent', 
                                    borderRight: '20px solid transparent', 
                                    borderTop: '20px solid', 
                                    borderTopColor: '#101010',
                                },
                            }}>
                                <Box sx={{ p: 2, pl: 3 }}>
                                    <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                    <Typography align="right" variant="body2" color="textSecondary">{message.timestamp}</Typography>
                                </Box>
                            </Card>
                        )}
                    </>
                ))}
            </FlexColumn>
        </Box>
    )
}
