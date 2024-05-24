import axios from "axios";

const url = ""

export const GetMovie = async ()=> {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const CreateMovie = async ()=> {
    try {
        const response = await axios.post(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const UpdateMovie = async() => {
    try {
        const response = await axios.patch(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}

export const DeleteMovie = async() => {
    try {
        const response = await axios.delete(url)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("error")
    }
}