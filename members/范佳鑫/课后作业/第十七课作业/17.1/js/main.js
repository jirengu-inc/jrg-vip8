function foo() {
	alert("请声明一个函数 foo，它返回一个函数。")
	function foo1(){
		alert("Success!");
	}
	return foo1;
}
var r = foo();
r();
