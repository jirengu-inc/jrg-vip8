function f(){
	alert("这个是回调函数f")
}
function qux() {
	function qux1(arg){
      alert("这个是qux1函数")
      arg()
	}
	return qux1;
}
var r = qux();//qux()是一个桥梁
r(f);//qux1