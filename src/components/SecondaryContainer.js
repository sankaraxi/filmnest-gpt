import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store => store.movies));

  return (
    <div className="bg-black">
      <div className="-mt-48 mx-10 relative z-40">
        <MovieList title={"Trending Movies"} movies={movies?.trendingMovies}/>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      </div>
  </div>
  
  )
}

export default SecondaryContainer