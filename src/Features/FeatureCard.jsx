import React from 'react'
import styles from "./FeatureCard.module.scss"
function FeatureCard({feature,description,svg}) {
  return (
    <div className={styles.container} >
        <div className={styles.top}>
           <div className={styles.content}>
    <div id={styles.feature}>{feature}</div> 
        </div>
        
            <div id={styles.svg}>{svg}</div>

            <div id={styles.description}>{description}</div>
        </div>
        
        
    </div>
  )
}

export default FeatureCard