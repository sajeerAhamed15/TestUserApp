var express = require('express');
var router = express.Router();
const user = require("../controllers/user.controller");

router.route('/')
  .get(user.findAllUsers)
  .post(user.createUser);

router.route('/:userName')
  .get(user.findUser)
  .delete(user.deleteUser)
  .put(user.updateUser);

module.exports = router;
