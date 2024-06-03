import React,{useState} from 'react'
import styles from "./HomePage.module.scss"
import global from "../Globalstyles.module.scss"
import { useNavigate } from "react-router-dom";
import FeatureCard from '../Features/FeatureCard';

function HomePage() {
    const [name, setName] = useState("")
    const [showPopup, setShowPopup] = useState(true)
    const navigate = useNavigate();

    const handleClick = () => {

        localStorage.setItem("name", JSON.stringify(name))
        
        setShowPopup(false)
        
    }
  return (
    <div className={global.outercontainer}>

        {showPopup && <div className={styles.popupBackground}>
        <div className={styles.outercontainer}>
            <div className={styles.container}>
            What's your name?
            <input onChange={(e)=>setName(e.target.value)}  />
            <div onClick={handleClick}>Enter</div>
        </div>
        </div>
    </div>}

        {
            !showPopup && 
            <div>

                <div id={styles.welcome}>Welcome back, {name}!</div>
             <div>
                <h1 id={styles.catch}>The All-In-One Recipe Finder
                    </h1>
                    <div id={styles.description}>
                    <p >Start adding all the items in your <u onClick={() => navigate("/fridge")}>fridge</u> into Cookit, and we'll do the rest.</p>
                      </div>
                    
             </div>



<div className={styles.featuresContainer}>
<span className={styles.features}>
                <FeatureCard svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>} feature={"Notes"} description={"Add notes to the items in your fridge to notify you if you need more, they've gotten rotten or anything else!"}/>

<FeatureCard svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>} feature={"Recipes"} description={"Forget about food delivery. Get delicious and new recipes to make based on the items in your frigde. "}/>

<FeatureCard svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>} feature={"Favorites"} description={"Save your favorite recipes to use next time."}/>

<FeatureCard svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>} feature={"Add and Delete"} description={"Easily add or delete items from your fridge."}/>

            </span>
    </div>

            



                </div>
                
            
        }
    </div>
    
  )
}

export default HomePage