import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

//For Shopping List and Your Fridge 

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      item: '',
    }
    this.state = this.initialState;
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { item } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={this.handleChange} />
        <Button color="danger">Add Item</Button>
      </form>
    );
  }
}

export default Form;