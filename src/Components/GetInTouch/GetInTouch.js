import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-right getInTouch">
                        <h1 className="yeseva-header">Get your design right, right now</h1>
                        <p className="my-3">Be the first know our latest offers and updates!</p>
                        <div className="signIn-box d-flex justify-content-between">
                            <input className="bg-transparent border-0" placeholder="Enter your email addresss" type="email" />
                            <button type="submit">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;