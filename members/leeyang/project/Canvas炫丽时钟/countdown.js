// var window_width = 1024;
// var window_height = 768;
// var radius = 8;
// var margin_top = 60;
// var marign_left = 30;

var window_width = document.documentElement.clientWidth-20;
var window_height = document.documentElement.clientHeight-20
var marign_left = Math.round(window_width / 10);
var radius = Math.round(window_width * 4 / 5 / 108) - 1;
var margin_top = Math.round(window_height /5);





// var endTime = new Date();
// endTime.setTime( endTime.getTime() + 3600 * 1000);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33b5e5", "#0099cc", "#AA66CC", "#9933cc", "#99cc00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];


window.onload = function(){

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	canvas.width = window_width;
	canvas.height = window_height;

	curShowTimeSeconds = getCurrentShowTimeSeconds();
	setInterval(function(){
		render(context);
		update();
	},50);
}


function getCurrentShowTimeSeconds() {
	var curTime = new Date();
	var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

	return ret;
}



function render(context){

	context.clearRect(0,0,window_width,window_height);   //clearRect 对一个矩形区域内进行刷新操作
	var hours = parseInt(curShowTimeSeconds / 3600);
	var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
	var seconds = curShowTimeSeconds % 60;

	renderDight(marign_left, margin_top, parseInt(hours/10), context);
	renderDight(marign_left+ 15*(radius+1), margin_top, parseInt(hours%10), context);
	renderDight(marign_left+ 30*(radius+1), margin_top, 10, context);
	renderDight(marign_left+ 39*(radius+1), margin_top, parseInt(minutes/10), context);
	renderDight(marign_left+ 54*(radius+1), margin_top, parseInt(minutes%10), context);
	renderDight(marign_left+ 69*(radius+1), margin_top, 10, context);
	renderDight(marign_left+ 78*(radius+1), margin_top, parseInt(seconds/10), context);
	renderDight(marign_left+ 93*(radius+1), margin_top, parseInt(seconds%10), context);


	for( var i = 0; i < balls.length; i++){
		context.fillStyle = balls[i].color;
		context.beginPath();
		context.arc(balls[i].x, balls[i].y, radius, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
	}
}


function update(){
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();

	var nextHours = parseInt( nextShowTimeSeconds / 3600);
	var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600) / 60);
	var nextSeconds = nextShowTimeSeconds % 60;

	var curHours = parseInt( curShowTimeSeconds / 3600);
	var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600) / 60);
	var curSeconds = curShowTimeSeconds % 60;

	if(nextSeconds != curSeconds) {
		if(parseInt(curHours/10) != parseInt(nextHours/10)) {
			addBalls(marign_left + 0, margin_top, parseInt(curHours/10));
		}

		if(parseInt(curHours%10) != parseInt(nextHours%10)) {
			addBalls(marign_left + 15*(radius + 1), margin_top, parseInt(curHours/10));
		}

		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)) {
			addBalls(marign_left + 39*(radius + 1), margin_top, parseInt(curMinutes/10));
		}

		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)) {
			addBalls(marign_left + 54*(radius + 1), margin_top, parseInt(curMinutes/10));
		}

		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)) {
			addBalls(marign_left + 78*(radius + 1), margin_top, parseInt(curSeconds/10));
		}

		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)) {
			addBalls(marign_left + 93*(radius + 1), margin_top, parseInt(curSeconds%10));
		}



		curShowTimeSeconds = nextShowTimeSeconds;
	}

	updateBalls();
}


function updateBalls() {
	for(var i = 0; i < balls.length; i++){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if( balls[i].y >= window_height - radius){
			balls[i].y = window_height - radius;
			balls[i].vy = - balls[i].vy*0.75;
		}
	}

	var cnt = 0;
	for(var i = 0 ; i < balls.length; i++)
		if(balls[i].x + radius > 0 && balls[i].x - radius < window_width)
			balls[cnt++] = balls[i];
	while(balls.length > Math.min(300,cnt)) {
		balls.pop();
	}
}



function addBalls(x, y, num){
	for(var i = 0; i < digit[num].length; i++)
		for(var j = 0; j < digit[num][i].length; j++)
			if(digit[num][i][j] == 1){
				var aBall = {
					x:x+j*2*(radius+1)+(radius+1),
					y:y+i*2*(radius+1)+(radius+1),
					g:1.5+Math.random(),   //球的加速度
					vx:Math.pow(-1, Math.ceil(Math.random()*1000)) * 4,
					vy: -5,
					color: colors[Math.floor(Math.random()*colors.length)]
				}

				balls.push(aBall)
			}
}

function renderDight(x, y, num, context) {
	context.fillStyle = "rgb(0,102,153)";

	for (var i = 0; i < digit[num].length; i ++)
		for (var j = 0; j < digit[num][i].length; j ++)
			if( digit[num][i][j] == 1){
				context.beginPath();
				context.arc( x+j*2*(radius+1)+(radius+1), y+i*2*(radius+1)+(radius+1), radius, 0, 2*Math.PI);
				context.closePath();

				context.fill();
			}
}