import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


class BurgerBuilder extends Component{

state = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalCost: 2,
    purchased: false
};

addIngredientHandler = (type) => {
    const updatedCount =  this.state.ingredients[type] + 1;

    const updatedIngredients = {
        ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    
    const newCost = this.state.totalCost + Ingredient_Prices[type];

    this.setState({
      ingredients: updatedIngredients,
      totalCost: newCost
    })
}


removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0){
        const updatedCount =  this.state.ingredients[type] - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        
        const newCost = this.state.totalCost - Ingredient_Prices[type];

        this.setState({
        ingredients: updatedIngredients,
        totalCost: newCost
        })
    }
}


render(){

    return(
        <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            more={this.addIngredientHandler}
            less={this.removeIngredientHandler}
            />
        </Aux>
    );
}


};

export default BurgerBuilder;