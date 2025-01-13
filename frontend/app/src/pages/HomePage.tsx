import FlexColumnCenter from "../components/layouts/flex/FlexColumnCenter.tsx";
import { Box, Container, Typography, Button, Avatar } from "@mui/material";
import { AuthContext } from "../providers/AuthProvider/AuthProvider.tsx";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";


export default function HomePage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (user) {
        navigate('/chat');
    }

    return (
        <Container maxWidth="sm" sx={{ width: '400px'}}>
            <FlexColumnCenter styles={{ height: '100vh' }}>
                <Box>
                    <Avatar alt="User Avatar" sx={{ width: 100, height: 100, margin: "0 auto" }} />
                    <Typography variant="h5" mt={2}>Hello, User!</Typography>
                </Box>

                <Box my={5}>
                    <Typography align="center" variant="body1" color="textSecondary" sx={{ textWrap: 'balance'}}>
                        Welcome to the Chat Messenger! Before you start use messanger you have to sign up to save your conversations permanently
                    </Typography>
                </Box>

                <Button variant="contained" color="primary" size="large" href="/login" fullWidth>
                    Start Chat
                </Button>
            </FlexColumnCenter>
        </Container>
    );
}
