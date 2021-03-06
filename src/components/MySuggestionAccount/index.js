import React from "react"
import styles from "./MySuggestionAccount.module.css"
import { Link } from 'react-router-dom'

const MySuggestionAccount = (props) => {
  const { vinyls } = props
  return (
    <div className={styles.container}>

      {vinyls.map((vinyl) => {
        return (
          <div className={styles.item} key={vinyl[0]}>
            <Link to="/search/album"><img className={styles.image} src={vinyl[1]} alt="Cover"/></Link>
          </div> 
        )
      })}
        
    </div> 
  )
}
      
export default MySuggestionAccount
