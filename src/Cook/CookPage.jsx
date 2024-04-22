import React,{useState,useEffect} from 'react'
import styles from "./Cook.module.scss"
import FoodRow from '../FoodCard/FoodRow'
import RecipeCard from '../FoodCard/RecipeCard'
import global from "../Globalstyles.module.scss"

function CookPage() {
    const [res,setRes] = useState(2)
    const [apiKey,setApiKey] = useState("") 
    useEffect(() => {

        fetchApi()
    },[])
    const fetchApi = async () => {
        try {
           const response = await fetch("http://localhost:5000/apikey")
        const data = await response.json()
  
        setApiKey(data.apikey) 
        } catch(error) {
            console.error("error in fetching api key",error)
        }
        

    }
   

    const [recipes, setRecipes] = useState([])

    const getRecipes = async (items) => {
        items = items.join(",+")
        console.log(items)
        try {
            console.log("api key", apiKey)
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${items}&number=${res}&apiKey=${apiKey}`)
            const data = await response.json()

            if (data.length) {
                for (let i of data) {
                    console.log(i["title"])
                    recipes.push(<RecipeCard img={i["image"]} title={i["title"]} />)
    
                }
                const recipeComponents = data.map(recipe => (
                    <RecipeCard foodid={recipe.id} key={recipe.id} img={recipe.image} title={recipe.title} />
                ));
                setRecipes(recipeComponents);
            }
         
            

            

        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        let localIngredients = JSON.parse(localStorage.getItem("ingredients"))
        const ingredients = Object.keys(localIngredients)
        if (apiKey) {
            getRecipes(ingredients)
        }
        
    },[res,apiKey])

    
  return (
    <div className={global.outercontainer}>
        <h1>Here's what I can cook today!</h1>
        <div className={styles.inputcontainer}>
          <input id={styles.input} placeholder='How many recipes?' type="number" onChange={(e)=>setRes(e.target.value)} />  
        </div>
        
        <span className={styles.recipeContainer}>
            {recipes}
        </span>
        
        
    </div>
  )
}

export default CookPage