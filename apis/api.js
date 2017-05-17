const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const config = require('../config/database');
const router = express.Router();

router.get('/fruits', (req, res, next) => {
    res.json({ fruits: ['mango','banana','papaya','apple'] });
});

module.exports = router;