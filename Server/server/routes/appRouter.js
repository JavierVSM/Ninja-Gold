const express = require ('express');
const AppRouter = express.Router();
const {AppController} = require('../controllers/appController');

AppRouter
    .get ('/tasks', AppController.getIndex);

AppRouter
    .put ('/tasks/:id', AppController.edit);

module.exports={AppRouter};