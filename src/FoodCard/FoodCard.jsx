import React,{useState} from 'react'
import styles from "./FoodCard.module.scss"
function FoodCard({foodid,item,onRemove, onSave,notesProps}) {


    const [notes,setNotes] = useState("")
    const handleSave = () => {
        onSave(notes)
    }


  return (
    <div className={styles.container}>
        <span className={styles.cardinfo}>
        <h1>{item}</h1>
        <div className={styles.delete} onClick={onRemove}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></div>




        </span>



        <textarea onChange={(e) => setNotes(e.target.value)} className={styles.notes} rows="5" cols="50">{notesProps}</textarea>
       <span className={styles.savecontainer}>
       <div onClick={handleSave} id={styles.save}>Save Notes</div>
       </span>

        
    </div>
  )
}

export default FoodCard


/**
 * <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
 */