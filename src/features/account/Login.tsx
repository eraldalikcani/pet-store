import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from '../../app/models/user';
import agent from '../../app/api/agent';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

interface Props {
    handleClose: () => void;
    open: boolean;
}
export default function Login({handleClose, open}:Props) {
    const [user, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const {} = useForm();

    const [values, setValues] = useState({
        username : "",
        password : ""
    })

    const handleSubmit = (event: any) => {
        event.preventDefault();

        agent.User.loginUser(values.username, values.password)
        .then(user => setUser(user))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    };

    function handleInputChange(event: any){
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <DialogTitle align='center'>Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To enter to the Pet Store, please enter your username and password here.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleInputChange}
                            value={values.username}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={handleInputChange}
                            value={values.password}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} component={NavLink} to='/Pets'>Cancel</Button>
                        <Button type='submit'>Login</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}