import React from "react"

const Postcard = (props) => {

    return (
        <div className="post-card-container ">
            <div className="post-card">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </div>

    )
}

export default Postcard;