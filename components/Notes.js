import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import {Add} from "@material-ui/icons";
import NoteFiled from "./NoteField";
import Note from "./Note";


const AddNoteDiv = styled.div`
      display: flex;
      flex-direction: row;
`

const StyledIcon = styled(IconButton)`
      height: 40px;
`

const MainDiv = styled.div`
      display: flex;
      flex-direction: column;
`


export default function Notes() {
    const [show, setShow] = React.useState(false);
    const [New, setNew] = React.useState(true);
    const [Notes, setNotes] = React.useState(new Array());

    const getNote = () => {
        fetch('/api/note/get?username=' + localStorage.getItem('username'), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                console.log(data.notes)
                setNotes(data.notes);
            })
            .catch(e => {
                console.error(e);
            })
    }

    const handleClick = () => {
        setShow(!show);
    }

    const notes = () => {
        if(New){
            getNote();
            setNew(!New);
        }

        return Notes.map((item) =>
            <Note id={item[0]} note={item[1]} Change={setNotes} notes={Notes}/>
        )
    }


    return (
        <MainDiv>
            {notes()}
            <form>
                <AddNoteDiv>
                    <StyledIcon onClick={handleClick}>
                        <Add />
                    </StyledIcon>
                    {show && (<NoteFiled onChange={setNotes} notes={Notes}/>)}
                </AddNoteDiv>
            </form>
        </MainDiv>
    );
}