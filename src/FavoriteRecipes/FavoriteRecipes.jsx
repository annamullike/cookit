import React,{useState} from 'react'
import RecipeCard from '../FoodCard/RecipeCard'
import styles from "./FavoriteRecipes.module.scss"
import global from "../Globalstyles.module.scss"
function FavoriteRecipes() {

  let favRecipesStorage = JSON.parse(localStorage.getItem("favorites"))
  
  const favRecipes = Object.values(favRecipesStorage).map(recipe => (
    <RecipeCard key={recipe.id} foodid={recipe.id} img={recipe.img} title={recipe.title} />
));
  console.log(favRecipesStorage)
  
  return (
    <div className={global.outercontainer}>
      <h1 style={{color: "black"}}>Here are your favorite recipes</h1>
      <div className={styles.container}>
        {favRecipes}
      </div>
        
    </div>
  )
}

export default FavoriteRecipes