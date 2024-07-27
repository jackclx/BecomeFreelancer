import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProgressBar({ activeStep }) {
    const navigate = useNavigate();
    const steps = ['Event', 'Service', 'Contact'];

    const handleClick = (stepIndex) => {
        if (stepIndex <= activeStep) {
            // Allow navigation to the current or previous steps
            if (stepIndex === 0) {
                navigate('/Event');
            } else if (stepIndex === 1) {
                navigate('/Service');
            } else if (stepIndex === 2) {
                navigate('/Contact');
            }
        }
    };

    return (
        <div>
            <div className="circle-container">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={index <= activeStep ? 'line1' : 'line'}></div>
                        <div
                            className={`${index < activeStep ? 'darkenedtick' : index === activeStep ? 'darkenedcircle' : 'circle'}`}
                            onClick={() => handleClick(index)}
                            style={{ cursor: index <= activeStep ? 'pointer' : 'default' }}
                        ></div>
                    </React.Fragment>
                ))}
                <div className='line'></div>
            </div>

            <div className="text-container">
                <div className="text">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <span
                                onClick={() => handleClick(index)}
                                style={{
                                    color: index === activeStep ? '#2199EA' : undefined,
                                    fontWeight: index === activeStep ? 'bold' : undefined,
                                    cursor: index <= activeStep ? 'pointer' : 'default',
                                }}
                            >
                                {step}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;

