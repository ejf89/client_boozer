import React from 'react'
import { Route, Link } from 'react-router-dom'
import CocktailDetail from './CocktailDetail'

const CocktailsList = (props) => {

  const list = props.cocktails.map( (cocktail) => <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}> {cocktail.name} </Link></li>)

  return(
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default CocktailsList
