import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";

const StyledAccordion = styled(Accordion)`
    //margin-top: 10px;
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
    const [id] = React.useState(props.id)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = () => {
        const input = JSON.stringify({
            username: localStorage.getItem('username'),
            id: id
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
            .then((data) => {
                alert("Note was deleted")
            })
            .catch(e => {
                console.error(e);
            })
    }

    return(
        <StyledDiv>
            <StyledAccordion square expanded={expanded === 'panel' + id} onChange={handleChange('panel' + id)}>
                <AccordionSummary>
                    <Typography>{props.note[0]}</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Typography>
                        {props.note[1]}
                    </Typography>
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