import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const StyledDiv = styled.div`
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-top: 15px;
`

const Buttons = styled(Button)`
    margin-top: 10px;
    height: 40px;
`

const StyledTextField = styled(TextField)`
        width:250%;
        margin-top: 10px;
`

const StyledTitleField = styled(TextField)`
  margin-top: 10px;
`

export default function NoteField(props) {
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    const [error, setError] = React.useState(false)

    const handleChangeText = (e) => {
        if(title.length <= 50){
            setError(false);
            e.preventDefault()
        }
        else {
            setError(true);
        }
        setText(e.target.value)
    }

    const handleChangeTitle = (e) => {
        if(text.length <= 200){
            setError(false);
            e.preventDefault()
        }
        else {
            setError(true);
        }
        setTitle(e.target.value)
    }

    const handleClick = (e) => {
        const input = JSON.stringify({
            username: localStorage.getItem('username'),
            title: title,
            text: text
        })
        if (title !== '' && text !== '' && title.length <= 50 && text.length <= 200) {
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
                    note.push([data.id, [data.title, data.text, data.date]])
                    props.onChange(note)
                })
                .catch(e => {
                    console.error(e)
                })
        }
        else{
            setError(true)
        }

        e.preventDefault();
    }

    return (
        <StyledDiv>
                <StyledTitleField
                    error={error}
                    helperText={error ? "Incorrect entry." : ''}
                    label="Title"
                    variant="outlined"
                    size='small'
                    onChange={handleChangeTitle}
                />
                <StyledTextField
                    error = {error}
                    helperText={error ? "Incorrect entry." : ''}
                    label="Multiline"
                    multiline
                    rows={5}
                    variant="outlined"
                    onChange={handleChangeText}
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