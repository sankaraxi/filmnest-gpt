import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {

    const {movId} = useParams();
    useMovieDetails(movId);

    const movieDetails = useSelector((store) => store.details.movieDetails);
    
    console.log(movieDetails);

    if (!movieDetails) return;

  return (
    <div className="bg-gray-900 pt-20">

      <div className=" flex justify-between m-10 mx-28">
        <div className="flex flex-col gap-5 w-5/12">
            <div className="" >
              <img 
                src={IMG_CDN_URL +  movieDetails.poster_path} 
                alt="" 
                className="w-[350px] rounded-sm "
              />
            </div>

            
            <div className="flex justify-between text-lg w-[350px]">
              <p className="text-white"> {new Date(movieDetails.release_date).getFullYear()}</p>
              <p className="text-white">{Math.floor(movieDetails.runtime/60)}<span>h</span> {movieDetails.runtime % 60}<span>m</span></p>
            </div>
        </div>

        <div className="text-white w-7/12">
          <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
          <div className="bg-white">
                <img
                    src={IMG_CDN_URL + movieDetails.production_companies[0].logo_path}
                    className=" "
                />
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default MovieDetails;

// {/* <div>
//                 <img
//                   src={IMG_CDN_URL + movieDetails.production_companies[0].logo_path}
//                 />
//               </div> */}