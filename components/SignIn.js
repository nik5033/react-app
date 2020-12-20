import React from 'react';
import {navigate, useTitle, useRedirect} from 'hookrouter';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Div = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`

const Buttons = styled(Button)`
    width: 100%;
`

const StyledH = styled.h2`
    color: #3f51b5;
`

export default function SingIn () {
    useTitle('Sign In');

    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleSubmit = () => {
        if(user !== '' && pass !== '') {
            const input = JSON.stringify({
                username: user,
                password: pass
            })
            fetch('/api/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: input
            })
                .then((resp) => {
                    return resp.json()
                })
                .then((data) => {
                    if (data.success) {
                        localStorage.setItem('username', data.username);
                        navigate('/profile');
                    } else {
                        alert(data.message)
                    }
                })
                .catch(e => {
                    console.error(e)
                })
        }
        else {
            setError(true)
        }
    }

    const handleChangeUser = (e) => {
        setError(false)
        setUser(e.target.value)
    }

    const handleChangePass = (e) => {
        setError(false)
        setPass(e.target.value)
    }

    navigate('/auth');
    return(
        <div>
            <Div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <StyledH>Sign In</StyledH>
                <form>
                    <div>
                        <TextField
                            error={error}
                            id="filled-basic"
                            label="Username"
                            variant="filled"
                            onChange={handleChangeUser}
                        />
                    </div>
                    <div>
                        <TextField
                            error={error}
                            id="filled-basic"
                            label="Password"
                            variant="filled"
                            onChange={handleChangePass}
                        />
                    </div>
                    <div>
                        <Buttons
                            variant="outlined"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}