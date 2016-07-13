module.exports = {
    index: function *(next) {
        yield this.render('index2.hbs');
        yield next;
    },
    adc: function *(next) {
        yield this.render('adc.hbs');
        yield next;
    },
    data: function *(next) {

        // from mysql

        var userData = {
            name: 'frank',
            age: 25
        }

        var userDataString = JSON.stringify(userData)  // '{"name":"frank","age":25}'

        var callback = this.query.call2

        callback = callback.replace(/\(/g, '')
        callback = callback.replace(/\)/g, '')

        this.body = callback + '(' + userDataString + ')'
        //this.body = '<script>' + callback + '(' + userDataString + ')' + '</script>'
    },
    post: function *(next) {
    var phone = this.request.body.phone
    var password = this.request.body.password
    var regex = /^1\d{10}$/
    var valid =regex.test(phone)
    //在页面中显示错误
    // if (valid) {
    //      yield this.render('index2.hbs',{message:'提交成功'})
    //  }else{
    //      yield this.render('index2.hbs',{message:'提交失败，号码格式不对'})
    //  }

        // 提交到数据库...
        // mysql ...

        //yield this.render('post.hbs', {
        //    name: name,
        //    phone: phone
        //});
        if (valid) {
            this.body = {
                errorCode: 0  //框架
            }
        }else{
            this.body = {
                errorCode: 1,
                // message: 'xxx error'
            }
        }
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
