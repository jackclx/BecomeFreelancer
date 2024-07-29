import React from 'react';

const PublishForm = ({ formData, onPublish, onBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger publish action
    onPublish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review your profile</h2>
      {formData && (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phone_number}</p>
          <p>About: {formData.about}</p>
          <p>Title: {formData.title}</p>
          <p>Description: {formData.description}</p>
          <p>Service Category: {formData.service_category}</p>
          <p>Service Subcategory: {formData.service_subcategory}</p>
          <p>Tags: {formData.tags.join(', ')}</p>
          {/* Add other fields similarly */}
        </div>
      )}
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Publish</button>
    </form>
  );
};

export default PublishForm;