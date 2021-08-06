import express from 'express';
import { fizzBuzzCtrl } from '../controller/fizzBuzz.js';
import validate from '../middleware/validate.js';
import { fizzBuzzValidation } from '../validation/fizzbuzz.validation.js';

const router = express.Router();

router.get('/fizzbuzz', validate(fizzBuzzValidation), fizzBuzzCtrl);

export default router;
