import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer