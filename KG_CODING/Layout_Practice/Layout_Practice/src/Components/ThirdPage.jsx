import React from "react";


function ThirdPage() {
    return (
        <div>
            <h1 className="example">Products</h1>
            <div className="container">
                <div className="image">
                    <img src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Description" />
                </div>
                <div className="text">
                    <p>
                        Our team of experts will work closely with you to understand your unique needs and goals.
                        We will then develop and implement a customized plan to bring your vision to life.
                    </p>
                </div>

                <div className="image">
                    <img src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Description" />
                </div>
                <div className="text">
                    <p>
                        We strive to deliver exceptional service and exceed your expectations in every way.
                        Our team is dedicated to providing personalized attention to each client, ensuring that every project is a success.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;
