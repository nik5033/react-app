import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import styled from 'styled-components';
import {useTitle} from "hookrouter";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledCard = styled(Card)`
    border: 2px solid black;
    width: 20%;
    marginTop:30%
`

const StyledTitle = styled(Typography)`
        margin-top: 10px;
        font-size: 20px;
  font-family: 'Orienta', sans-serif;
`

const StyledText = styled(Typography)`
  font-size: 16px;
  font-family: 'Orienta', sans-serif;
`

export default function Profile() {
    useTitle('Profile');

    const [number, setNumber] = React.useState(0);

    const Count_notes = () => {
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
                setNumber(data.notes.length);
            })
            .catch(e => {
                console.error(e);
            })

        return number
    }

    return (
        <StyledDiv>
        <StyledCard>
            <CardContent>
                <Avatar src="/public/male.jpg" alt='Something wrong' />
                <StyledTitle
                    color="textSecondary"
                    gutterBottom
                >
                    Profile
                </StyledTitle>
                <StyledText
                    variant="body2"
                    component="p"
                >
                    Username: {localStorage.getItem('username')}
                </StyledText>
                <StyledText
                    variant="body2"
                    component="p"
                >
                    Number of notes: {Count_notes()}
                </StyledText>
            </CardContent>
        </StyledCard>
        </StyledDiv>
    );
}