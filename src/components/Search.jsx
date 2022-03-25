import React, { useState } from 'react'

const Search = () => {

  const [ search, setSearch ] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </div>
  )
}

export default Search