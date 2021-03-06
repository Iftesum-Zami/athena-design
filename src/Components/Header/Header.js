import React from 'react';
import headerImg from '../../images/header-image.png'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <h1 className="pb-3">Florence agency</h1>
                        <p className="pb-3 text-secondary">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className="btnStyle">See Pricing</button>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <img src={headerImg} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;