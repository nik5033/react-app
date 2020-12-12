import React from 'react';
import {navigate} from 'hookrouter';
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
    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');

    const A = () => {
        fetch('/api/check', {
            method: "GET",
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
            })
    }

    const handleSubmit = (event) => {
        const input = JSON.stringify({
            username: user,
            password: pass
        })
        fetch('/api/login', {
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
                if(data.success) {
                    localStorage.setItem('username', data.username);
                    navigate('/profile');
                }
                else{
                    alert(data.message)
                }
            })
            .catch(e => {console.error(e)})
        event.preventDefault();
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
                        <TextField id="filled-basic" label="Username" variant="filled" onChange={e => {setUser(e.target.value)}} />
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Password" variant="filled" onChange={e => {setPass(e.target.value)}} />
                    </div>
                    <div>
                        <Buttons variant="outlined" color="primary" onClick={handleSubmit}>
                            Sign In
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}