import { AppBar, Box, Button, List, ListItem, Modal, Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../features/account/Login";
import Catalog from "../../features/Catalog";

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

interface Props {
    handleClickOpen: () => void;
}
export default function Header({handleClickOpen}:Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography gutterBottom color='white' variant="h5">
                        PetStore
                    </Typography>
                </Box>

                <List sx={{ display: 'flex' }}>
                    <ListItem
                        component={NavLink}
                        to='/Pets'
                        key="/Pets"
                        onClick={() => <Catalog />}
                        sx={navStyles}
                    >
                        Home
                    </ListItem>
                </List>

                <Box display='flex' alignItems='center'>
                    <ListItem 
                        component={NavLink}
                        to='/login'
                        key="/login"
                        onClick={handleClickOpen}
                        sx={navStyles}>
                        Login
                    </ListItem>
                </Box>
            </Toolbar>
        </AppBar>
    );
}