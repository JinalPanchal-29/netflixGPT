import { useDispatch, useSelector } from 'react-redux'
import MovieList from "./MovieList"
import { addGptMovieResults } from '../utils/gptSlice'
import { useEffect } from 'react'

const GptMovieSuggestion = () => {
  const dispatch = useDispatch()
  const { movieNames, movieData } = useSelector(store => store.gpt)
  const filteredMovies = movieNames ? movieNames.map((name, index) => ({
    name,
    data: movieData[index]
  })).filter(item => item.data && typeof item.data == 'object') : [];

  useEffect(() => {
    if (filteredMovies.length > 0) {
      dispatch(
        addGptMovieResults({
          movieNames: filteredMovies.map(movie => movie.name),
          movieData: filteredMovies.map(movie => movie.data),
        })
      )
    }
  }, [dispatch]) 
  if (!movieNames) return null


  return (
    <div className='p-2 m-2 bg-black text-white bg-opacity-70'>
      <MovieList title='Suggested' movies={movieData} />
    </div>
  )
}

export default GptMovieSuggestion