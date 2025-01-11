import React from "react";
import FlexCenter from "./layouts/flex/FlexCenter.tsx";
import RoundedTextField from "./custom/RoundedTextField.tsx";
import { Card, Box, InputAdornment, IconButton } from "@mui/material";
import { AttachFile, Mic as MicrophoneIcon, Telegram as SendIcon } from "@mui/icons-material";


export default function BottomPanel() {
    return (
        <Card elevation={0} sx={{ py: 2, width: '100%' }}>
            <FlexCenter>
                <Box sx={{ width: '95%', maxWidth: '940px' }}>
                    <MessageInputField />
                </Box>
            </FlexCenter>
        </Card>
    )
}


const MessageInputField = () => {
    return (
        <RoundedTextField size="medium" placeholder="Type message here ..."
            endAdornment={
                <InputAdornment position="start" sx={{ gap: '0 0.75em' }}>
                    <IconButton>
                        <MicrophoneIcon color="primary" />
                    </IconButton>
                    <IconButton sx={{ background: theme => theme.palette.primary.main}}>
                        <SendIcon />
                    </IconButton>
                </InputAdornment>
            } startAdornment={
                <InputAdornment position="end">
                    <IconButton>
                        <AttachFile color="secondary" sx={{ rotate: '45deg' }} />
                    </IconButton>
                </InputAdornment>
            } styles={{
                '& .MuiInputBase-input::placeholder': { pl: 2, fontSize: '0.8em' },
            }} />
    )
}