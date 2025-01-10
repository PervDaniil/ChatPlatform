import React from "react";
import {  AddAPhoto, AttachFile, Send as SendIcon } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";


interface Props {
    placeholder?: string,
    size: "small" | "medium",
}

export default function RoundedTextField({ placeholder, size}: Props) {
    return (
        <TextField
        fullWidth
        size={size}
        InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <IconButton>
                        <AttachFile color="secondary" sx={{ rotate: '45deg'}} />
                    </IconButton>
                    <IconButton>
                        <SendIcon color="primary"/>
                    </IconButton>
                </InputAdornment>
            ),
        }}
        sx={{ '& .MuiInputBase-root': { borderRadius: '32px', background: 'rgba(0, 0, 0, 0.25)', px: 2.5 }, '& *': { transition: 'all 0.2s' } }} />
    )
}