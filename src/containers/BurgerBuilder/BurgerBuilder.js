import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

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
            <Burger />
            <div>Build Controls</div>
        </Aux>
    );
}


};

export default BurgerBuilder;