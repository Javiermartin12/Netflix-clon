import { useEffect, useState } from 'react';
import { GetMovie,DeleteMovie } from '@/services/movieRequest';


const Movies = ()=>{
    const [movies, setMovies] = useState([])

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
                {}
            </ul>
        </div>
    )
}
export default Movies;
