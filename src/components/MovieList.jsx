import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
   console.log("MoviesCheck", movies)
   const safeMovies = Array.isArray(movies) ? movies.filter((movie)=> movie && movie.poster_path) : []
   return (
      <div className="text-white px-12">
         <h1 className="text-3xl py-2">{title}</h1>
         <div className="flex overflow-x-scroll no-scrollbar">
         <div className="flex gap-3">
            {
               movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path || movie.poster_path != undefined ? movie.poster_path: null} />) 
            }
         </div>
      </div>
      </div>
   )
}

export default MovieList