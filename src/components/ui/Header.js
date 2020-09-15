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
        },
        menu : {
            backgroundColor : theme.palette.common.blue,
            color:"white",
            // borderRedius: "0px",
            borderBottomRightRadius: "0px",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
        },
        menuItem:{
            ...theme.typography.tab,
            opacity: 0.7,
           
            "&:hover": {
                opacity: 1.5,
                // backgroundColor : theme.palette.common.orange,
            }
        },

        selectedMenuItem:{
            ...theme.typography.tab,
            opacity: 0.7,
            backgroundColor : theme.palette.common.orange,
            // "&:hover": {
            //     opacity: 1.5,
            //     // backgroundColor : theme.palette.common.orange,
            // }
        }
    }
));

export function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
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

    const handleMenuItemClick = (e,i) => {
        setAnchorEl(null)
        setOpen(false)
        setSelectedIndex(i)
    }

    const menuOptions = [{name: "Services", link: "/services"},
    {name: "Software Development", link: "/softwareDevelopment"},
    {name: "Web Development", link: "/webDevelopment"},
    {name: "Mobile Development", link: "/mobileDevelopment"}
] 

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
                            classes={{paper: classes.menu}}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            elevation={0}
                        >
                           {menuOptions.map((option,i)=>(
                               <MenuItem
                                component={Link} 
                                to={option.link}
                                key={option}
                                classes={{root: i !== selectedIndex ? classes.menuItem: classes.selectedMenuItem}}
                                onClick={(event)=>{handleMenuItemClick(event,i);
                                setValue(2);
                                handleClose()
                                
                            }}
                            selected={i === selectedIndex && value === 2 }
                               >
                               {option.name}
                               </MenuItem>
                           )
                           )
                           }

                        </Menu>
                    </Toolbar>

                </AppBar>

            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )

}

export default Header