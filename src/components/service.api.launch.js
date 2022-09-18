import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
});

let getAxiosUrl = () => {
    return axiosInstance.get()

}

export {getAxiosUrl}