import React, { Component } from 'react'
import {  Route, Link } from 'react-router-dom'
import CocktailsList from './CocktailsList'
import CocktailDetail from './CocktailDetail'



export default class CocktailsPage extends Component{
  constructor(){
    super()

    this.state = {
      cocktails: []
    }
    this.fetchCocktails = this.fetchCocktails.bind(this)
  }

  componentDidMount(){
    this.fetchCocktails()
  }

  fetchCocktails(){
      fetch('http://localhost:3000/api/v1/cocktails')
        .then( res => res.json() )
        .then( data => this.setState({ cocktails: data}) )
  }


  render(){
    return(

      <div>
        <h1>Its Boozey Baby</h1>
        <CocktailsList cocktails={this.state.cocktails} />
        <Route path='/cocktails/:id' render={(routerProps) => {

          const id = routerProps.match.params.id
          const drink = this.state.cocktails.find( c => c.id === parseInt(id) )
          return < CocktailDetail drink={drink} />
          }
        } />
      </div>

    )
  }
}
