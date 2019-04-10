import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/nav.jsx';
import RecipesContainer from './RecipesContainer';
import SearchAgain from './SearchAgain';
import SideBar from './SideBar';
import { getFridge } from '../../lib/api.js';

function RecipeResults(props) {
  let [recipes, setRecipes] = useState(props.location.state.searchResults);

  let [fridge, setFridge] = useState(null);

  // Get the fridge items and set them so that the recipe cards can reference ingredients that the user already has. This only happens on first render.

  useEffect(() => {
    getFridge(props.cookies.get('id'), (results) => {
    let newfoodItems = []
    results.data.forEach((entry) => {
      newfoodItems.push({ 
        name: entry.name, 
        id: entry.id
      })
    })
    console.log("About to set the fridge with this: ", {
      foodItems: newfoodItems
    })
    setFridge({
      foodItems: newfoodItems
    })
  })
  }, [])

  function processRecipeData(recipes) {
    let processed = [];
    console.log("Raw unprocessed recipes: ", recipes)
    recipes.data.matches.forEach((recipe) => {
      processed.push({
        recipeName: recipe.recipeName,
        id: recipe.id,
        course: recipe.attributes.course,
        ingredients: recipe.ingredients,
        matchedIngredients: recipe.matchedIngredients,
        source: recipe.sourceDisplayName,
        image: recipe.bigImage,
        prepTime: recipe.totalTimeInSeconds
      })
    })
    return processed;
  }

  let processedRecipes = processRecipeData(recipes)

  return (
    <div className="recipe-results">
      <Navbar />
      <RecipesContainer recipes={processedRecipes} currentFridge={fridge} cookies={props.cookies}/>
      <SearchAgain />
      <SideBar />
    </div>
  )
}

export default RecipeResults;