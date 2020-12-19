import React from 'react';
import styled from 'styled-components';
import {useTitle} from "hookrouter";

const StyledDiv = styled.div`
    text-align: center;
    font-size : 200%;
    font-family : Arial, Gadget, sans-serif;
`

export default function HomePage () {
    useTitle('Home');

    return(
        <StyledDiv>
            <h2>Welcome to the club, buddy</h2>
            <p>On this website you can make you notes</p>
            <img src='../public/billy.jpeg' alt="No"/>
        </StyledDiv>
    )
}