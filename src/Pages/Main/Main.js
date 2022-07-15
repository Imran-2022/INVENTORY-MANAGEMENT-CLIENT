import React from 'react';
import ExtraFeature from '../ExtraFeatures/ExtraFeature';
import FeactureInventory from '../FeactureInventory/FeactureInventory';
import Home from '../Home/Home';

const Main = () => {
    return (
        <>
            <Home />
            <FeactureInventory />\
            <ExtraFeature/>
        </>
    );
};

export default Main;