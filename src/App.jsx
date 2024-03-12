import './App.css'
import Movies from './components/Movies'
import SearchForm from './components/SearchForm'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies, getMovies } = useMovies()

  const handleSearch = (search) => getMovies(search)

  return (
    <>
      <header>
        <h1>Movies App</h1>

        <SearchForm searchMovie={handleSearch} />
      </header>

      <main className='grid'>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
