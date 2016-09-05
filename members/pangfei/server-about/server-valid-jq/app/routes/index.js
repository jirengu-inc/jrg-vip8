module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
		.get('/in.hbs',indexCtrl.inhbs)
        .post('/', indexCtrl.post)
        .post('/in.hbs',indexCtrl.inPost)

	app.use(router.middleware());
};
