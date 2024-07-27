import React, { useState } from 'react';
import EventDetails from '../components/BookingPage/EventDetails';
import ServiceRequirements from '../components/BookingPage/ServiceRequirements';
import ContactBudget from '../components/BookingPage/ContactBudget';
import ProgressBar from '../components/BookingPage/ProgressBar';
import '../css/Booking.css';

const BookingPage = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        eventType: '',
        date: '',
        startTime: '',
        endTime: '',
        address: '',
        serviceRequired1: '',
        serviceRequired2: '',
        ageOfAudience: '',
        sizeOfAudience: '',
        additionalNotes: '',
        additionalNotes2: '',
        name: '',
        contactNumber: '',
        email: '',
        budget: ''

    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <EventDetails formData={formData} handleChange={handleChange} />;
            case 1:
                return <ServiceRequirements formData={formData} handleChange={handleChange} />;
            case 2:
                return <ContactBudget formData={formData} handleChange={handleChange} />;
            // default:
            //     return <EventDetails formData={formData} handleChange={handleChange} />;
        }
    };

    return (
        <div className="booking-page">
            <ProgressBar activeStep={step} />
            {renderStep()}
            <div className={`navigation-buttons ${step > 0 ? 'spaced-out' : 'centered'}`}>
                {step > 0 && <button onClick={prevStep}>Back</button>}
                <button onClick={nextStep}>Continue</button>
            </div>
        </div>
    );
};

export default BookingPage;