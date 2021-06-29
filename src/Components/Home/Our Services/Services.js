import React from 'react';
import ServicesCard from './ServicesCard';
import servicePicture from "../../../images/service-1.PNG";
import servicePicture2 from "../../../images/service-2.PNG";
import servicePicture3 from "../../../images/service-3.PNG";

const Services = () => {
    const serviceData = [
        {
            service: "Grow Your Businness",
            picture: servicePicture,
            description: "We always help your Company to grow with us",
        },
        {
            service: "Drive more sales",
            picture: servicePicture2,
            description: "We always help your Company to grow with us"
        },
        {
            service: "Handle by Expert",
            picture: servicePicture3,
            description: "You dont need to worry because we are profesonal"
        },
    ]
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesCard service={service}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;