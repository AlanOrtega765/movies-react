import { apiImageUrl } from '../config'

function MoviesWithResult ({ movies }) {
  const imageUrl = (posterPath) => {
    return `${apiImageUrl}/w300${posterPath}`
  }

  return (
    movies.map(movie => (
      <article className='card' key={movie.id}>
        <img className='card__image' src={imageUrl(movie.image)} alt={movie.title} />
        <strong className='card__title'>{movie.title} ({movie.year.slice(0, 4)})</strong>
      </article>
    ))
  )
}

function MoviesWithoutResult () {
  return (
    <p>No hay peliculas encontradas</p>
  )
}

function Movies ({ movies }) {
  const hasMovies = movies.length > 0

  return (
    hasMovies ? <MoviesWithResult movies={movies} /> : <MoviesWithoutResult />
  )
}

export default Movies
