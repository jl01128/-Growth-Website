import Helmet from "react-helmet";
import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Helmet>
                <style>{`
                    body {
                        background-image: url("/starBackground.svg");
                    }
                    .home-body {
                        position: relative; /* Ensure the positioning context */
                    }
                    .home-image {
                        position: absolute;
                        top: 48%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1; /* Ensure the image is behind other elements */
                        height: 150%;
                        width: 100%
                    }
                    .rocket-image {
                        position: absolute;
                        top: 65%;
                        left: 25%;
                        transform: translate(-50%, -50%);
                        z-index: -1; /* Ensure the image is behind other elements */
                        height: 60%;
                        width: 30%
                    }
                `}</style>
            </Helmet>
            <Navbar></Navbar>
            <div className="home-body" >
                <img src="/Home.svg" alt="Home" className="home-image"/>
                <img src="/Rocket.png" alt="Rocket" className="rocket-image"/>
            </div>
        </div>
    )
};

export default Home;
