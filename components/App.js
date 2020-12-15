import React from 'react';
import {useRoutes} from 'hookrouter';
import styled from "styled-components";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFoundPage from "./NotFoundPage";
import HMenu from "./Menu";
import Profile from "./Profile";
import Notes from "./Notes";

const H1 = styled.h1`
    margin: 1em 0 0.5em 0;
    font-weight: 100;
    text-transform: uppercase;
    color: #3A62CA;
    font-style: italic;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 58px;
    line-height: 54px;
    text-shadow: 2px 5px 0 rgba(0,0,0,0.2);
    text-align: center
`

const routes = {
    '/': () => <HomePage />,
    '/auth': () => <SignIn />,
    '/register': () => <SignUp />,
    '/profile': () => <Profile />,
    '/notes': () => <Notes />
};

export default function App(){
        const match = useRoutes(routes);

        return(
            <div>
                <HMenu />
                <H1>GachiNotes</H1>
                {match || <NotFoundPage />}
            </div>
        )
}
