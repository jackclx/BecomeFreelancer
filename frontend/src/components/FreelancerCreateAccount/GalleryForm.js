import React, { useState } from 'react';
import axios from 'axios';

const GalleryForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    files: []
  });

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({
      ...formData,
      files: Array.from(files)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload videos and pictures</h2>
      <div className="form-group">
        <label htmlFor="gallery-files">Upload Files</label>
        <input
          type="file"
          id="gallery-files"
          name="gallery-files"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div className="form-group">
        <ul>
          {formData.files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default GalleryForm;