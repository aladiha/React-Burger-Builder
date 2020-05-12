import React from 'react';
import classes from './buildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button onClick={props.less} className = {classes.Less}>Less</button>
        <button onClick={props.more} className = {classes.More}>More</button>
    </div>
);



export default buildControl;