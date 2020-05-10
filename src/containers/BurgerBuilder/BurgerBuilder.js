import React, { Component } from 'react';
import Aux from '../../hoc/Auxi'

class BurgerBuilder extends Component{

state = {
    ingrediants: [
        {tomatos: true,
        cucambers: true,
        cheese: true,
        bacon: true}
    ],
    totalCost: 0,
    purchased: false
};

render(){

    return(
        <Aux>
            <div>Burger</div>
            <div>Build Controls</div>
        </Aux>
    );
}


};

export default BurgerBuilder;