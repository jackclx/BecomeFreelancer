const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: String,
  description: String
});

const GallerySchema = new mongoose.Schema({
  fileName: String,
  fileUrl: String
});

const FreelancerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  about: String,
  title: String,
  description: String,
  service_category: String,
  service_subcategory: String,
  tags: [String],
  pricing: {
    hourlyRate: Number,
    features: [String]
  },
  experiences: [ExperienceSchema],
  gallery: [GallerySchema]
});

module.exports = mongoose.model('Freelancer', FreelancerSchema);