import { apiUrl, apiKey } from '../config'

export const searchMovies = async ({ search }) => {
  if (search) {
    try {
      const res = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&language=es-MX&query=${search}`)
      const data = await res.json()

      const movies = data.results

      return movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        image: movie.poster_path
      }))
    } catch (error) {
      throw new Error('Error searching movies')
    }
  }
}
