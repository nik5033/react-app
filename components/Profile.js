import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledCard = styled(Card)`
    width: 30%;
    marginTop:30%
`

export default function SimpleCard() {
    return (
        <StyledDiv>
        <StyledCard>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="body2" component="p">
                    Name: test
                </Typography>
                <Typography variant="body2" component="p">
                    Email: test@test
                </Typography>
            </CardContent>
        </StyledCard>
        </StyledDiv>
    );
}