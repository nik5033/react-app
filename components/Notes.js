import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const StyledDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
`

export default function Profile() {
    const [time, setTime] = React.useState(new Date());

    const Time = (event) => {
        setTime(new Date())
    }

    return (
        <StyledDiv>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Note1
                    </Typography>
                    <Typography variant="body2" component="p">
                        Context1fghdfgdgdfgfdsgfdgfdgdfsgdf
                    </Typography>
                    <p>{time.getDate().toString()}.{time.getMonth().toString()}.{time.getFullYear().toString()} {time.getHours().toString()}:{time.getMinutes().toString()}:{time.getSeconds().toString()}</p>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Note2
                    </Typography>
                    <Typography variant="body2" component="p">
                        Context2
                    </Typography>
                    <p>{time.getDate().toString()}.{time.getMonth().toString()}.{time.getFullYear().toString()} {time.getHours().toString()}:{time.getMinutes().toString()}:{time.getSeconds().toString()}</p>
                </CardContent>
            </Card>
        </StyledDiv>
    );
}