import axios from "axios";
import {baseURL} from "../configs/urls";

export let axiosService = axios.create({
   baseURL
})