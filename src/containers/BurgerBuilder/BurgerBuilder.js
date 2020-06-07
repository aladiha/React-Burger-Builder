import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import instance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{

state = {
    ingredients: null,
    totalCost: 2,
    purchasable: false,
    showModal: false,
    loading: false,
    error: false
};

componentDidMount () {
    instance.get('https://my-burger-react-45298.firebaseio.com/ingredients.json')
    .then(response => {
        this.setState({ingredients: response.data})
    })
    .catch(error => {
        this.setState({
            error: true
        })
    });
}

updatePurchaseState(updatedIngredients) {
    
    const newSum = Object.keys(updatedIngredients).map(
        igKey => {
            return updatedIngredients[igKey];
        }
    ).reduce((sum, el) => { 
        return sum + el;
    },0);
    this.setState({
        purchasable: newSum > 0
    });

}

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
    this.updatePurchaseState(updatedIngredients);
}


removeIngredientHandler = (type) => {

    const updatedIngredients = {
        ...this.state.ingredients
    };

    if (this.state.ingredients[type] > 0){
        const updatedCount =  this.state.ingredients[type] - 1;

        updatedIngredients[type] = updatedCount;
        
        const newCost = this.state.totalCost - Ingredient_Prices[type];

        this.setState({
        ingredients: updatedIngredients,
        totalCost: newCost
        })
    }
    this.updatePurchaseState(updatedIngredients);
}

orderNowHandler = () => {
    this.setState({
        showModal: true
    })
}

dismissModalHandler = () => {
    this.setState({
        showModal: false
    })
}

continuePurchaseHandler = () => {
    this.setState({loading: true});
    // alert("to be continued");
    const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
            name: 'Aladin Handoklo',
            address: {
                street: 'Teststreet 1',
                zipCode: '21311',
                city: 'merashi'
            },
            email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
    }
    instance.post('/orders.json',order)
    .then(response => {this.setState({
        loading: false,
        purchasable: false,
        showModal: false
    })})
    .catch(error => {
        this.setState({
            loading: false,
            purchasable: false,
            showModal: false
    })});
}

render(){
    const disabledInfo = {
        ...this.state.ingredients
    };

    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] === 0
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>
    
    if(this.state.ingredients){
        burger = <Aux><Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        more={this.addIngredientHandler}
        less={this.removeIngredientHandler}
        disable={disabledInfo}
        purchasable={this.state.purchasable}
        price={this.state.totalCost}
        order={this.orderNowHandler}
    /></Aux>
    orderSummary = <OrderSummary 
    ingredients={this.state.ingredients} 
    continue={this.continuePurchaseHandler}
    cancel={this.dismissModalHandler}
    price={this.state.totalCost}/>;
    }
    if (this.state.loading){
        orderSummary = <Spinner/>;
    }
    return(
        <Aux>
            <Modal show={this.state.showModal} clicked={this.dismissModalHandler}> 
            {orderSummary}
            </Modal> 
            {burger}
        </Aux>
    );
}


};

export default withErrorHandler(BurgerBuilder , instance);