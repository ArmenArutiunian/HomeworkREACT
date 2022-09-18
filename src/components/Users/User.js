export function User(props) {
    const {user,file} = props


    return(

            <div className='users'>
                <h6> {user.name} {user.username}</h6>


                <button className='btn' onClick={() =>{
                    file(user.address)
                }}>click me</button>
            </div>

)}

export default User ;


