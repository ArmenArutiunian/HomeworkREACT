import {useLocation} from "react-router-dom";

function CommentsDetails() {
    let location = useLocation();
    let {state : coment} = location;
return(
    <div>
        {
            JSON.stringify(coment)
        }
        
    </div>
)}

export default CommentsDetails ;