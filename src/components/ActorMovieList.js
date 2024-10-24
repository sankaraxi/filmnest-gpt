import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ActorMovieCard from './ActorMovieCard';

const ActorMovieList = ({movies}) => {

    const actorMovies = movies?.cast || [];
    const moviesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(actorMovies.length / moviesPerPage);

    // Get the movies for the current page
    const currentMovies = actorMovies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
  return (
    <div className='px-12 py-3'>
       <div className='flex flex-wrap'>
        {currentMovies.map(movie => (
                <Link to={'/movies/'+movie.id} >
                    <ActorMovieCard key={movie.id} movie={movie}/>
                </Link>
        ))} 
      </div>


      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                >
                    Next
                </button>
            </div>
    </div>
   
  )
}

export default ActorMovieList