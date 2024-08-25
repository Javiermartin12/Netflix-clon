import axios from "axios";


const url = "http://localhost:4000/movie"





export const GetMovie = async ()=> {
    try {
        
        const response =  await axios.get(url) 
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const CreateMovie = async (data: { 
    name: string, 
    posterImage?: string, 
    score?: number, 
    sinopsis?: string 
}) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
        console.log(response)
    } catch (error) {
        console.log(error);
        throw new Error("Error creating movie");
    }
};

export const UpdateMovie = async(id: string, data: { title: string }) => {
    try {
        const response = await axios.patch(`${url}/${id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const DeleteMovie = async(id: string) => {
    try {
        const response = await axios.delete(`${url}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}