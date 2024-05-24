// import axios from "axios";

// const url = "http://localhost:4000/user/";

// export const GetUserById = async (userId: number) => {
//     try {
//         const response = await axios.get(`${url}${userId}`)
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching user by ID:", error);
//         throw new Error("Failed to fetch user by ID");
//     }
// }

// export const GetUser= async() => {
//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         throw new Error("Failed to fetch user by ID");
//     }
// }

// export const CreateUser = async() => {
//     try {
//         const response = await axios.post(url)
//         return response.data
//     } catch (error) {
//         console.error("Error creating user:", error);
//         throw new Error("Failed to create user");
//     }
// }

// export const UpdateUser = async() => {
//     try {
//         const response = await axios.patch(url)
//         return response.data
//     } catch (error) {
//         console.error("Error update user:", error);
//         throw new Error("Failed to update user");
//     }
// }

// export const DeleteUser = async() => {
//     try {
//         const response = await axios.delete(url)
//         return response.data
//     } catch (error) {
//         console.error("Error delete user:", error);
//         throw new Error("Failed to delete user");
//     }
// }