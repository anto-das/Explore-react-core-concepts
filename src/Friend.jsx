export default function Friend(friend){
    // console.log(friend.friend.name)
    // console.log(friend)
    const {name, email} = friend.friend;
    return (
        <div className="box">
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}