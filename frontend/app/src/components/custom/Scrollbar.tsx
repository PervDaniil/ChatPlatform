import React from "react";
import { Box } from "@mui/material";


interface Props {
    children: React.ReactNode,
    onlyHover?: boolean,
    height?: string,
}

export default function Scrollbar({ children, onlyHover, height }: Props) {
    return (
        <Box className="scrollContainer" 
        sx={{
            width: '100%',
            'scrollBehavior' : 'smooth',
            height: height ? height : '90vh', 
            "&:hover": { overflowY: 'scroll' },
            overflowY: onlyHover ? 'hidden' : 'scroll',
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': { background: theme => theme.palette.primary.main, borderRadius: '32px' }
        }}>
            {children}
        </Box>
    )
}