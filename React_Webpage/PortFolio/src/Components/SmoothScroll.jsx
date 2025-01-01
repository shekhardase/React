import React from "react";
import Card from "./Card";

const SmoothScroll = () => {




        







    return (
        <div>
            <div
                className="
          grid  
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-24 
          overflow-y-scroll 
          p-20
        "
            >



                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    );
};

export default SmoothScroll;
