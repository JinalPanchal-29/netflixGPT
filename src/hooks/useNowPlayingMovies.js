import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { api_options } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.nowPlayingMovies)
    console.log(nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;