import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Row, Col, Container, Button } from 'reactstrap'

export default class NewCocktailForm extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      description: "",
      instructions: "",
      source: "",
      proportions: {
        amount: "",
        ingredient_name: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    debugger
    this.setState(function(previousState){
      return {
      name: event.target.name.value,
      description: event.target.value,
      instructions: event.target.value,
      source: event.target.value,
      proportions: {
        amount: event.target.value,
        ingredient_name: event.target.value
      }
    }
  }
)
  }

  handleSubmit(event){
    event.preventDefault()


  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        <label>Name</label><br/>
        <input onChange={this.handleChange} name="name" type="text"></input><br/>
        <label>Description</label><br/>
        <input onChange={this.handleChange} name="description" type="text"></input><br/>
        <label>Instructions</label><br/>
        <input onChange={this.handleChange} name="instructions" type="text"></input><br/>
        <label>Source</label><br/>
        <input onChange={this.handleChange} name="source" type="text"></input><br/>
        <label>Proportions:</label><br/>
        <label>Amount</label><br/>
        <input onChange={this.handleChange} name="amount" type="text"></input><br/>
        <label>Ingredient Name</label><br/>
        <input onChange={this.handleChange} name="ingredient" type="text"></input><br/>
        <input type="submit" value="Submit" /><br/>
      </form>
      </div>
    )
  }
}
