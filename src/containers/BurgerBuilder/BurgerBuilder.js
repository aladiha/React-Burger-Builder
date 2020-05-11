import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{


state = {
    ingrediants: {
        salad: 1,
        bacon: 1,
        meat: 2,
        cheese: 2
    },
    totalCost: 0,
    purchased: false
};

render(){

    return(
        <Aux>
            <Burger ingredients={this.state.ingrediants}/>
            <div>Build Controls</div>
        </Aux>
    );
}


};

export default BurgerBuilder;