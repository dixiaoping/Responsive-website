const path=require("path");
var express = require('express')
var consoli=require('consolidate');
var app = express();
/*app.use(express.static('./static/public'));*/
app.set('view engine','html');
app.set('views', path.join(__dirname+'/static/views'));
app.engine('html',consoli.ejs);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.render("404.ejs");
});
app.use('/overseas',require("./lop_server/overseas_router"));
app.use('/',require("./lop_server/router"));
app.listen(8088, function (err) {
	if(err){
     console.log('Server startup failed:'+err);
	}
  else{
     console.log('server start',8088);
  }
});