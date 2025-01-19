import React from "react";
import { SxProps, TextField } from "@mui/material";


interface Props {
    placeholder?: string,
    size: "small" | "medium",
    endAdornment?: React.ReactNode,
    startAdornment?: React.ReactNode,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    styles?: SxProps,
}

export default function RoundedTextField({ placeholder, size, startAdornment, endAdornment, onChange, styles }: Props) {
    return (
        <TextField
            fullWidth
            size={size}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={{
                endAdornment: (
                    endAdornment
                ),
                startAdornment: (
                    startAdornment
                )
            }}
            sx={{
                '& .MuiInputBase-root': {
                    px: 2.5,
                    borderRadius: '32px',
                    background: 'rgba(0, 0, 0, 0.15)',
                },
                '& .MuiInputBase-input::placeholder': { fontSize: '0.75em' },
                '& *': { transition: 'all 0.2s', borderColor: 'rgba(200, 200, 200, 0.20)' },
                ...styles
            }} />
    )
}