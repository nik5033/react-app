import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const StyledDiv = styled.div`
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
`

const Buttons = styled(Button)`
    height: 40px;
`

export default function NoteField() {


    return (
        <StyledDiv>
                <TextField label="Title" variant="outlined" size='small'/>
                <TextField label="Text" variant="outlined" size='small'/>
                <Buttons variant="outlined" color="primary" >
                    Send
                </Buttons>
        </StyledDiv>
    );
}