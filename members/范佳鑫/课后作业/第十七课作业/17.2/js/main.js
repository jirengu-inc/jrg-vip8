function bar() 
{
	function bar1(num1,num2){
         var result = num1+num2;
         alert(result);
         return result;
	                         }
	
	return bar1;
}
var r = bar();
r(1,2);