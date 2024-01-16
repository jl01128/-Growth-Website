import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Helmet from "react-helmet";
import React from 'react';
import './Team.css';
import Navbar from "../../components/Navbar";

const Team = () => {
    return (
        <div className="Meet the Developers" style={{ backgroundImage: 'url("/teamBackground.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
        <Helmet bodyAttributes={{style: 'background-color: #00093B'}}/>
            <Navbar></Navbar>
            <div className="team-body">
                <h2>Team</h2>
                <div className="team-grid-one">
                    <div className="team-child" id="jorge">
                       <img src="/jorge.png" alt="profile pic"></img>
                       <h2 id="jorge">Jorge Trejo</h2>
                       <h3 id="jorge">project manager</h3>
                       <div className="links">
                            <a href='https://github.com/jorgetrejo36' target="_blank" rel="noreferrer" id="jorge"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/jorgetrejo/' target="_blank" rel="noreferrer" id="jorge"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="kevin">
                        <img src="/kevin.png" alt="profile pic"></img>
                        <h2 id="kevin">Kevin Bopp</h2>
                        <h3 id="kevin">frontend developer</h3>
                        <div className="links">
                            <a href='https://github.com/VictorYue'target="_blank" rel="noreferrer" id="kevin"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/kevin-bopp-34a471292/' target="_blank" rel="noreferrer" id="kevin"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="evan">
                        <img src="/evan.png" alt="profile pic"></img>
                        <h2 id="evan">Evan Daniel</h2>
                        <h3 id="evan">frontend developer</h3>
                        <div className="links">
                            <a href='https://github.com/Evasionally'target="_blank" rel="noreferrer" id="evan"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/evandaniel-/' target="_blank" rel="noreferrer" id="evan"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                </div>
                <div className="team-grid-two">
                    <div className="team-child" id="caitlin">
                        <img src="/caitlin.png" alt="profile pic"></img>
                        <h2 id="caitlin">Caitlin Fabian</h2>
                        <h3 id="caitlin">frontend developer</h3>
                        <div className="links">
                            <a href='https://github.com/JulioC-19' target="_blank" rel="noreferrer" id="caitlin"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/caitlin-fabian/' target="_blank" rel="noreferrer" id="caitlin"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="rachel">
                        <img src="/rachel.png" alt="profile pic"></img>
                        <h2 id="rachel">Rachel Dauns</h2>
                        <h3 id="rachel">backend developer</h3>
                        <div className="links">
                            <a href='https://github.com/rachelMae' target="_blank" rel="noreferrer" id="rachel"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/rachel-dauns-70b5a2179/' target="_blank" rel="noreferrer" id="rachel"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                    <div className="team-child" id="jackie">
                        <img src="/jackie.png" alt="profile pic"></img>
                        <h2 id="jackie">Jackie Lin</h2>
                        <h3 id="jackie">backend developer</h3>
                        <div className="links">
                            <a href='https://github.com/jl01128' target="_blank" rel="noreferrer" id="jackie"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href='https://www.linkedin.com/in/jackie-lin-8a62a7234/' target="_blank" rel="noreferrer" id="jackie"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                       </div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Team;