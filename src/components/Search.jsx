import React, { useState } from 'react'
import "../assets/styles/styles.css"
import { Link } from 'react-router-dom'

const Search = () => {
    
  return (
    <div className='search-container'>
        <h3>Find The Best Destinations You Need</h3>

        <div className='search-box'>
            <input type="text" placeholder='Where to?'/>
            <select >
                <option value="when">When</option>
                <option value="jan">January</option>
                <option value="feb">Febraury</option>
                <option value="Mar">March</option>
            </select>
            <select>
                <option value="when">Type </option>
                <option value="jan">Religious</option>
                <option value="feb">Beach</option>
                <option value="Mar">Trekking</option>
                <option value="Mar">City</option>
                <option value="Mar">Adventure</option>
            </select>
            <button className='search-btn'> <Link to="/searched-list"> Search </Link> </button>
        </div>
    </div>
  )
}

export default Search
