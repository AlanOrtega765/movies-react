import './App.css'
import { useCallback, useState } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const { search, error, setSearch } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useMovies({ sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Movies App</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            className='form__input'
            type='text'
            placeholder='Buscar película...'
            value={search}
            onChange={handleChange}
          />
          <button className='form__button' type='submit'>Buscar</button>
          <input type='checkbox' checked={sort} onChange={handleSort} />
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </header>

      <main className='grid'>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
