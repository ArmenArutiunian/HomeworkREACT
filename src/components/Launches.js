// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)


import {getAxiosUrl} from "./service.api.launch";
import {useEffect, useState} from "react";
import Launch from "./Launch";

export function Launches() {

    let [ships , setShips] = useState([]);


    useEffect( () =>{
        getAxiosUrl().then(value => {setShips(value.data)
            console.log(value.data)})


},[])


    return(

    <div>

        {ships.filter(value => value.launch_year !== '2020').map((ship , index )  =>   <Launch tech={ship}    index={ships.id} />

        ) }
    </div>
)}

export default Launches ;