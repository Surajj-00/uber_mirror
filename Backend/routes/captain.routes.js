const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const captainController = require('../controllers/captain.controller')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3 }).withMessage('First name must be at least 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min:3 }).withMessage('Color must be at least 3 characters'),
    body('vehicle.plate').isLength({ min:3 }).withMessage('Plate must be at least 3 characters'),
    body('vehicle.capacity').isInt({ min:1 }).withMessage('Capacity must be at least 1 character'),
    body('vehicle.vehicleType').isIn( [ 'car', 'bike', 'auto' ]).withMessage('Invalid choice')
  ], 
  captainController.registerCaptain
)

module.exports = router;

