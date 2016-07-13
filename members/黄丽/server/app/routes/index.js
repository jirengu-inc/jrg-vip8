module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
        .get('/', indexCtrl.index)
        .get('/a', indexCtrl.a)
	.post('/', indexCtrl.post)
       .post('/a', indexCtrl.post2)

	app.use(router.middleware());
};
