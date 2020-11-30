import React from 'react';
import {navigate} from "hookrouter";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    const [user, setUser] = React.useState(null);
    const [pass, setPass] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [gender, setGender] = React.useState('female');

    const Submit = (event) => {
        if(user == null || pass == null || email == null) {
            alert("No");
        }
        else {
            alert("username: " + user + '\n' + "password: " + pass + '\n' + "email: " + email + '\n' + "Gender: " + gender);
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
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup value={gender} onChange={e => {setGender(e.target.value)}}>
                                <FormControlLabel value="female" control={<Radio color='primary'/>} label="Female" />
                                <FormControlLabel value="male" control={<Radio color='primary'/>} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <StyledDiv>
                        <TextField id="filled-basic" label="Username" variant="outlined" onChange={e => setUser(e.target.value)}/>
                    </StyledDiv>
                    <div>
                        <TextField id="filled-basic" label="Email" variant="outlined" onChange={e => {setPass(e.target.value)}}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Password" variant="outlined" onChange={e => {setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <Buttons variant="outlined" color="primary" onClick={Submit}>
                            Sign Up
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}