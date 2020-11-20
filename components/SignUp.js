import React from 'react';
import {navigate} from "hookrouter";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Div = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`

export default function SingUp () {
    navigate('/register');
    return(
        <div>
            <Div>
                <form>
                    <h2>SignUp</h2>
                    <div>
                        <TextField id="filled-basic" label="Email" variant="filled" />
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Username" variant="filled" />
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Password" variant="filled" />
                    </div>
                    <div>
                        <Button variant="outlined" color="primary">
                            Sign Up
                        </Button>
                    </div>
                </form>
            </Div>
        </div>
    )
}