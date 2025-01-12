import React from "react";
import Scrollbar from "../custom/Scrollbar.tsx";
import { Box, List, ListItem, ListItemAvatar, Badge, Avatar, Typography, ListItemText} from '@mui/material';


const SidebarChats = () => {
    return (
        <Box>
            <Scrollbar onlyHover={true} height="calc(70vh + 20px)">
                <List>
                    {MockUsers.map((user, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                    background: 'rgba(0, 0, 0, 0.25)',
                                    borderRadius: '12px',
                                },
                                transition: 'all 0.1s',
                            }}
                        >
                            <ListItemAvatar>
                                <Badge
                                    color="success"
                                    variant="dot"
                                    invisible={!user.online}
                                    anchorOrigin={{ vertical: 'bottom' }}
                                >
                                    <Avatar src={user.image} />
                                </Badge>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{user.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {user.lastMessage}
                                </Typography>
                            </ListItemText>
                            <Typography variant="body2" color="textSecondary" align="right">
                                {user.time}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Scrollbar>
        </Box>
    );
};

export default SidebarChats;



const MockUsers = [
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/421731613_823904013221459_4618120717231547116_n.jpg?ccb=11-4&oh=01_Q5AaIIJ0Jsq6iMPBVCB07eRzuCZJw0gxy-v4SXkJHzPk9K5n&oe=678FA588&_nc_sid=5e03e0&_nc_cat=103",
        name: "Elhan",
        lastMessage: "Last message",
        time: "Mon",
        fullTime: "10:26 PM"
    },
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/472511936_1257768672148605_6520826370977465158_n.jpg?ccb=11-4&oh=01_Q5AaILpKoJ0WpiNhLc2rpkkGaLtpcE6RXIC99hayba1g9O0_&oe=678F7278&_nc_sid=5e03e0&_nc_cat=106",
        name: "Ramazan",
        lastMessage: "Jabjik №1",
        time: "Tue",
        fullTime: "05:32 AM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        name: "P. Diddy",
        lastMessage: "Hello EHSP-1-24",
        time: "Today",
        online: true,
        fullTime: "05:32 AM"
    },
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/470018401_1173018404216343_2609227272445371358_n.jpg?ccb=11-4&oh=01_Q5AaIFFN-KEYbpj_Zxt1yxhXJw68CfCUFLNBQx1R8DnmFbYw&oe=678F8EA4&_nc_sid=5e03e0&_nc_cat=103",
        name: "Mr. Chyngyz",
        lastMessage: "will you play BS?",
        time: "Tue",
        fullTime: "05:32 AM"
    },
    {
        image: "https://randomuser.me/api/portraits/women/51.jpg",
        name: "Jane Smith",
        lastMessage: "How's it going?",
        time: "Wed",
        fullTime: "08:15 PM"
    },
    {
        image: "https://media-hel3-1.cdn.whatsapp.net/v/t61.24694-24/454938697_8094976540601733_6950080611740621399_n.jpg?ccb=11-4&oh=01_Q5AaIG5jw6bNJug1aC6Gvq8oi7zp4lQPv5qR8HPuzzh3VsSy&oe=678F9108&_nc_sid=5e03e0&_nc_cat=110",
        name: "M. Ravil",
        lastMessage: "See you soon",
        time: "Thu",
        fullTime: "03:45 PM"
    },
    {
        image: "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg?w=1250",
        name: "D. Trump",
        lastMessage: "Good morning",
        time: "Last Fri",
        online: true,
        fullTime: "07:10 AM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Samuel",
        lastMessage: "What's up bro?",
        time: "7th Jan",
        fullTime: "11:02 PM"
    },
    {
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "Peter Parker",
        lastMessage: "How have you been?",
        time: "Sun",
        online: true,
        fullTime: "02:58 AM"
    },
];
