const { getAll, create, getOneUser, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
		.get(getAll)
        .post(create)

usersRouter.route("/:id")
        .get(getOneUser)
        .delete(remove)
        .put(update)

module.exports = usersRouter;