import React from 'react'

import Logo from '../../Logo/Logo'
import Items from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    //..
    return(
    <div className={classes.SideDrawer}>
        <div className={classes.Logo}> 
        <Logo height="8%"/>
        </div>
        <nav>
            <Items />
        </nav>
    </div>
    );
};

export default sideDrawer;