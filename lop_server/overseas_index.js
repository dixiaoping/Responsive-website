const request = require('request');
const path = require("path");
const express = require('express')
const consoli = require('consolidate');
const app = express();
app.set('view engine', 'html');
app.set('views', path.join(__dirname, "../static/views/"));
app.engine('html', consoli.ejs);
app.set('view cache', true);
var log4js = require('log4js');
log4js.configure('./log4js.json');
var logger = log4js.getLogger('error');

/*处理首面*/
function controllerIndex(req, res) {
	try {
		return res.render('./overseas/index.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}

}
/*开发则*/
function controllerDeveloper(req, res) {
	try {
		return res.render('./overseas/developer.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
/*广告主*/
function controllerAdhost(req, res) {
	try {
		return res.render('./overseas/adhost.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
/*产品服务*/
function controllerPlatform(req, res) {
	try {
		return res.render('./overseas/platform.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
/*关于我们*/
function controllerCompany(req, res) {
	try {
		return res.render('./overseas/company.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
/*新闻*/
function controllerNew(req, res) {
	try {
		return res.render('./overseas/new.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
/*详情*/
function controllerNewdetail(req, res) {
	try {
		return res.render('./overseas/newdetail.ejs');
	} catch (e) {
		logger.error(e);
		return res.render('500.ejs');
	}
}
module.exports = {
	controllerIndex: controllerIndex,
	controllerDeveloper: controllerDeveloper,
	controllerDeveloper: controllerDeveloper,
	controllerAdhost: controllerAdhost,
	controllerPlatform: controllerPlatform,
	controllerCompany: controllerCompany,
	controllerNew: controllerNew,
	controllerNewdetail: controllerNewdetail
}