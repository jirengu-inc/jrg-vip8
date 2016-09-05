module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
        .get('/', indexCtrl.index)
		.get('/login.hbs',indexCtrl.login)
        .post('/', indexCtrl.post)
        .post('/login.hbs',indexCtrl.loginPost);

	app.use(router.middleware());
};
