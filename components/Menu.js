import React from 'react';
import {navigate} from 'hookrouter';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Home" onClick={() => navigate('/')} />
                    <Tab label="Sign In" onClick={() => navigate('/auth')} />
                    <Tab label="Sign Up" onClick={() => navigate('/register')} />
                </Tabs>
            </AppBar>
        </div>
    );
}

/*import React from 'react';
import {A,navigate} from "hookrouter";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const Men = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #bbebff;
`;

const DivMenu = styled.div`
    background-color: #bbebff;
`

export default function HMenu () {
    return(
        <div>
            <Men>
                <div>
                    <Button variant="contained" size="large" onClick={() => navigate('/')}>Main</Button>
                </div>
                <div>
                    <Button variant="contained" size="large" onClick={() => navigate('/auth')}>Sing In</Button>
                </div>
                <div>
                    <Button variant="contained" size="large" onClick={() => navigate('/register')}>Sing Up</Button>
                </div>
            </Men>
        </div>
    )
}*/