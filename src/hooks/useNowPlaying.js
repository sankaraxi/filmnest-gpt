import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();

        dispatch(addNowPlayingMovies(jsonData.results));

    }

    useEffect(() => {
        getNowPlayingMovies();
    },[])

}

export default useNowPlaying;    