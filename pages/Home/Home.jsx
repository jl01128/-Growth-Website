import Helmet from "react-helmet";
import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: 'url("/homeBackground.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <Helmet bodyAttributes={{style: 'background-color: #00093B'}}/>
            <Navbar></Navbar>
            <div className="home-body">
                <div className="googleBtn">
                    <a className="btn btn-google" href="" 
                    title="Google Play" target="_blank" rel="noreferrer">
                        Google Play
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Home;
