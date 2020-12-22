import React from 'react';
import {navigate} from 'hookrouter';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfMenu from './ProfMenu'

export default function SimpleTabs() {
    return (
        <div>
            <AppBar position="static">
                <Tabs>
                    <Tab label="Home" onClick={() => navigate('/')} />
                    <Tab label="Sign In" onClick={() => navigate('/auth')} />
                    <Tab label="Sign Up" onClick={() => navigate('/register')} />
                    <ProfMenu />
                </Tabs>
            </AppBar>
        </div>
    );
}

