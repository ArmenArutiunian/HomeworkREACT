

import {axiosService} from "./axios";
import {urls} from "../configs/urls";

let commentsServ = {
    get : axiosService.get(urls.comments)
}


let commentsService = () => {
    return commentsServ.get
}


export {
    commentsService
}