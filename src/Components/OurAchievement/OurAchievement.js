import React from 'react';
import './OurAchievementCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faTrophy, faRocket, faChild } from '@fortawesome/free-solid-svg-icons';

// const achievementCardInfo = [
//     {
//         icon: faLaughBeam,
//         number: '700+',
//         text: 'Happy Clients'
//     },
//     {
//         icon: faTrophy,
//         number: '140+',
//         text: 'Projects Completed'
//     },
//     {
//         icon: faRocket,
//         number: '25+',
//         text: 'Crazy Minds'
//     },
//     {
//         icon: faChild,
//         number: '75+',
//         text: 'Happy Clients'
//     }
// ]

const OurAchievement = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-5">
                    <h1>Our Achievements</h1>
                    <p className="text-secondary">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </div>
                <div className="col-md-6 OurAchievementCard">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center singleCard">
                            <div className="icon">
                                <FontAwesomeIcon icon={faLaughBeam}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1 className="cardHeader">700+</h1>
                                <p className="cardText">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center singleCard">
                            <div className="icon">
                                <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1 className="cardHeader">140+</h1>
                                <p className="cardText">Projects Completed</p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center singleCard">
                            <div className="icon">
                                <FontAwesomeIcon icon={faChild}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1 className="cardHeader">25+</h1>
                                <p className="cardText">Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center singleCard">
                            <div className="icon">
                                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1 className="cardHeader">700+</h1>
                                <p className="cardText">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchievement;