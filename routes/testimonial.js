const express = require('express');
const controller = require('../controllers/testimonial');

const router = express.Router();

router.post('/create/testimonial', controller.createTestimonial);
router.get('/view-all/testimonials/:status?', controller.getTestimonials);
router.patch('/update/testimonial/:testimonial_id?', controller.updateTestimonial);
router.delete('/delete/testimonial/:testimonial_id?', controller.deleteTestimonial);
module.exports = router;