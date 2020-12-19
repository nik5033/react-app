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
    width: 20%;
    marginTop:30%
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
                <Typography color="textSecondary" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="body2" component="p">
                    Username: {localStorage.getItem('username')}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of notes: {Count_notes()}
                </Typography>
            </CardContent>
        </StyledCard>
        </StyledDiv>
    );
}