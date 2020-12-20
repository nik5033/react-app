import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { navigate } from 'hookrouter';
import Tab from '@material-ui/core/Tab';

export default function ProfMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Auth, setAuth] = React.useState(false);

    const handleAbling = (event) => {
        fetch('/api/user/check', {
            method: "GET",
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setAuth(data.IsAuth);
            })
        event.preventDefault();
    }

    const handleClick = (event) => {
        handleAbling(event);
        setAnchorEl(event.currentTarget);
    };

    const handleProf = () => {
        setAnchorEl(null);
        navigate('/profile');
    };

    const handleNotes = () => {
        setAnchorEl(null);
        navigate('/notes');
    };

    const handleLogout = (event) => {
        setAnchorEl(null);
        fetch('/api/user/out', {
            method: "GET",
        })
            .then((resp) => {
                resp.json();
        })
            .then((data) => {
                localStorage.clear();
                navigate('/')
            })
            .catch(e => {
            console.error((e))
        })
        event.preventDefault();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Tab label="Profile" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={handleProf}
                    disabled={!Auth}
                >
                    Profile
                </MenuItem>
                <MenuItem
                    onClick={handleNotes}
                    disabled={!Auth}
                >
                    Notes
                </MenuItem>
                <MenuItem
                    onClick={handleLogout}
                    disabled={!Auth}
                >
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}
