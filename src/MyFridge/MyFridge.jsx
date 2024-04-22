import React, {useEffect,useState} from 'react'
import styles from "./MyFridge.module.scss"
import FoodCard from '../FoodCard/FoodCard'
import FoodRow from '../FoodCard/FoodRow'
import global from "../Globalstyles.module.scss"

function MyFridge() {

    const [ingredients,setIngredients] = useState([])
    const [item, setItem] = useState("")
    const name = JSON.parse(localStorage.getItem("name"))
    

    useEffect(() => {
        let storedIngredients = JSON.parse(localStorage.getItem("ingredients")) ?? [];
        setIngredients(storedIngredients);
    }, []);


    const remove = (item) => {

        let localIngredients = JSON.parse(localStorage.getItem("ingredients"))
        localIngredients = {...localIngredients}
        // const updatedIngredients = { ...localIngredients };
        delete localIngredients[item];
        // localIngredients = localIngredients.filter(i => i !== item)
        localStorage.setItem("ingredients", JSON.stringify(localIngredients))
        setIngredients(localIngredients)

    }

    const addItem = () => {
        if (ingridientExists(item)) {
        const ingredients = JSON.parse(localStorage.getItem("ingredients")) ?? {};
        // if (!ingredients.includes(item)) {
        if (!(item in ingredients)) {
            ingredients[item] = {quantity:1}
        }
        
        localStorage.setItem("ingredients", JSON.stringify(ingredients))
        setIngredients(ingredients)
        } else {
            alert("ingridient doesn't exist")
        }
        console.log(ingredients)
        
    }

    const ingridientExists = async (item) => {
        try {
            // const response =  await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${item}&apiKey=${apiKey}`)
            // const data = await response.json()
            if (data.results.length > 0) {
                console.log("data",data)
                return true;
            }

            return false;

        } catch(error) {
            console.error(error)
        }

    }
    const saveNotes = (item, notes) => {
        console.log("notes here",notes)
        const localIngredients = { ...ingredients };
        localIngredients[item].notes = notes;
        localStorage.setItem("ingredients", JSON.stringify(localIngredients));
        setIngredients(localIngredients);
    }



    const foodCards = Object.keys(ingredients).map((item,index) => (
        <FoodCard
            key={index}
            item={item}
            foodid={ingredients[item]["id"]}
            // src={ingredients[item].src}
            onSave={(notes) => saveNotes(item, notes)}
            onRemove={() => remove(item)}
            notesProps={ingredients[item]["notes"] ? ingredients[item]["notes"] : ""}
           
        />
    ))
    {console.log(ingredients['bread'])}


    



    
  return (
    <div className={global.outercontainer}>

        <span className={styles.welcome}>
<h4>Welcome back, {name}!</h4>
        <h1>Whats in my fridge</h1>
        </span>
        
        
        
        <div className={styles.container}>
    <input onChange={(e) => setItem(e.target.value)} id={styles.input} placeholder={"Add item"}/>
    <div onClick={addItem} className={styles.button}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></div>
    </div>

        
        <span className={styles.foodcontainer}>
        {foodCards}
        </span>
        
        </div>
  )
}

export default MyFridge