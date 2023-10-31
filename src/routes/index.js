const express = require('express');
const usersRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', usersRouter);

module.exports = router;

