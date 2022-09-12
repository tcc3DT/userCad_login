const express = require('express')
const router = express.Router();
const Controller = require('../Controllers/Controller');
const UserController = require('../Controllers/UserController');

router.get('/migration', Controller.CreateTable);
router.post('/login', UserController.index);
router.post('/register', UserController.create);
router.put('/update', UserController.update);
router.delete('/delete', UserController.delete);
router.get('/getUser', UserController.userList);
router.get('/getUserFilter', UserController.userFilter)


module.exports = router;