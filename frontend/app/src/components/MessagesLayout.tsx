import React, { Fragment } from "react";
import Scrollbar from "./custom/Scrollbar.tsx";
import { Card, Box, Typography } from "@mui/material";
import FlexColumn from "./layouts/flex/FlexColumn.tsx";


const messages = [
    { id: 1, sender: "other", text: "Hey, how's your semester going?", timestamp: "9:45 AM" },
    { id: 2, sender: "me", text: "It's going pretty well", timestamp: "9:47 AM" },
    { id: 3, sender: "other", text: "Same here by the way", timestamp: "9:50 AM" },
    { id: 3, sender: "other", text: "I have a some midterms coming up.", timestamp: "9:51 AM" },
    { id: 4, sender: "me", text: "Oh, I feel you! Have you started studying yet?", timestamp: "9:55 AM" },
];

export default function MessagesLayout() {
    return (
        <Box flex="1" width="100%" overflow="hidden">
            <Scrollbar onlyHover={false}>
                <FlexColumn styles={{ gap: '1.5em', padding: '2.5em', paddingBottom: '7.5em' }}>
                    {messages.map(message => (
                        <Fragment>
                            {message.sender === 'me' ? (
                                <Card key={message.id} sx={styles.message}>
                                    <Box sx={{ p: 2, pl: 3 }}>
                                        <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                        <Typography align="right" variant="body2">{message.timestamp}</Typography>
                                    </Box>
                                </Card>
                            ) : (
                                <Card key={message.id} elevation={0} sx={styles.message2}>
                                    <Box sx={{ p: 2, pl: 3 }}>
                                        <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                        <Typography align="right" variant="body2" color="textSecondary" pt={0.5}>{message.timestamp}</Typography>
                                    </Box>
                                </Card>
                            )}
                        </Fragment>
                    ))}
                </FlexColumn>
            </Scrollbar>
        </Box>
    )
}

const styles = {
    message: {
        boxShadow: 2,
        overflow: 'visible',
        position: 'relative',
        alignSelf: 'flex-end',
        background: theme => theme.palette.primary.main,
        width: '340px', minHeight: '70px', borderTopLeftRadius: '1em',
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
        }
    },
    message2: {
        boxShadow: 2,
        alignSelf: 'start',
        overflow: 'visible',
        position: 'relative',
        width: '340px', minHeight: '70px', borderTopLeftRadius: '1em',
        borderBottomLeftRadius: '1em', borderBottomRightRadius: '0em', borderTopRightRadius: '1em', '::before': {
            content: '""',
            right: '-12px',
            bottom: '-8px',
            rotate: '-155deg',
            position: 'absolute',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderTop: '20px solid',
            borderTopColor: theme => theme.palette.background.paper,
        }
    }
}
