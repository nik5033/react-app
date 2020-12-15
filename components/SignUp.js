import React from 'react';
import {navigate} from "hookrouter";
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

const StyledDiv = styled.div`
    margin-top: 5%;
`

export default function SingUp () {
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    const handleSubmit = (event) => {
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
                 }
                 else {
                     alert(data.message)
                 }
            })
            .catch(e => {console.error(e)})
        event.preventDefault();
    }

    const Submit = (event) => {
        if(user === '' || pass === '') {
            alert("No");
        }
        else {
            alert("username: " + user + '\n' + "password: " + pass);
        }
        event.preventDefault();
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
                        <TextField id="filled-basic" label="Username" variant="filled" onChange={e => setUser(e.target.value)}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Password" variant="filled" onChange={e => {setPass(e.target.value)}}/>
                    </div>
                    <div>
                        <Buttons variant="outlined" color="primary" onClick={handleSubmit}>
                            Sign Up
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}