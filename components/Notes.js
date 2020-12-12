import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {Add} from "@material-ui/icons";
import NoteFiled from "./NoteField";
import Button from "@material-ui/core/Button";

const AddNoteDiv = styled.div`
      display: flex;
      flex-direction: row;
`

const StyledIcon = styled(IconButton)`
      height: 40px;
`

const StyledDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
`

const StyledHR = styled.hr`
    color: #3A62CA;
`


export default function Notes() {
    const [show, setShow] = React.useState(false)
    const [time, setTime] = React.useState(new Date());

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const Time = () => {
        setTime(new Date())
    }

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <form>
                <AddNoteDiv>
                    <StyledIcon onClick={handleClick}>
                        <Add />
                    </StyledIcon>
                    {show && (<NoteFiled />)}
                </AddNoteDiv>
            </form>
            <StyledHR/>
            <StyledDiv>
                <div>
                    <MuiAccordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <MuiAccordionSummary>
                            <Typography>Collapsible Group Item #1</Typography>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                </div>
        </StyledDiv>
        </div>
    );
}