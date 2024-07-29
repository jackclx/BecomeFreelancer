import React, { useState, useEffect } from 'react';

const PricingForm = ({ formData: initialFormData, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    hourlyRate: '',
    features: []
  });

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData);
    }
  }, [initialFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      features: checked
        ? [...prevState.features, value]
        : prevState.features.filter((feature) => feature !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to the state or backend
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set your rates and packages</h2>
      <div className="form-group">
        <label htmlFor="hourlyRate">Hourly Rate</label>
        <input
          type="text"
          id="hourlyRate"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleChange}
          placeholder="$50 per hour"
        />
      </div>
      <div className="form-group">
        <label>Features</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="live performance with band"
              checked={formData.features.includes('live performance with band')}
              onChange={handleFeatureChange}
            />
            Live performance with band
          </label>
          <label>
            <input
              type="checkbox"
              value="any genre of music"
              checked={formData.features.includes('any genre of music')}
              onChange={handleFeatureChange}
            />
            Any genre of music
          </label>
          <label>
            <input
              type="checkbox"
              value="sound system included"
              checked={formData.features.includes('sound system included')}
              onChange={handleFeatureChange}
            />
            Sound system included
          </label>
        </div>
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default PricingForm;