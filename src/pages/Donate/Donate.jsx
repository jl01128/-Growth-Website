import Helmet from "react-helmet";
import React from 'react';
import './Donate.css';
import Navbar from "../../components/Navbar";

const Donate = () => {
    return (
        <div className="donate">
            <Helmet bodyAttributes={{style: 'background-color : var(--color-dark-green)'}}/>
            <Navbar></Navbar>
            <div className="donate-body">
                <h2>Donate</h2>
                <div className="grid-donate">
                    <div className="child-donate">
                        <p>Ruth plans to visit Chad in May and June of 2023. She will distribute the app by working with local teachers,
                        missionaries, and interested parents. She will also meet with missionaries in order to add additional local 
                        languages.</p> 
                        <p>Ruth will survey utilization of the app and improve features according to input from users on the ground. 
                        She will be actively working on fixing bugs and adding useful features.</p>
                        <p>To increase interest and gather more feedback, Ruth plans to hold a Growth+ competition in which children 
                        can compete for the fastest and highest score as teams. She would like to provide the winning team with a free
                        android phone.</p>
                        <p>If you are interested in supporting Ruth's trip, please click the give button. Your donations will go towards
                        the expense of the trip, including an android phone for the competition. Donations will go through her parent's 
                        account at Horizons International.</p>
                    </div>
                    <div className="child-donate">
                        <div className="inner-grid">
                            <h3>Percent Raised</h3>
                            <div className="progress">
                                <div className="progress-value">
                                </div>
                            </div>100%
                        </div>
                        <div className="inner-grid">
                            <a href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E156518&id=106" target="_blank" rel="noreferrer"><button className="donate-btn">Give</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>   
    )
};

export default Donate;
