import {
    Link,
    Route,
    Routes
} from "react-router-dom";
import Albums from "../components/ALBUMS/Albums";
import Todos from "../components/TODOS/Todos";
import Comments from "../components/COMMENTS/Comments";
import CommentsDetails from "../components/CommentsDetalis/CommentsDetails";

// import {Link} from "react-router-dom";

function LinksAll() {
    return (
        <div>
            <ul>
                <li><Link to={'/todos'}>todos</Link></li>
                <li><Link to={'/albums'}>albums</Link></li>
                <li><Link to={'/comments'}>comments</Link></li>


                <hr/>
                <Routes>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>


                    <Route path={'/comments/:id'} element={<CommentsDetails/>}/>

                </Routes>
                <hr/>
            </ul>

        </div>
    )
}

export default LinksAll;