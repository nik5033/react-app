import React from 'react'
import HomePage from "./HomePage";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

export const routes = {
    '/': () => <HomePage />,
    '/auth': () => <SingIn />,
    '/register': () => <SingUp />
};
