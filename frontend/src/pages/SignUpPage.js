import React, { useState } from 'react';
import GuitarImage from '../images/guitar.png';
import SignUp from '../components/SignUpPage/SignUp';


const SignUpPage = () => {
    return (
        <div className="login-page">
            <div className="guitar-image">
                <img src={GuitarImage} alt="Guitar" />
            </div>
            <div >
                <SignUp />
            </div>
        </div>
    );
};

export default SignUpPage;