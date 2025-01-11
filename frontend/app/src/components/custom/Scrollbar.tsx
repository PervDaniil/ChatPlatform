import React from "react";
import { Box } from "@mui/material";


interface Props {
    children: React.ReactNode,
    onlyHover?: boolean,
    height?: string,
}

export default function Scrollbar({ children, onlyHover, height }: Props) {
    return (
        <Box sx={{
            width: '100%',
            height: height ? height : '85vh', 
            "&:hover": { overflowY: 'scroll' },
            overflowY: onlyHover ? 'hidden' : 'scroll',
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': { background: theme => theme.palette.primary.main, borderRadius: '32px' }
        }}>
            {children}
        </Box>
    )
}