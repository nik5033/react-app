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
                        <TextField id="filled-basic" label="Username" variant="filled" />
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Password" variant="filled" />
                    </div>
                    <div>
                        <Buttons variant="outlined" color="primary">
                            Sign In
                        </Buttons>
                    </div>
                </form>
            </Div>
        </div>
    )
}