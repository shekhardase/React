import React from "react";


const user = {
    name: 'Iron Man',
    image: 'https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg',
    imageSize: 200
};

function HeroSection() {
    return (
        <div>
            <h3>{user.name}</h3>
            <img src={user.image} alt={user.name} width={user.imageSize} height={user.imageSize} />
        </div>
    )
}


export default HeroSection;