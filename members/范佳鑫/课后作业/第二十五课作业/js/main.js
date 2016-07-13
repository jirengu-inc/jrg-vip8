function Animal() {
	this.species = '动物';
}//初始化对应对象数据的函数体
Animal.prototype.die= function(){
	console.log("动物都会有死亡")
}//Animal的原型对象添加一个say方法,每个实例化对象都可以共享这个方法
function Cat(){
	Animal.apply(this,arguments);//调用Animal这个（构造函数）对象里面的apply方法间接调用自己（函数），并劫持到Cat的this里面运行(另一个构造函数Cat实例化了新对象为cat，Cat的this指向cat)
	this.tail = '一条尾巴';//指向调用这个函数的对象初始化里面属性tail并赋值.
}

var temple = function(){};//创建新函数
temple.prototype = Animal.prototype;//将构造函数Animal的prototype属性指向的原型对象付给新定义的函数的prototype属性指向的原型对象
Cat.prototype = new temple();//构建的新实例对象付给Cat原型对象，会自动建立一个他自己的原型对象同时获得constructor的属性 丢失了原来原型对象里constructor属性的值

//Cat.prototype.constructor = Cat;//反向引用Cat函数让prototype里的constructor属性再次指向Cat函数
console.dir(Cat.prototype.constructor);
Cat.prototype.food = function(){
   console.log("猫儿喜欢吃鱼")
}//为Cat函数对象prototype属性指向的原型对象指定一个run方法
Cat.prototype.say = function(){
    console.log("喵喵喵")
}//为Cat函数对象prototype属性指向的原型对象指定一个say方法
function Zecat(){
	Cat.apply(this,arguments);
    this.ear = "折的耳朵";
    this.dna = "基因是突变的"
}
Zecat.prototype = Object.create(Cat.prototype);
Zecat.prototype.move = function(){
    console.log("软骨异常增生、行动不便、呼吸道狭窄、心血管疾病等问题。")
}
var cat = new Cat();//构建新的实例cat，这个时候Cat构造函数里面的this是指cat这个新实例
cat.say();//以下都是cat调试。
cat.die();
console.log(cat.species);
console.log(cat.tail);

var zecat = new Zecat();//以下都是zecat调试。
console.log(zecat.species);
console.log(zecat.tail);
console.log(zecat.ear);
zecat.move();
zecat.say();
zecat.die();
console.dir(Zecat);
