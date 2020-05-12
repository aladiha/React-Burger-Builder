import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/buildControl'



const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];


const buildControls = (props) => {

    return (
          <div className={classes.BuildControls}>
              {controls.map(
                  ctrl => (
                        <BuildControl 
                        more={() => props.more(ctrl.type)}
                        less={() => props.less(ctrl.type)}
                        key={ctrl.label}
                        label = {ctrl.label}
                        />
                  )
              )}
          </div>  
    );
}

export default buildControls;