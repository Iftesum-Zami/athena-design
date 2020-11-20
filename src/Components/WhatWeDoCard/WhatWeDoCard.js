import React from 'react';
import './WhatWeDoCard.css';

const WhatWeDoCard = ({info}) => {
    return (
        <div className="col-md-3 p-4 mb-4 WhatWeDoCard">
            <div>
                <div className="d-flex justify-content-center pb-3">
                    <img style={{width: '90px'}} src={info.img} alt=""/>
                </div>
                <h5 className="text-center">{info.title}</h5>
                <p className="text-secondary text-center">{info.description}</p>
            </div>
        </div>
    );
};

export default WhatWeDoCard;