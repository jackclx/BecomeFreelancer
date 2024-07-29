import React, { useState } from 'react';
import axios from 'axios';

const ExperiencesForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    experiences: []
  });

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = formData.experiences.map((exp, expIndex) =>
      expIndex === index
        ? { ...exp, [name]: value }
        : exp
    );
    setFormData({ experiences: newExperiences });
  };

  const handleAddExperience = () => {
    setFormData({
      experiences: [
        ...formData.experiences,
        { title: '', description: '' }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tell us about your experiences</h2>
      {formData.experiences.map((exp, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`experience-title-${index}`}>Event Title</label>
          <input
            type="text"
            id={`experience-title-${index}`}
            name="title"
            value={exp.title}
            onChange={(e) => handleChange(index, e)}
            placeholder="Enter event title"
          />
          <label htmlFor={`experience-description-${index}`}>Description</label>
          <textarea
            id={`experience-description-${index}`}
            name="description"
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Enter event description"
          ></textarea>
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>Add Experience</button>
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default ExperiencesForm;