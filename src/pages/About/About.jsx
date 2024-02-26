import Helmet from "react-helmet";
import React from 'react';
import './About.css';
import Navbar from "../../components/Navbar";

const About = () => {
    return (
        <div classname="about" style={{ backgroundImage: 'url("/About.svg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <Helmet bodyAttributes={{style: 'background-color : #00093B'}}/>
            <Navbar></Navbar>
            <div className="about-body" >
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