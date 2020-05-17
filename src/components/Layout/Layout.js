import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHander = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                clicked= {this.sideDrawerClosedHander}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        );
    }
}

export default Layout;