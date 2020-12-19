import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {navigate} from "hookrouter";

const StyledDiv = styled.div`
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
`

const Buttons = styled(Button)`
    margin-top: 10px;
    height: 40px;
`

const StyledTextField = styled(TextField)`
  margin-top: 10px;
`

export default function NoteField(props) {
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        const input = JSON.stringify({
            username: localStorage.getItem('username'),
            title: title,
            text: text
        })

        fetch('/api/note/add', {
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
                let note = props.notes.slice()
                note.push([data.id, [title, text]])
                props.onChange(note)
            })
            .catch(e => {console.error(e)})
        e.preventDefault();
    }

    return (
        <StyledDiv>
                <StyledTextField label="Title" variant="outlined" size='small' onChange={e => {setTitle(e.target.value)}}/>
                <StyledTextField
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleChange}
                />
                <Buttons
                    variant="outlined"
                    color="primary"
                    onClick={handleClick}
                >
                    Send
                </Buttons>
        </StyledDiv>
    );
}