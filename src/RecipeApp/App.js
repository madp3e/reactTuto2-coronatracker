import './App.css';
import React, { useEffect, useState } from 'react';

import Recipe from "./Recipe"

const App = () => {

  const [query,setQuery] = useState("chicken")

  const APP_ID = "436fae93"
  const APP_KEY = "3679ba4d878dbd16da0a6a462152240d"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    getRecipe()
  },[query])

  const getRecipe = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
    
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return ( 
    <div className="App">
      <form onSubmit={getSearch} className="search">
          <input onChange={updateSearch} value={search} type="text" className="search-bar"/>
          <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipes"> 
        {recipes.map((recipe) => (
          <Recipe title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
   );
}
 
export default App;
 