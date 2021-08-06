import express from 'express';
import {fizzBuzzCtrl} from '../controller/fizzBuzz.js';
import validate from '../middleware/validate.js';
import fizzBuzzValidation from '../validation/fizzbuzz.validation.js';
let router = express.Router();

/* GET home page. */
router.get('/fizzbuzz', validate(fizzBuzzValidation), fizzBuzzCtrl);

export default router;
