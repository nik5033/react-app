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

    const handleCloseProf = () => {
        setAnchorEl(null);
        navigate('profile');
    };

    const handleClose = () => {
        setAnchorEl(null);
        navigate('/')
    };

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
                <MenuItem onClick={handleCloseProf}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Notes</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
