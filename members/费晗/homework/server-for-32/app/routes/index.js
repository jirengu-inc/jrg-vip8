module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
        .post('/', indexCtrl.post)
        .get('/index2', indexCtrl.index2)
	app.use(router.middleware());
};
