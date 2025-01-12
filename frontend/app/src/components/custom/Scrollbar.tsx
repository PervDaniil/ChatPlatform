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
                overflowY: 'scroll',
                'scrollBehavior': 'smooth',
                height: height ? height : '90vh',
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-thumb': { background: 'rgba(0, 0, 0, 0)', borderRadius: '32px' },
                '&:hover::-webkit-scrollbar-thumb' : { background: 'rgba(0, 0, 0, 0.5)'},
            }}>
            {children}
        </Box>
    )
}