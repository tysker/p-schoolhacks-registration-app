import axios from 'axios';


const URL = "http://localhost:3000/api/v1";
// if (import.meta.env.MODE === 'production') {
//     URL += 'http://172.28.0.2:3000/api/v1';
// } else {
//     URL += '';
// }
// console.log("URL", URL)
export const getWorkshops = async () => {
    try {
        const response = await axios.get<AxiosResponseDataWorkShops>(
            `${URL}/workshops`,
        );
        return response.data.workshops;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const getWorkshopFromParamID = async (id: string) => {
    try {
        console.log("getWorkshopFromParamID id: ", id)
        const response = await axios.get<AxiosResponseDataWorkShop>(
            `${URL}/workshops/${id}`,
        );
        return response.data.workshop;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const signUpUserAndAddToWorkshop = async (id: string, user: User) => {
    console.log("signUpUserAndAddToWorkshop id: ", id)
    console.log("signUpUserAndAddToWorkshop user: ", user)
    try {
        user['name'] =
            user.name.substring(0, 1).toUpperCase() +
            user.name.substring(1).toLowerCase();

        const response = await axios.post<AxiosResponseDataWorkShop>(
            `http://localhost:3000/api/v1/users/${id}`,
            user,
        );
        console.log("signUpUserAndAddToWorkshop response: ", response.data.workshop)
        return response.data.workshop;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};