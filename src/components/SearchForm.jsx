import { useState } from 'react'

function SearchForm ({ searchMovie, sortMovies }) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovie(search)
    setSearch('')
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
    sortMovies(!sort)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='search-container'>
        <input
          className='form__input'
          type='text'
          placeholder='Buscar película...'
          value={search}
          onChange={handleChange}
        />
        <button className='form__button' type='submit'>Buscar</button>
      </div>
      <input type='checkbox' checked={sort} onChange={handleSort} />
    </form>
  )
}

export default SearchForm
