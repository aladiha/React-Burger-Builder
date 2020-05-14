import React from 'react'
import Aux from '../../../hoc/Auxi'
import classes from './OrderSummary.module.css';
import Buttons from '../../UI/Buttons/Buttons'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return <li style={{
                color: '#C24B26',
                fontWeight: "bold"
            }} key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: <span style={{color: 'black'}}>{props.ingredients[igKey]}</span>
            </li>
        }
    )


    return(
     <Aux>
         <h2>Your Order</h2>
         <p className={classes.P}>A delicous burger with the following ingredients:</p>
         <ul>
            {ingredientSummary}
         </ul>
        <p style={{
          fontWeight: 'bold',
          fontSize: '1em'
        }}>Total Cost: {props.price.toFixed(2)}$</p>
         <p className={classes.P}>Continue To Checkout?</p>
         <div style={{
             textAlign: "center",
             marginBottom: "10px",
             marginTop: "20px"
             }}>
         <Buttons btnType="Continue" clicked={props.continue}>Continue</Buttons>
         <Buttons btnType="Cancel" clicked={props.cancel}>Cancel</Buttons>
         </div>
    </Aux>
    );
};

export default orderSummary;