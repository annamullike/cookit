import React from 'react'
import styles from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
    <span className={styles.container}>
        
       <h1 onClick={() => navigate("/")} className={styles.logo}>Cookit!</h1>

        <ul className={styles.list}>

            <span>
                <li className={styles.item} onClick={() => navigate("/fridge")} >
                My fridge
            </li>
            </span>

            <span className={styles.icon} onClick={() => navigate("/cook")}>
           
                <li className={styles.item}>
                Cook!
            </li>
            </span>

            <span className={styles.icon} onClick={() => navigate("/favorites")}>
           
                <li className={styles.item}>
                Favorite Recipes
            </li>
            </span>
            
          
           
            
            
        </ul>

    </span>
    </div>
  )
}

export default Navbar