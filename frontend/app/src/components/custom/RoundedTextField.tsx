import React from "react";
import { SxProps, TextField } from "@mui/material";


interface Props {
    placeholder?: string,
    size: "small" | "medium",
    endAdornment?: React.ReactNode,
    startAdornment?: React.ReactNode,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
    styles?: SxProps,
    value?: string,
}

export default function RoundedTextField({ placeholder, size, startAdornment, endAdornment, onChange, onKeyDown, value, styles }: Props) {
    return (
        <TextField
            fullWidth
            size={size}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
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