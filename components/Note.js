import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";

const StyledHeader = styled(Typography)`
    color: #343434;
    font-weight: normal;
    font-family: 'Ultra', sans-serif;
    font-size: 18px;
    line-height: 42px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
`

const StyledText = styled(Typography)`
    color: #343434;
    font-size: 16px;
    line-height: 40px;
    font-weight: normal;
    font-family: 'Orienta', sans-serif;
    letter-spacing: 1px;
    font-style: italic;
`

const StyledAccordion = styled(Accordion)`
    width: 100%;
`

const StyledDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-top: 10px;
`

export default function Note(props) {
    const [expanded, setExpanded] = React.useState('');
    const Max_Length = 158;

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = () => {
        const input = JSON.stringify({
            username: localStorage.getItem('username'),
            id: props.id
        })

        fetch('/api/note/rm', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: input
        })
            .then((resp) => {
                return resp.json()
            })
            .then(() => {
                let note = props.notes.slice();
                props.notes.map((item, number) => {
                    if(item[0] == props.id) {
                        note.splice(number, 1)
                    }
                })
                props.Change(note)
                setExpanded('')
            })
            .catch(e => {
                console.error(e);
            })
    }

    const Text = () => {
        let text = '';
        console.log(props.note[1]);
        for(let i = 0; i < Math.floor(props.note[1].length / Max_Length); i++) {
            text += (props.note[1].substring(i*Max_Length, (i+1)*Max_Length) + '\n');
        }
        text += props.note[1].substring((Math.floor(props.note[1].length / Max_Length))*Max_Length)
        console.log(text);
        return text
    }

    return(
        <StyledDiv>
            <StyledAccordion square expanded={expanded === 'panel' + props.id} onChange={handleChange('panel' + props.id)}>
                <AccordionSummary>
                    <StyledHeader>
                        Title: {props.note[0]}
                    </StyledHeader>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <StyledText>
                        {Text()}
                    </StyledText>
                </AccordionDetails>
                <Divider />
                    <AccordionActions>
                        <Button
                            size="small"
                             color="primary"
                            onClick={handleClick}
                        >
                            Delete
                        </Button>
                    </AccordionActions>
            </StyledAccordion>
        </StyledDiv>
    )
}