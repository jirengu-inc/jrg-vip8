module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
        .post('/', indexCtrl.post)
        .get('/adc', indexCtrl.adc)
        .post('/', indexCtrl.adc)
	app.use(router.middleware());
};
