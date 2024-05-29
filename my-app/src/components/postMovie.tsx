import { useState } from "react";

import { CreateMovie } from "@/services/movieRequest";
const url = "http://localhost:4000/movie"


const NewMovie = () => {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    // const [posterImage, setPosterImage] = useState<File | undefined>(undefined);
    const [score, setScore] = useState(0.0);
    const [sinopsis, setSinopsis] = useState('');



    const handleSubmit = async (event: React.FormEvent) =>{
        event.preventDefault();
        
            try {
                const scoreNumber = parseFloat(score);
                await CreateMovie({ name, score: scoreNumber, sinopsis }, userId);              
              console.log("movie created")
                prompt("movie created")
            } catch (error) {
                console.error("Error creating movie", error);
                prompt("movie not created")
            }
    }
       return (
        <div>
            <h2>Create new movie</h2>
            <form onSubmit={handleSubmit}>
            {/* <input
                    type="number"
                    value={userId ?? ''}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    placeholder="User ID"
                    
                /> */}
            <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Movie Name"
                    required />

            {/* <input
                    type="file"
                    onChange={(e) => setPosterImage(e.target.files ? e.target.files[0] : undefined)}
                    required
                /> */}
             <input
                    type="number"
                    value={score ?? ''}
                    onChange={(e) => setScore(Number(e.target.value))}
                    placeholder="Score"
                    required
                />
              <input
                    type="text"
                    value={sinopsis}
                    onChange={(e) => setSinopsis(e.target.value)}
                    placeholder="Sinopsis"
                    required
                />
                <button type="submit">Create</button>
            </form>
            

        </div>
    )
 }

 export default NewMovie;
