import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import Form from './Form.jsx';
import SMSForm from './SMSForm.jsx';
import IngredientCard from './IngredientCard.jsx';
import SmallLoader from '../Loading/SmallLoader';
import { getShoppingList, setShoppingListItem, deleteShoppingListItem } from '../../lib/api.js'

class ShoppingList extends Component {

  state = {
    foodItems: [],
    isLoading: false
  };

  refreshShoppingList = () => {
    this.setState({
      isLoading: true
    })
    getShoppingList(this.props.cookies.get('id'), (results) => {
      let newfoodItems = []
      results.data.forEach((entry) => {
        newfoodItems.push({ 
          item: entry.name, 
          image: entry.image,
          id: entry.id
        })
      })
      if (this._isMounted) {
        this.setState({
          foodItems: newfoodItems,
          isLoading: false
        })
      }
    })
  }

  componentDidMount()  {
    this._isMounted = true;
    this.refreshShoppingList();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  removeItem = id => {
    deleteShoppingListItem(id)
    let newState = this.state.foodItems.slice(0);
    let index = newState.findIndex((item) => id === item.id)
    newState.splice(index, 1)
    this.setState({
      foodItems: newState
    })
  }

  handleSubmit = item => {
    setShoppingListItem(this.props.cookies.get('id'), item.name, (results) => {
      if (results.status === 200) {
        this.refreshShoppingList()
      } else {
        alert("There was a problem. Please try again.")
      }
    })
  }

  makeRows = () => {
    const { foodItems } = this.state
    if (foodItems.length > 0) {
      return foodItems.map((entry, index) => {
        return (<IngredientCard 
          name={entry.item} 
          image={entry.image} 
          key={index}
          id={entry.id} 
          removeItem={this.removeItem} />)
      });
    } else {
      return ''
    }
  }

  render() {
    const ingredients = this.makeRows();

    return (
      <Card body >
        <CardTitle className="CardTitle"><h2>Shopping List</h2></CardTitle>
        <hr />
        {this.state.isLoading ? <SmallLoader /> : <div className="ingredient-list-container">{ingredients}</div>} 
        <br />
        <Form handleSubmit={this.handleSubmit} />
        <br />
        <SMSForm cookies={this.props.cookies} />
      </Card>
    );
  }
}
export default ShoppingList;


