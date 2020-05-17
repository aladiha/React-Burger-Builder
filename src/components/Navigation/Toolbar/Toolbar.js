import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer'

const toolbar = (props) => {
    
    return <header className={classes.Toolbar}>
        <Toggle clicked={props.clicked}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
}

export default toolbar;