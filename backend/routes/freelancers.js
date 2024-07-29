const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer');

// Get all freelancers
router.get('/', async (req, res) => {
    try {
        const freelancers = await Freelancer.find();
        res.json(freelancers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new freelancer
router.post('/', async (req, res) => {
    const freelancer = new Freelancer({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        about: req.body.about,
        title: req.body.title,
        description: req.body.description,
        service_category: req.body.service_category,
        service_subcategory: req.body.service_subcategory,
        tags: req.body.tags,
        pricing: req.body.pricing,
        experiences: req.body.experiences,
        gallery: req.body.gallery
    });

    try {
        const newFreelancer = await freelancer.save();
        res.status(201).json(newFreelancer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a specific freelancer by ID
router.get('/:id', getFreelancer, (req, res) => {
    res.json(res.freelancer);
});

// Middleware function to get a freelancer by ID
async function getFreelancer(req, res, next) {
    let freelancer;
    try {
        freelancer = await Freelancer.findById(req.params.id);
        if (freelancer == null) {
            return res.status(404).json({ message: 'Cannot find freelancer' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.freelancer = freelancer;
    next();
}

module.exports = router;