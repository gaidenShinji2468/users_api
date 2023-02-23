const express = require('express');
const router = express.Router();
const users = require("./users.router");

// colocar las rutas aquí
router.use("/users", users);

module.exports = router;
