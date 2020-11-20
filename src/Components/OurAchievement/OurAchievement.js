import React from 'react';
import './OurAchievementCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faTrophy, faRocket, faChild } from '@fortawesome/free-solid-svg-icons';

const OurAchievement = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center pr-5">
                    <div>
                        <h1>Our Achievements</h1>
                        <p className="text-secondary">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letter.
                        </p>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center singleCard1">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLaughBeam}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h1 className="cardHeader">700+</h1>
                                    <p className="cardText">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center singleCard2">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h1 className="cardHeader">140+</h1>
                                    <p className="cardText">Project Complet</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center singleCard2">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faChild}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h1 className="cardHeader">25+</h1>
                                    <p className="cardText">Happy Clients</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-items-center singleCard1">
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
        </div>
    );
};

export default OurAchievement;