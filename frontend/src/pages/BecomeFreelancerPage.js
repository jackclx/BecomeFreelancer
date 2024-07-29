import React, { useState } from 'react';
import Cover from '../components/BecomeFreelancerPage/Cover';
import Why from '../components/BecomeFreelancerPage/Why';
import How from '../components/BecomeFreelancerPage/How';
import Rules from '../components/BecomeFreelancerPage/Rules';
import Help from '../components/BecomeFreelancerPage/Help';
import Story from '../components/BecomeFreelancerPage/Story';
import './../App.css';


function BecomeFreelancerPage() {

    return (
        <div>
            <div className="standard">
                <Cover />
                <Why />
            </div>
            <How />
            <div className="standard">
                <Rules />
            </div>
            <Help />
            <div className="standard">
                <Story />
            </div>
        </div>
    );
}

export default BecomeFreelancerPage;
