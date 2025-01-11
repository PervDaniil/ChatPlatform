import React from "react";
import { Box } from "@mui/material";


export default function Scrollbar({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{
            height: '100%', width: '100%',
            overflow: 'hidden', "&:hover": { overflowY: 'scroll' },
            '* ::-webkit-scrollbar': { width: '6px' },
            '* ::-webkit-scrollbar-thumb': { background: 'deepskyblue', borderRadius: '32px' }
        }}>
            {children}
        </Box>
    )
}