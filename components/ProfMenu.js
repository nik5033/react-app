import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { navigate } from 'hookrouter';
import Tab from '@material-ui/core/Tab';

export default function ProfMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
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

    const handleLogout = () => {
        setAnchorEl(null);
        navigate('/');
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
                <MenuItem onClick={handleProf}>Profile</MenuItem>
                <MenuItem onClick={handleNotes}>Notes</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
