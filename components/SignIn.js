import React from 'react';
import {navigate} from 'hookrouter';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const Div = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`

/*const Form = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
`*/

export default function SingIn () {
    navigate('/auth');
    return(
        <div>
            <Div>
                <form>
                    <h2>SignIn</h2>
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
                            Sign In
                        </Button>
                    </div>
                </form>
            </Div>
        </div>
    )
}