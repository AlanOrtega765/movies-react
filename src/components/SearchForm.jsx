import { useState } from 'react'

function SearchForm ({ searchMovie }) {
  const [search, updateSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovie(search)
    updateSearch('')
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form__input'
        type='text'
        placeholder='Buscar película...'
        value={search}
        onChange={handleChange}
      />
      <button className='form__button' type='submit'>Buscar</button>
    </form>
  )
}

export default SearchForm
