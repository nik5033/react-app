import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    font-size : 200%;
    font-family : Arial, Gadget, sans-serif;
`

export default function HomePage () {
    return(
        <StyledDiv>
            <h2>Welcome to the club, buddy</h2>
            <p>On this website you can make you notes</p>
            <img src='../public/billy.jpeg' alt="No"/>
        </StyledDiv>
    )
}