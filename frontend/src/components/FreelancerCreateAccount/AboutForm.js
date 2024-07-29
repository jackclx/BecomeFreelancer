import React, { useState } from 'react';

const AboutForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    about: '',
    title: '',
    description: '',
    service_category: '',
    service_subcategory: '',
    tags: []
  });

  const [tagInput, setTagInput] = useState('');

  const serviceSubcategories = {
    "Music Entertainment": ["Bands", "Singer", "Ensembles", "Cultural Bands"],
    "Photographers": ["Wedding Photographers", "Videographers"],
    "Party Rental": ["Buffet", "Tents", "Bounce Houses", "Photo Booths"],
    "Performer": ["Magician", "Clown Balloon Maker", "Comedian"],
    "Official Speaking": ["Wedding Emcee", "Emcee", "Motivational Speaker"],
    "Special Talents": ["Lion Dancer", "Clowns", "Comedy"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name or stage name here"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email here"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Enter your phone number here"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Tell the event planners about yourself"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter the title of your service here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your service in detail"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="service_category">Service Category</label>
        <select
          id="service_category"
          name="service_category"
          value={formData.service_category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {Object.keys(serviceSubcategories).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="service_subcategory">Service Subcategory</label>
        <select
          id="service_subcategory"
          name="service_subcategory"
          value={formData.service_subcategory}
          onChange={handleChange}
          disabled={!formData.service_category}
        >
          <option value="">Select a subcategory</option>
          {formData.service_category && serviceSubcategories[formData.service_category].map((subcategory) => (
            <option key={subcategory} value={subcategory}>{subcategory}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <div className="tags-input">
          <input
            type="text"
            id="tagInput"
            name="tagInput"
            value={tagInput}
            onChange={handleTagChange}
            placeholder="Enter a tag and press add"
          />
          <button type="button" onClick={handleTagAdd}>Add</button>
        </div>
        <div className="tags-list">
          {formData.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <button type="button" onClick={() => handleTagRemove(tag)}>x</button>
            </span>
          ))}
        </div>
      </div>
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default AboutForm;