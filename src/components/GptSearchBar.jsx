import React, { useRef } from 'react'
import openai from '../utils/openai';
import { fetchGeminiMovies } from "../utils/gemini";
import { api_options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', api_options);
    const json = await data.json()

    return json.results.filter(el => el.title == movie)[0]
  }
  const handleGptSearch = async () => {
    const query = searchText.current.value;
    console.log("Query:", query);

    try {
      const movies = await fetchGeminiMovies(query);
      console.log("Gemini Output:", movies);
      console.log(movies.split(','))
      const response = movies.split(',')

      const promiseArray = response.map(movie => searchMovieTMDB(movie))
      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults)
      dispatch(addGptMovieResults({movieNames: response, movieData: tmdbResults}))
    } catch (error) {
      console.error("Gemini error:", error);
    }
  };
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form action="" onSubmit={e => e.preventDefault()} className='w-full md:w-1/2 m-1 p-4 gap-3 bg-black grid grid-cols-12'>
        <input type="text" ref={searchText} className='col-span-9 rounded-md ps-4' placeholder='What would you like to watch today?' />
        <button className='btn px-4 py-2 col-span-3 bg-[#e60914] text-white rounded-md' onClick={handleGptSearch}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar