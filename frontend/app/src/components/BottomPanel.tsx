import React, { useContext, useState } from "react";
import FlexCenter from "./layouts/flex/FlexCenter.tsx";
import RoundedTextField from "./custom/RoundedTextField.tsx";
import { Card, Box, InputAdornment, IconButton } from "@mui/material";
import { WebsocketContext } from "../providers/WebsocketProvider/WebsocketProvider.tsx";
import { AttachFile, Mic as MicrophoneIcon, Telegram as SendIcon } from "@mui/icons-material";
import { AuthContext } from "../providers/AuthProvider/AuthProvider.tsx";


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
    const { user } = useContext(AuthContext);
    const { sendMessage } = useContext(WebsocketContext);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue('');
        }
    }

    return (
        <RoundedTextField size="medium" placeholder="Type message here ..."
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            endAdornment={
                <InputAdornment position="start" sx={{ gap: '0 0.75em' }}>
                    <IconButton>
                        <MicrophoneIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => {
                        sendMessage(inputValue);
                    }} sx={{ background: theme => theme.palette.primary.main }}>
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