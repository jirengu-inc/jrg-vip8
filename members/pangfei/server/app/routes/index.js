module.exports = function(app) {
	var Router	= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		  .get('/', indexCtrl.index)
		  .get('/Login.hbs',indexCtrl.Login)
          .post('/Login.hbs', indexCtrl.LoginPost)

	app.use(router.middleware());
};
