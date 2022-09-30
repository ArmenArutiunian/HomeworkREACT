import {useEffect, useState} from "react";


import Comment from "./Comment";
import {commentsService} from "../../services/commentsService";

function Comments() {
    let [comments,setComments] = useState([]);


    useEffect(() => {
        commentsService().then(value => setComments(value.data))    })



return(
    <div>

        {comments.map((coment,index )=> <Comment coment={coment}
                                                  index={comments.id} />)}

    </div>
)}

export default Comments ;