const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard');

router.post('/dashboard', async (req, res) => {
    try {
        const dashboard = await Dashboard.create(req.body)
        res.json(dashboard);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    const dashboards = await Dashboard.find({
        animal: req.body.animal,
    });
    res.json(dashboards);
})

module.exports = router;