import React from 'react'
import Layout from 'components/Layout'
import styles from './SearchResult.module.css'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'

const SearchResult = () => {
  return (
    <Layout>
      <Title name="Résultat de recherche"/>
      <div className={styles.container}>
        Page des résultats de recherche
      </div>
      <SearchBar placeholder='null'  className={styles.SearchBar}/>
    </Layout>
  )
}

export default SearchResult
