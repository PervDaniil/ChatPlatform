import React from "react";
import { Search as SearchIcon } from '@mui/icons-material';
import RoundedTextField from "../custom/RoundedTextField.tsx";
import { Box, ListItem, InputAdornment, IconButton } from '@mui/material';


const SidebarSearch = () => {
    return (
        <Box>
            <ListItem>
                <RoundedTextField size="small" placeholder="Search ..."
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon color="secondary" />
                            </IconButton>
                        </InputAdornment>
                    } styles={{
                        '& .MuiOutlinedInput-root': { py: 0.5, fontWeight: 200, px: 1.5 }, pt: 2,
                        '& .MuiInputBase-input::placeholder': { fontSize: '1em' }, '& *': { borderColor: 'rgba(200, 200, 200, 0.085)' }
                    }} />
            </ListItem>
        </Box>
    )
}

export default SidebarSearch;
