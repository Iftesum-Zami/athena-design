import React from 'react';
import image1 from '../../images/Group201.png';
import image2 from '../../images/Group202.png';
import image3 from '../../images/Group203.png';
import image4 from '../../images/Group204.png';
import WhatWeDoCard from '../WhatWeDoCard/WhatWeDoCard';

const cardInfo = [
    {
        img: image1,
        title: 'Experience Design',
        description: 'The point of using Lorem Ipsum is that it has a more-orless normal'
    },
    {
        img: image2,
        title: 'Interface Design',
        description: 'The point of using Lorem Ipsum is that it has a more-orless normal'
    },
    {
        img: image3,
        title: 'Prototyping',
        description: 'The point of using Lorem Ipsum is that it has a more-orless normal'
    },
    {
        img: image4,
        title: 'Illustration',
        description: 'The point of using Lorem Ipsum is that it has a more-orless normal'
    }
]

const WhatWeDo = () => {
    return (
        <div className="container pt-5 pb-5">
            <h2 className="text-center">What we do</h2>
            <p className="text-secondary text-center">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>

            <div className="row pt-5">
                {
                    cardInfo.map(info => <WhatWeDoCard info={info}></WhatWeDoCard>)
                }
            </div>
        </div>
    );
};

export default WhatWeDo;