import React from "react";

const UserCard = (props) => {
    return (

        <div className="user-card">


            <img className="user-img" />
            <h2>{props.data.name.first}</h2>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city} , {props.data.location.state}</p>
            {/* <p>{</p> */}




        </div>

    )
}

export default UserCard;