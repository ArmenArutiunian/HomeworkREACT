import {useEffect, useState} from "react";
import {todosService} from "../../services/todosService";
import Todo from "./Todo";

function Todos() {
    let [todos,setTodos] = useState([]);

    useEffect(() => {
        todosService().then(value => setTodos(value.data))

    },[])
return(
    <div>

        {todos.map((todo,index) => <Todo todo={todo}
                                        index={todos.id}/>)}

    </div>
)}

export default Todos ;