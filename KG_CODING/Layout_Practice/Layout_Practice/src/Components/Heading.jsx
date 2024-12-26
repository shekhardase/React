import React from "react";

function Heading() {
    return (
        <div className="heading">
            {/* <h3>search</h3> */}
            <img
                src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                alt="Logo"
            // <h3>Search</h3>
            />
            {/* <h3>Search</h3> */}
            <h1 className="title" >GSS Group</h1>
            <ul className="list">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Heading;
