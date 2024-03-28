import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
//import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import Helmet from "react-helmet";
import React from 'react';
import './Resources.css';
import Navbar from "../../components/Navbar";

const Resources = () => {
    return (
        <div className="resources">
            <Helmet>
                <style>{`
                    body {
                        background-image: url("/starBackground.svg");
                    }
                    .resources-body {
                        position: relative; /* Ensure the positioning context */
                    }
                    .earth-image {
                        position: absolute;
                        top: 45%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: -1; /* Ensure the Image is behind other elements */
                        height: 105%;
                        width: 100%
                    }
                `}</style>
            </Helmet>

            <Navbar></Navbar>
            
            <div className="resources-body">
                <img src="/earth.svg" alt="Earth" className="earth-image" />
                <h2>Resources</h2>
                <div className="grid-container-resources">
                    <div className="grid-child-resources" id='buttonOne'><a href='mailto:contactarroseplus@gmail.com' target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faEnvelope}/></button></a></div>
                    <div className="grid-child-resources" id='buttonTwo'><a href="https://github.com/jorgetrejo36/explore" target="_blank" rel="noreferrer"><button className="iconBtn"><FontAwesomeIcon icon={faGithub}/></button></a></div>
                    <div className="grid-child-resources" id='buttonThree'><button className="iconBtn"><FontAwesomeIcon icon={faGooglePlay}/></button></div>
                    <div className="grid-child-resources" id='textOne'><h3>contact us at:<br/>contactarroseplus@<br/>gmail.com</h3></div>
                    <div className="grid-child-resources" id='textTwo'><h3>check out our code</h3></div>
                    <div className="grid-child-resources" id='textThree'><h3>download the app</h3></div>
                </div>
            </div>
            
            
        </div>   
    )
};

export default Resources;