import React from "react";
import { SxProps, TextField } from "@mui/material";


interface Props {
    placeholder?: string,
    size: "small" | "medium",
    endAdornment?: React.ReactNode, 
    startAdornment?: React.ReactNode,
    styles?: SxProps,
}

export default function RoundedTextField({ placeholder, size, startAdornment, endAdornment, styles }: Props) {
    return (
        <TextField
            fullWidth
            size={size}
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
                '& .MuiInputBase-root': { borderRadius: '32px', background: 'rgba(0, 0, 0, 0.15)', px: 2.5 }, 
                '& .MuiInputBase-input::placeholder' : { fontSize: '0.75em' },
                '& *': { transition: 'all 0.2s' },
                ...styles
            }} />
    )
}