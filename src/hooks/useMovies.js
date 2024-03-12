import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async (search) => {
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
