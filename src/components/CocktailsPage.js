import React, { Component } from 'react'
import {  Route, Link, Switch } from 'react-router-dom'
import CocktailsList from './CocktailsList'
import CocktailDetail from './CocktailDetail'
import NewCocktailForm from './NewCocktailForm'
import { Grid, Row, Col, Container, Button } from 'reactstrap'





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
    <Row>
      <Col md="4">
        <h1>Its a Boozey Baby</h1>
        <CocktailsList cocktails={this.state.cocktails} />
      </Col>
        <Col md="8">
          <Switch>
            <Route exact path="/cocktails/new" render={() => <NewCocktailForm /> }/>
            <Route exact path='/cocktails/:id' render={(routerProps) => {

          const id = routerProps.match.params.id
          const drink = this.state.cocktails.find( c => c.id === parseInt(id) )
          return < CocktailDetail drink={drink} />
          }
        } />
      </Switch>
      <Link to="/cocktails/new">Add Drink</Link>
        </Col>
    </Row>
    </div>

    )
  }
}
