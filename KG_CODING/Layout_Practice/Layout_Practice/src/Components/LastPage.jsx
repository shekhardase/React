import React from "react";

function LastPage() {
    return <div>
        <div className="last">
            <h1>
                Ready to get started?
            </h1>

            <div>
                <input type="text" placeholder="Mail us..." />
                <button>Submit</button>
            </div>
        </div>



        <div>
            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li>Architectural</li>
                            <li>Expediting</li>
                            <li>Consultant</li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Projects</h3>
                        <ul>
                            <li>Single Family</li>
                            <li>Multi Family</li>
                            <li>Mixed Use</li>
                            <li>Restaurant</li>
                            <li>Hospitality</li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Blog</h3>
                        <ul>
                            <li>News</li>
                            <li>Case Studies</li>
                            <li>Interviews</li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li>Careers</li>
                            <li>Publications</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="social-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
          

                </div>
            </footer>
        </div>


    </div>;
}

export default LastPage;