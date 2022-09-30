import {axiosService} from "./axios";
import {urls} from "../configs/urls";

let albumsServ = {
    get : axiosService.get(urls.albums)

}

let albumsService = () => {
    return albumsServ.get
}

export {
    albumsService
}
// import {axiosService} from "./axios";
// import {urls} from "../configs/urls";
//
// let todosServ= {
//     get : axiosService.get(urls.todos)
// }
//
// let todosService = () => {
//     return todosServ.get
// }
//
//
//
//
//
//
// export {
//     todosService,
