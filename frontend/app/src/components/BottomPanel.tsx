import React from "react";
import { Card, Box } from "@mui/material";
import FlexCenter from "./layouts/flex/FlexCenter.tsx";
import RoundedTextField from "./custom/RoundedTextField.tsx";

export default function BottomPanel() {
    return (
        <Card elevation={0} sx={{ py: 2, width: '100%' }}>
            <FlexCenter>
                <Box sx={{ width: '95%', maxWidth: '1000px' }}>
                    <RoundedTextField size="medium" />
                </Box>
            </FlexCenter>
        </Card>
    )
}