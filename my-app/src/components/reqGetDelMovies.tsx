import { useEffect, useState } from 'react';
import { GetMovie,DeleteMovie } from '@/services/movieRequest';
import Image from 'next/image';

const ReqGetAllMoviesAndDelete = ()=>{
    const [movies, setMovies] = useState<any[]>([])

        useEffect(()=>{
            const fetchAllMovies = async()=> {
                try {
                    const data = await GetMovie()
                    setMovies(data)
                } catch (error) {
                    console.error("Error fetching movies", error);

                }
            }
            fetchAllMovies()
        },[]);

        const handleDelete = async (id:string)=> {
            try {
                await DeleteMovie(id)
                setMovies(movies.filter(movie => movie.id !== id))
            } catch (error) {
                console.error("Error deleting movie", error);
            }
        }


    return(
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie =>(
                        <li key={movie.id}>
                            <div>
                                <h3>{movie.name}</h3>
                                <p>{movie.sinopsis}</p>
                                
                                <p>Score: {movie.score}</p>
                                <button onClick={() => handleDelete(movie.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                ) : (<p>No movies available</p>
                )} 
            </ul>
        </div>
    )
}
export default ReqGetAllMoviesAndDelete;
