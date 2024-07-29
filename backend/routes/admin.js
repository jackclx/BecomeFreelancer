const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer'); // Adjust the path as necessary

// Route to delete all freelancers
router.delete('/delete-all-freelancers', async (req, res) => {
    try {
        await Freelancer.deleteMany({});
        res.status(200).send('All freelancers deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting freelancers');
    }
});

module.exports = router;