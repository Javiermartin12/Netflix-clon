import axios from "axios";

const url = ""

export const GetMovie = async (id?: string)=> {
    try {
        const response = id ? await axios.get(`${url}/${id}`) : await axios.get(url);
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const CreateMovie = async (data: { title: string })=> {
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error creating movie")
    }
}

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