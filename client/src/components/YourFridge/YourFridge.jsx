import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, Col } from 'reactstrap';
import Table from './Table.jsx';
import Form from './Form.jsx';
import IngredientCard from './IngredientCard.jsx';
import { getFridge, setFridgeItem } from '../../lib/api.js';


class YourFridge extends Component {
  
  //default values for the time being
  state = {
    foodItems: []
  };

  componentDidMount()  {
    // Get the fridge items from the server
    getFridge(this.props.cookies.get('id'), (results) => {
      let newfoodItems = []
      results.data.forEach((entry) => {
        newfoodItems.push({ 
          item: entry.name, 
          image: entry.image
        })
      })
      this.setState({
        foodItems: newfoodItems
      })
    })
  }
  
  removeItem = index => {
    // Must be edited to call DB
    const { foodItems } = this.state
    
    this.setState({
      foodItems: foodItems.filter((character, i) => {
        return i !== index
      }),
    })
  }
  
  handleSubmit = item => {
    setFridgeItem(this.props.cookies.get('id'), item.name, (results) => {
      if (results.status === 200) {
        alert("Success! Added this item to your fridge.")
        
      } else {
        alert("There was a problem. Please try again.")
      }
    })
  }
  
  makeRows = () => {
    const { foodItems } = this.state
    if (foodItems.length > 0) {
      console.log('Food items has more than 0 things')
      return foodItems.map((entry, index) => {
        return (<IngredientCard name={entry.item} image={entry.image} key={index}/>)
      });
    } else {
      return ''
    }
  }

  render() {
    const ingredients = this.makeRows();

    return (
      <Card body >
        <CardTitle>This is your fridge</CardTitle>
        <hr />
        <div className="ingredient-list-container">{ingredients}</div>
        {/* <Table characterData={foodItems} removeItem={this.removeItem} /> */}
        <br />
        <Form handleSubmit={this.handleSubmit} />
      </Card>
    );
  }
}
export default YourFridge;