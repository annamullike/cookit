import React,{useState} from 'react'
import styles from "./RecipeCard.module.scss"
function RecipeCard({foodid,img, title}) {
    const [favUpdate,setFavUpdate] = useState(true)


    const isLiked = (id) => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        if (id in favorites) {
            return true
        }
        return false
    }
    console.log(img, title,"here")

    const favorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) ?? {};


        if (!(foodid in favorites)) {
            favorites[foodid] = {"img":img,"title":title,"id":foodid}
        }  else {
            delete favorites[foodid]
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))

        setFavUpdate(!favUpdate)
    }


  return (
    <div className={styles.container}>


        <span className={styles.recipeinfo}>
                <img id={styles.img} src={img} />
                <div className={styles.bottominfo}>
                    <h1 id={styles.title}>{title}</h1>
                    <div id={styles.heart}>
                        {isLiked(foodid) ? <svg onClick={favorite} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg> : <svg onClick={favorite} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> }
                    {/* <svg onClick={favorite} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg> */}
                    </div>
                    
                </div>
                
        </span>
        

    </div>
  )
}

export default RecipeCard