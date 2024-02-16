import Helmet from "react-helmet";
import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: 'url("/homeBackground.png")', alignContent: "center"}}>
            <Helmet bodyAttributes={{style: 'background-color: #00093B'}}/>
            <Navbar></Navbar>
            <div className="home-body">
                <div className="googleBtn">
                </div>
            </div>
        </div>
    )
};

export default Home;
