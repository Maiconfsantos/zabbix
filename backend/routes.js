const express = require("express");

const HostController = require("./controller/host")


const routes = express.Router();

routes.get('/hosts', HostController.get_host_corp);


module.exports = routes;
