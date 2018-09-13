var path=require('path');
var express = require('express');
var consoli=require('consolidate');
var app = express();
app.set('view engine','html');
app.set('views', path.join(__dirname,"../static/views"));
app.engine('html',consoli.ejs);
app.set('view cache', true);

const router = express.Router();
var  controller= require('./overseas_index.js');
router.get('/', function(req, res) {
	controller.controllerIndex(req, res);
}).get('/developer', function(req, res) {
	controller.controllerDeveloper(req, res);
}).get('/adhost', function(req, res) {
	controller.controllerAdhost(req, res);
}).get('/platform',function(req, res){
	controller.controllerPlatform(req, res);
}).get('/company',function(req, res){
	controller.controllerCompany(req,res);
}).get('/new',function(req, res){
	controller.controllerNew(req,res);
}).get('/newdetail',function(req, res){
	controller.controllerNewdetail(req,res);
})
router.get('*', function(req, res){
    return res.render('404.ejs');
});
module.exports = router