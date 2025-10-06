import { useDispatch, useSelector } from "react-redux"
import { api_options } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const MainContainer = () => {
   const trailerVideo = useSelector(store => store.movies?.trailerVideo)
   const dispatch = useDispatch()
   const movies = useSelector(store => store.movies?.nowPlayingMovies);
   const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/1311031/videos?language=en-US', api_options)
      const json = await data.json()
      console.log(json)
      const trailer = json.results.filter(video => video.type == 'Trailer')[0];
      dispatch(addTrailerVideo(trailer))
      console.log(trailer)
   }
   useEffect(() => {
      getMovieVideos()
   }, [])
   if (!movies) return;
   const mainMovie = movies[1];
   const { original_title, overview, movieId } = mainMovie;

   return (
      <div>
         <div className="w-full aspect-video flex items-center absolute text-white bg-gradient-to-r from-black">
            <div className="px-12">
               <h1 className="text-6xl font-bold">{original_title}</h1>
               <p className="w-1/4 py-6 text-lg">{overview}</p>
               <div className="text-lg gap-4">
                  <button className="me-3 bg-gray-400 w-44 text-white py-2 rounded-md">▶ Play</button>
                  <button className="py-2 bg-gray-400 w-44 text-white px-8 rounded-md">More Info</button>
               </div>
            </div>
         </div>
         <div className="w-full aspect-video">
            <iframe className="w-full h-full" src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?autoplay=1&mute=1&controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>
      </div>
   )
}

export default MainContainer