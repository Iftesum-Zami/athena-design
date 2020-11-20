import React from 'react';
import image from '../../images/middle-image.png'

const StayRunning = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h1>Stay Running & Project</h1>
                        <p className="text-secondary">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letter.
                        </p>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayRunning;