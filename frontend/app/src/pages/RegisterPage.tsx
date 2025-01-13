import FlexColumnCenter from "../components/layouts/flex/FlexColumnCenter.tsx";
import { Box, Button, Card, TextField, Typography, Fab } from "@mui/material";
import FlexCenter from "../components/layouts/flex/FlexCenter.tsx";
import { Home as HomeIcon } from "@mui/icons-material";
import React, { useState } from "react";


interface FormData {
    username: string,
    password: string,
}


export default function RegisterPage() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    }

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/token/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const responseBody = await response.json();

                if (response.ok) {
                    console.log(responseBody);
                    return
                }   

                throw new Error(`Failed to fetch! Response code : ${response.status} ${responseBody.info}`);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }

    return (
        <Box width="100%" height="100vh">
            <FlexCenter styles={{ height: '100%' }}>
                <Card component="form" elevation={0} onSubmit={HandleSubmit}
                    sx={{ px: 4, py: 5, boxShadow: 10, minWidth: '400px', border: '1px solid #222' }}>
                    <FlexColumnCenter>
                        <Typography variant="h4" pb={1}>Register page</Typography>
                        <FlexColumnCenter styles={{ gap: '1em 0', padding: '2.5em 0' }}>
                            <TextField onChange={HandleInputChange} name="username" required size="small" fullWidth label="Username" />
                            <TextField onChange={HandleInputChange} name="password" required size="small" fullWidth label="Password" />
                        </FlexColumnCenter>
                        <Button type="submit" fullWidth size="large" variant="contained" sx={{ mt: 6.5 }}>Submit!</Button>
                    </FlexColumnCenter>
                </Card>
            </FlexCenter>

            <Fab
                color="primary"
                onClick={() => window.location.href = '/'}
                sx={{ position: 'absolute', bottom: '2em', left: '2em' }}>
                <HomeIcon />
            </Fab>
        </Box>
    )
}