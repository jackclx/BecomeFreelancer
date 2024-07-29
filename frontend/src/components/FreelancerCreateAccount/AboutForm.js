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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
          {/* Options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="service_subcategory">Service Subcategory</label>
        <select
          id="service_subcategory"
          name="service_subcategory"
          value={formData.service_subcategory}
          onChange={handleChange}
        >
          <option value="">Select a subcategory</option>
          {/* Options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags.join(', ')}
          onChange={(e) =>
            setFormData({ ...formData, tags: e.target.value.split(', ') })
          }
          placeholder="Enter tags separated by commas"
        />
      </div>
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default AboutForm;