import React from 'react'
import classes from './NavigationItems.module.css'
import Item from './NavigationItem/NavigationItem'

const items = (props) => (
    <ul className={classes.NavigationItems}>
        <Item link="/" active>Burger Builder</Item>
        <Item link="/">Checkout</Item>
        
    </ul>
);

export default items;