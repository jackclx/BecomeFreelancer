const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer');

// Route to get freelancers with optional category filter
router.get('/', async (req, res) => {
    try {
        console.log('Request Headers:', req.headers);
        const { category } = req.query;
        console.log(`Category filter: ${category}`);

        // Convert the URL-friendly category back to the original format
        const formattedCategory = category
            ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : null;
        
        const filter = formattedCategory ? { service_category: formattedCategory } : {};
        const freelancers = await Freelancer.find(filter);
        console.log('Found freelancers:', freelancers);
        res.status(200).json(freelancers);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching freelancers');
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