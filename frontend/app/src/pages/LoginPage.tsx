import React from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import FlexCenter from "../components/layouts/flex/FlexCenter.tsx";
import FlexColumnCenter from "../components/layouts/flex/FlexColumnCenter.tsx";


export default function LoginPage() {
    return (
        <Box width="100%" height="100vh">
            <FlexCenter styles={{ height: '100%'}}>
                <Card component="form" elevation={0} 
                    sx={{ px: 4, py: 5, boxShadow: 10, minWidth: '400px', border: '1px solid #222' }}>
                    <FlexColumnCenter>
                        <Typography variant="h4" pb={1}>Login page</Typography>
                        <FlexColumnCenter styles={{ gap: '1em 0', padding: '2.5em 0'}}>
                            <TextField size="small" fullWidth label="Username" />
                            <TextField size="small" fullWidth label="Username" />
                            <TextField size="small" fullWidth label="Username" />
                        </FlexColumnCenter>
                        <Button fullWidth size="large" variant="contained" sx={{ mt: 6.5 }}>Submit!</Button>
                    </FlexColumnCenter>
                </Card>
            </FlexCenter>
        </Box>
    )
}