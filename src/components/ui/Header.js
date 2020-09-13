import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from './../../assets/logo.svg'
import todo from './../../assets/todo7.jpg'
import { whitesmoke } from 'color-name';



function ElevationScroll(props) {
    const { children } = props;


    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => (
    {
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "1em"
        },
        logo: {
            height: "4.5em",
            width: "13em"
        },
        tabContainer: {
            marginLeft: "Auto"
        },
        tab: {
            ...theme.typography.tab,
            minWidth:20,
            marginLeft:"25px"
        }
    }
));

export function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters={true}>
                        <img  alt ="logo" src={todo} className={classes.logo} />
                        <Tabs className={classes.tabContainer} >
                            <Tab className={classes.tab} label="Home" />
                            <Tab className={classes.tab} label="Services" />
                            <Tab className={classes.tab} label="About" />
                            <Tab className={classes.tab} label="Contact Us" />
                            <Tab className={classes.tab} label="Logout" />
                        </Tabs>
                    </Toolbar>
                </AppBar>

            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )

}

export default Header