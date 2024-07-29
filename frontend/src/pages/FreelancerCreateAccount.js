// src/components/FreelancerCreateAccount.js
import React, { useState } from 'react';
import AboutForm from '../components/FreelancerCreateAccount/AboutForm';
import PricingForm from '../components/FreelancerCreateAccount/PricingForm';
import ExperiencesForm from '../components/FreelancerCreateAccount/ExperiencesForm';
import GalleryForm from '../components/FreelancerCreateAccount/GalleryForm';
import PublishForm from '../components/FreelancerCreateAccount/PublishForm';
import axios from 'axios';

const FreelancerCreateAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    about: '',
    title: '',
    description: '',
    service_category: '',
    service_subcategory: '',
    tags: [],
    experiences: [],
    gallery: [],
    pricing: {}
  });

  const handleNext = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const handlePublish = async () => {
    try {
      await axios.post('http://localhost:8000/api/freelancers', formData);
      alert('Profile published successfully!');
    } catch (error) {
      console.error('Error publishing profile', error);
    }
  };

  return (
    <div> 
      {currentStep === 1 && <AboutForm onNext={handleNext} />}
      {currentStep === 2 && <PricingForm onBack={handleBack} onNext={handleNext} />}
      {currentStep === 3 && <ExperiencesForm onBack={handleBack} onNext={handleNext} />}
      {currentStep === 4 && <GalleryForm onBack={handleBack} onNext={handleNext} />}
      {currentStep === 5 && <PublishForm formData={formData} onBack={handleBack} onPublish={handlePublish} />}
    </div>
  );
};

export default FreelancerCreateAccount;