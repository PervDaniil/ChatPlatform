import React from "react";
import { Badge as MUIBadge } from "@mui/material";


interface Props {
    children: React.ReactNode,
    badgeColor?: "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning"
}

export default function BadgeDot({ children, badgeColor }: Props) {
    return (
        <MUIBadge variant="dot" color={badgeColor} sx={{
            '& .MuiBadge-dot': {
                width: '1em', 
                height: '1em', 
                borderRadius: '50%', 
            }
        }}>
            {children}
        </MUIBadge>
    )
}