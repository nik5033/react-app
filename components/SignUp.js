import React from 'react';
import {navigate, useTitle} from "hookrouter";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Buttons = styled(Button)`
    width: 100%
`

const Div = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`

const StyledH = styled.h2`
    color: #3f51b5;
`

export default function SingUp () {
    useTitle('Sign Up');

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleSubmit = () => {
        if(user !== '' && pass !== '') {
            const input = JSON.stringify({
                username: user,
                password: pass
            })
            fetch('/api/user/reg', {
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
                        navigate('/auth')
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

    navigate('/register');
    return(
        <div>
            <Div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <StyledH>Sign Up</StyledH>
                <form>
                    <div>
                        <TextField
                            error={error}
                            label="Username"
                            variant="filled"
                            onChange={e => setUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            error={error}
                            label="Password"
                            variant="filled"
                            onChange={e => {setPass(e.target.value)}}
                        />
                    </div>
                    <div>
                        <Buttons
                            variant="outlined"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}