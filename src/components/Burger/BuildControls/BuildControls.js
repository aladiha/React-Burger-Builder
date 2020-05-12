import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/buildControl'



const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];


const buildControls = (props) => {

    return (
          <div className={classes.BuildControls}>
              <p>Current Price: <strong> {props.price.toFixed(2)} $</strong></p>
              {controls.map(
                  ctrl => (
                        <BuildControl 
                        more={() => props.more(ctrl.type)}
                        less={() => props.less(ctrl.type)}
                        key={ctrl.label}
                        label = {ctrl.label}
                        disable = {props.disable[ctrl.type]}
                        />
                  )
              )}
              <button className={classes.OrderButton}
              disabled={!props.purchasable}
              >ORDER NOW</button>
          </div>  
    );
}

export default buildControls;