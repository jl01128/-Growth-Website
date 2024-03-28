import React from 'react';
import Helmet from "react-helmet";
import './About.css';
import Navbar from "../../components/Navbar";

const About = () => {
    return (
        <div className="about">
            <Helmet>
                <style>{`
                    body {
                        background-image: url("/starBackground.svg");
                    }
                    .about-body {
                        position: relative; /* Ensure the positioning context */
                    }
                    .saturn-image {
                        position: absolute;
                        top: 55%;
                        left: 75%;
                        transform: translate(-50%, -50%);
                        z-index: -1; /* Ensure the image is behind other elements */
                        height: 105%;
                        width: 50%
                    }
                `}</style>
            </Helmet>
            <Navbar></Navbar>
            <img src="/saturn.svg" alt="Saturn" className="saturn-image"/>
            <div className="about-body">
                <h2>About</h2>
                <p>Explore is a mobile application designed for primary school students around the world. This app provides supplemental math education focusing on fundamental math concepts including addition, subtraction, multiplication, and division. 
                The structure of our content follows the curriculum of the public school system in Chad and is based on the first four years of math education. 
                Designed specifically for areas with little to no internet, our application works fully 
                offline and uses limited storage on smartphones. We also have the ability to add more local languages.</p>
            </div>
        </div>   
    )
};

export default About;
