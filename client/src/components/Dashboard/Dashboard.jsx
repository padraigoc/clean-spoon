import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import SavedRecipes from '../SavedRecipes/SavedRecipes.jsx';
import YourFridge from '../YourFridge/YourFridge.jsx';
import {Button, ButtonGroup} from 'reactstrap';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {render: ''};
  }

  handleKeyPress = (compName, event) => {
    console.log(compName);
    this.setState({ render: compName });
  }

  _renderSubComp() {
    switch (this.state.render) {
      case 'savedRecipes': return <SavedRecipes />
      case 'yourFridge': return <YourFridge />
      case 'shoppingList': return <ShoppingList />
      default : return <YourFridge />
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <div className="text-center" id="topMargin">
          <ButtonGroup size="lg" className="block">
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'savedRecipes')}>Saved Recipes</Button>
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'yourFridge')}>Your Fridge</Button>
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'shoppingList')}>Shopping List</Button>       
          </ButtonGroup>
          {this._renderSubComp()}
        </div>
      </div>
    );
  }
}
export default Dashboard;


