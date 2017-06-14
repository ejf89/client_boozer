import React from 'react'
import { Route, Link } from 'react-router-dom'

const CocktailDetail = (props) => {

  return(
    <div className="drink">
        <h3>{props.drink.name}</h3>
        <ul>
          <li>{props.drink.description}</li>
          <li>{props.drink.instructions}</li>

          <ul key="1">
            {props.drink.proportions.map( proportion => <li key={proportion.id}> {proportion.ingredient_name} </li>) }
          </ul>
        </ul>
    </div>
  )
}

export default CocktailDetail
