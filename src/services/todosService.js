import {axiosService} from "./axios";
import {urls} from "../configs/urls";

let todosServ= {
    get : axiosService.get(urls.todos)
}

let todosService = () => {
    return todosServ.get
}






export {
    todosService,

}