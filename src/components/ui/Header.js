import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import todo from './../../assets/todo7.jpg'





function ElevationScroll(props) {
    const { children } = props


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
            height: "5em",
            width: "13em"
        },
        tabContainer: {
            marginLeft: "Auto"
        },
        tab: {
            ...theme.typography.tab,
            minWidth: 20,
            marginLeft: "25px"
        },
        tabSeleted: {
            ...theme.typography.tab,
            minWidth: 20,
            marginLeft: "25px",
            color: "#FFBA60",
            fontSize: "1rem",
            fontWeight: 501
        },

        button: {
            ...theme.typography.logout,
            marginLeft: "50px",
            marginRight: "25px",
            fontSize: "1rem"
        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        }
    }
));

export function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleChange = (e, value) => {
        setValue(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    useEffect(() => {
        if (window.location.pathname === "/") {
            setValue(0)
        }
        else if (window.location.pathname === "/todo") {
            setValue(1)
        }
        else if (window.location.pathname === "/service") {
            setValue(2)
        }
        else if (window.location.pathname === "/about") {
            setValue(3)
        }
        else if (window.location.pathname === "/contact") {
            setValue(4)
        }
    })

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters={true}>
                        <Button className={classes.logoContainer} component={Link} to="/"
                            disableRipple
                            onClick={() => { setValue(0) }}>
                            <img alt="logo" src={todo} className={classes.logo} />
                        </Button>

                        <Tabs value={value} onChange={handleChange}
                            indicatorColor={"none"}
                            className={classes.tabContainer} >
                            <Tab className={value === 0 ? classes.tabSeleted : classes.tab} component={Link} to="/" label="Home" />
                            <Tab className={value === 1 ? classes.tabSeleted : classes.tab} component={Link} to="/todo" label="Todo" />
                            <Tab
                                aria-owns={anchorEl ? "service-menu" : undefined}
                                aria-haspopup={anchorEl ? true : undefined}
                                className={value === 2 ? classes.tabSeleted : classes.tab}
                                component={Link}
                                onMouseOver={(event) => handleClick(event)}

                                to="/service" label="Services" />
                            <Tab className={value === 3 ? classes.tabSeleted : classes.tab} component={Link} to="/about" label="About" />
                            <Tab className={value === 4 ? classes.tabSeleted : classes.tab} component={Link} to="/contact" label="Contact Us" />
                        </Tabs>
                        <Button color="secondary" variant="contained"
                            className={classes.button}>Logout</Button>
                        <Menu id="service-menu" anchorEl={anchorEl} open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            <MenuItem onClick={() => { handleClose(); setValue(2) }} component={Link} to="/services">
                                Services
                            </MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(2) }} component={Link} to="/softwareDevelopment">
                                Software Development
                            </MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(2) }} component={Link} to="/webDevelopment">
                                Web Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(2) }} component={Link} to="/mobileDevelopment">
                                Mobile Development</MenuItem>

                        </Menu>
                    </Toolbar>

                </AppBar>

            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )

}

export default Header