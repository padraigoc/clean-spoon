import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';
import Table from './Table.jsx';
import Form from './Form.jsx';
import SMSForm from './SMSForm.jsx';
import { getShoppingList } from '../../lib/api.js'

class ShoppingList extends Component {

  state = {
    foodItems: []
  };

  componentDidMount()  {
    this._isMounted = true;
    // Get the shopping list from the server
    getShoppingList(this.props.cookies.get('id'), (results) => {
      let newfoodItems = []
      results.data.forEach((entry) => {
        newfoodItems.push({ item: entry.name })
      })
      if (this._isMounted) {
        this.setState({
          foodItems: newfoodItems
        })
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  removeItem = index => {
    const { foodItems } = this.state

    this.setState({
      foodItems: foodItems.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = item => {
    this.setState({ foodItems: [...this.state.foodItems, item] })
  }

  render() {

    const { foodItems } = this.state;

    return (
      <div id="itemList">
        
          <Card body >
            <CardTitle className="CardTitle">This is your Shopping List</CardTitle>
            <hr />  
            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />
            <br />
            <SMSForm cookies={this.props.cookies} />
          </Card>
        </div>
    
    );
  }
}
export default ShoppingList;


