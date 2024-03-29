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
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1; /* Ensure the image is behind other elements */
                        height: 140%;
                        width: 100%
                    }
                `}</style>
            </Helmet>
            <Navbar></Navbar>
            <div className="home-body" >
                <img src="/Home.svg" alt="Home" className="home-image"/>
            </div>
        </div>
    )
};

export default Home;
