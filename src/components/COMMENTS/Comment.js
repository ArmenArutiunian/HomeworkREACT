import {
    Link
} from "react-router-dom";

function Comment(props) {
    let {coment} = props;
return(
    <div>

        <h2>{coment.id} {coment.email} ||</h2>

        <div>
            <Link to={'/comments/' + coment.id} state={{...coment}} >details</Link>

        </div>

    </div>
)}

export default Comment ;