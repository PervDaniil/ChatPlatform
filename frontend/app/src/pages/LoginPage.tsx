import React, { useState } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import FlexCenter from "../components/layouts/flex/FlexCenter.tsx";
import { Box, Button, Card, TextField, Typography, Fab } from "@mui/material";
import FlexColumnCenter from "../components/layouts/flex/FlexColumnCenter.tsx";


interface FormData {
    username: string,
    password: string,
}

export default function LoginPage() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const HandleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((data) => ({
            ...data,
            [name] : value,
        }));
    }

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(event);
    }

    return (
        <Box width="100%" height="100vh">
            <FlexCenter styles={{ height: '100%' }}>
                <Card component="form" elevation={0} onSubmit={HandleSubmit}
                    sx={{ px: 4, py: 5, boxShadow: 10, minWidth: '400px', border: '1px solid #222' }}>
                    <FlexColumnCenter>
                        <Typography variant="h4" pb={1}>Login page</Typography>
                        <FlexColumnCenter styles={{ gap: '1em 0', padding: '4em 0' }}>
                            <TextField onChange={HandleInputChange} name="password" required size="small" fullWidth label="Password" />
                            <TextField onChange={HandleInputChange} name="email" size="small" fullWidth label="Username" />
                        </FlexColumnCenter>
                        <Button fullWidth size="large" variant="contained" sx={{ mt: 6.5 }}>Submit!</Button>
                    </FlexColumnCenter>
                </Card>
            </FlexCenter>

            <Fab 
            color="primary" 
            onClick={() => window.location.href = '/'}
            sx={{ position: 'absolute', bottom: '2em', left: '2em'}}>
                <HomeIcon />
            </Fab>
        </Box>
    )
}