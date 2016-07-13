$.validate = function(form, rules){

    var allValues = collectData(form)


    var formValid = true
    for(var name in allValues){
        console.log(name)
        var value = allValues[name]
        var rule = rules[name]
        var inputValid = rule(value)
        console.log(inputValid)
        if(inputValid === false){
            formValid = false;
            break;
        }
    }


    return {valid: formValid, errorList: [] }

    function collectData(form){
        var selector = 'input[type=text], input[type=hidden], input[type=radio], input[type=checkbox], input[type=password], select, textarea'
        var nameList = $(form).find(selector).map(function(index, node){
            return node.getAttribute('name')
        }).get()

        var allValues = {}
        for(var i=0; i<nameList.length; i++){
            var name = nameList[i]

            if(allValues[name] !== undefined){ continue }

                var $input = $(form).find('[name='+ name +']')
            var value = $input.val()

            var type = $input.attr('type')
            if(type === 'radio'){
                value = $input.filter('input:checked').val()
            }else if(type === 'checkbox'){
                value = $input.filter('input:checked').map(function(){return this.value}).get().join(',')
            }

            allValues[name] = value
        }
        return allValues

    }

}



var rules = {
    email: function(value){
        return value.indexOf('@') >= 0
    },
    phone: function(value){
        return /^\d+$/.test(value)
    },
    username: function(value){
        return value.length >= 3 && value.length <= 30
    }
}


$.validate($('form').eq(0), rules)
