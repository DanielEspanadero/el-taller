const { Router } = require('express');
const { homepageGet } = require('../controllers/homepage');

const router = Router();

router.get('/', homepageGet);

module.exports = router;