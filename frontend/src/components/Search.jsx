import React from 'react'
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Search.css'

export const Search = () => {
  return (
    <div className='DivS'>
      <h2 className='title-search'>Busca o Crea tu Tema</h2>
      <input type="text"  id='search' placeholder='Search'/>
     <FontAwesomeIcon icon={faSearch}  className='icon'/>
     
     
    </div>
  )
}
