module.exports = {
    index: function *(next) {
        yield this.render('index.hbs');
        yield next;
    },
    index2: function *(next) {
        yield this.render('index2.hbs');
        yield next;
    },
    ddd: function *(next){
        var callback = this.request.query.callback
        this.set('Access-Control-Allow-Origin',  'http://a.com');
        this.body = '{"name":"frank", "password":"12345678"}'
        yield next;
    },
    steal: function *(){
        var dataFromB = exec('curl -L http://b.com/data')
        this.body = dataFromB
        yield next;
    },
    data: function *(next) {
        yield this.render('data.hbs');
        yield next;

        // from mysql

        //var userData = {
            //name: 'frank',
            //age: 25
        //}

        //var userDataString = JSON.stringify(userData)  // '{"name":"frank","age":25}'

        //var callback = this.query.call2

        //callback = callback.replace(/\(/g, '')
        //callback = callback.replace(/\)/g, '')

        //this.body = callback + '(' + userDataString + ')'
        ////this.body = '<script>' + callback + '(' + userDataString + ')' + '</script>'
    },

    post: function *(next) {
        var username = this.request.body.username
        var password = this.request.body.password

        if(password === '123'){
            yield this.render('post.hbs')
        }else{
            yield this.render('error.hbs')
        }
        // 提交到数据库...
        // mysql ...

        //yield this.render('post.hbs', {
        //    name: name,
        //    phone: phone
        //});

        //this.body = {
            //errorCode: 0,
            //data: {
                //name: name,
                //phone: phone
            //}
        //}
        yield next;
    },
    post2: function *(next) {
        var name = this.request.body.name
        var phone = this.request.body.phone
        // 提交到数据库...
        // mysql ...

        yield this.render('post2.hbs', {
            name2: name, //方应杭
            phone2: phone
        });
        yield next;
    }

};
