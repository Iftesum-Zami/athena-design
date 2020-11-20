import React from 'react';
import './DedicatedTeam.css';

const DedicatedTeam = () => {
    return (
        <section className="dedicatedTeam text-center section">
            <div className="container">
                <h1 className="yeseva-header">CHOOSE YOUR DEDICATED TEAM</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-4">
                        <div className="singleiteam">
                            <div className="plan-header">
                                <h2>$199</h2>
                                <p>For Basic</p>
                            </div>
                            <div className="plan-details">
                                <ul className="list-group">
                                    <li className="list-group-item">Homepage</li>
                                    <li className="list-group-item">No Inner Page</li>
                                    <li className="list-group-item">Asset file</li>
                                    <li className="list-group-item">Source file</li>
                                    <li className="list-group-item">Free Stock Photos </li>
                                    <li className="list-group-item">10 Days Free Support  </li>
                                    <li className="list-group-item">24/7 Support</li>
                                </ul>
                            </div>
                            <button className="btn order-button">Order Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="singleiteam">
                            <div className="plan-header">
                                <h2>$399</h2>
                                <p>For Preferred</p>
                            </div>
                            <div className="plan-details">
                                <ul className="list-group">
                                    <li className="list-group-item">Homepage</li>
                                    <li className="list-group-item">4 Inner Page</li>
                                    <li className="list-group-item">Asset file</li>
                                    <li className="list-group-item">Source file</li>
                                    <li className="list-group-item">Free Stock Photos </li>
                                    <li className="list-group-item">20 Days Free Support  </li>
                                    <li className="list-group-item">24/7 Support</li>
                                </ul>
                            </div>
                            <button className="btn text-white order-button">Order Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="singleiteam">
                            <div className="plan-header">
                                <h2>$599</h2>
                                <p>For Elite</p>
                            </div>
                            <div className="plan-details">
                                <ul className="list-group">
                                    <li className="list-group-item">Homepage</li>
                                    <li className="list-group-item">8 Inner Page</li>
                                    <li className="list-group-item">Asset file</li>
                                    <li className="list-group-item">Source file</li>
                                    <li className="list-group-item">Free Stock Photos </li>
                                    <li className="list-group-item">30 Days Free Support  </li>
                                    <li className="list-group-item">24/7 Support</li>
                                </ul>
                            </div>
                            <button className="btn order-button">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DedicatedTeam;