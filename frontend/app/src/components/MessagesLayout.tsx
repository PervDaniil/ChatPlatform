import { WebsocketContext } from "../providers/WebsocketProvider/WebsocketProvider.tsx";
import { AuthContext } from "../providers/AuthProvider/AuthProvider.tsx";
import FlexColumn from "./layouts/flex/FlexColumn.tsx";
import { Card, Box, Typography } from "@mui/material";
import React, { Fragment, useContext } from "react";
import Scrollbar from "./custom/Scrollbar.tsx";


export default function MessagesLayout() {
    const { chat } = useContext(WebsocketContext);
    const { user } = useContext(AuthContext);
    const messages = chat?.messages || [];

    messages.forEach(message => console.log(message));

    return (
        <Box flex="1" width="100%" overflow="hidden">
            <Scrollbar onlyHover={false}>
                <FlexColumn styles={{ gap: '1.5em', padding: '2.5em', paddingBottom: '7.5em' }}>
                        {messages.map((message) => (
                            <Fragment key={message.id}>
                                {message.sender.username === user?.username ? (
                                    <Card key={message.id} sx={styles.message}>
                                        <Box sx={{ p: 2, pl: 3 }}>
                                            <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                            <Typography align="right" variant="body2">{message.time}</Typography>
                                        </Box>
                                    </Card>
                                ) : (
                                    <Card key={message.id} elevation={0} sx={styles.message2}>
                                        <Box sx={{ p: 2, pl: 3 }}>
                                            <Typography variant="body1" gutterBottom>{message.text}</Typography>
                                            <Typography align="right" variant="body2" color="textSecondary" pt={0.5}>{message.time}</Typography>
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
            rotate: '150deg',
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
            rotate: '-150deg',
            position: 'absolute',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderTop: '20px solid',
            borderTopColor: theme => theme.palette.background.paper,
        }
    }
}
