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
        <div className="resources" style={{ backgroundImage: 'url("/download.svg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <Helmet bodyAttributes={{style: 'background-color: #00093B'}}/>
            <Navbar></Navbar>
            <div className="resources-body">
                <div className='topHeader'>Resources</div>
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