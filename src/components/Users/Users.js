// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// // відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// // Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну
// // інфомацію про користувача(довільно обрану інформацію)

import {useEffect, useState} from "react";
import User from "./User";

export function Users() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('INFORMATION')

    const file = (obj) => {
        setUser(obj)
        console.log(file)
    }

    useEffect(()=> {               // effect
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(value => {
            setUsers(value)            // set inf users

        })

    }, [])




    return(                                   // iter
    <div className='main'>

            <div className='json'> {JSON.stringify(user)} </div>

        <div className='block'>

            {users.map((user, index) => (<User user={user} key={index} file={file}  /> ))}


        </div>
    </div>
)}

export default Users ;


