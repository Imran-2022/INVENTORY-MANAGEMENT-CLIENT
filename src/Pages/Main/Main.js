import React from 'react';
import ExtraFeature from '../ExtraFeatures/ExtraFeature';
import FeactureInventory from '../FeactureInventory/FeactureInventory';
import Home from '../Home/Home';
import OurPartners from '../OurPartners/OurPartners';

const Main = () => {
    return (
        <>
            <Home />
            <FeactureInventory />\
            <ExtraFeature/>
            <OurPartners/>
        </>
    );
};

export default Main;