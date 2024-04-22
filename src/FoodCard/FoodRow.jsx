import React from 'react'
import FoodCard from './FoodCard'
import styles from "./FoodCard.module.scss"
function FoodRow() {
    const foodRow = []
    for (let i = 0; i < 5; i++) {
        foodRow.push(<FoodCard key={i}/>)
    }

  return (
    <div>
        <span className={styles.foodRow} >
            {foodRow}
        </span>

    </div>
  )
}

export default FoodRow
