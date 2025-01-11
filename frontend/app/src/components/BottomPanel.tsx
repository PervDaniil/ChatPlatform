import React from "react";
import FlexCenter from "./layouts/flex/FlexCenter.tsx";
import RoundedTextField from "./custom/RoundedTextField.tsx";
import { Card, Box, InputAdornment, IconButton } from "@mui/material";
import { AttachFile, AddAPhoto as AddPhotoIcon, Send as SendIcon } from "@mui/icons-material";


export default function BottomPanel() {
    return (
        <Card elevation={0} sx={{ py: 2, width: '100%' }}>
            <FlexCenter>
                <Box sx={{ width: '95%', maxWidth: '960px' }}>
                    <MessageInputField />
                </Box>
            </FlexCenter>
        </Card>
    )
}


const MessageInputField = () => {
    return (
        <RoundedTextField size="medium" placeholder="Message here ..."
        endAdornment={
            <InputAdornment position="start">
                <IconButton>
                    <AttachFile color="secondary" sx={{ rotate: '45deg' }} />
                </IconButton>
                <IconButton>
                    <SendIcon color="primary" />
                </IconButton>
            </InputAdornment>
        } startAdornment={
            <InputAdornment position="end">
                <IconButton>
                    <AddPhotoIcon color="secondary" />
                </IconButton>
            </InputAdornment>
        } styles={{ '& .MuiInputBase-input::placeholder' : { pl: 1.5, fontSize: '0.75em' }}}/>
    )
}