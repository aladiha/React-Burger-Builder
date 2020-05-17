import React from 'react'

import Logo from '../../Logo/Logo'
import Items from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxi'

const sideDrawer = (props) => {

    let attachedCssClasses = [classes.SideDrawer, classes.Close];

    if (props.open){
        attachedCssClasses.splice( 1 , 1 , classes.Open)
    }

    return(
    <Aux>
        <Backdrop show={props.open} clicked={props.clicked}/>
    <div className={attachedCssClasses.join(' ')}>
        <div className={classes.Logo}> 
        <Logo height="8%"/>
        </div>
        <nav>
            <Items />
        </nav>
    </div>
    </Aux>
    );
};

export default sideDrawer;