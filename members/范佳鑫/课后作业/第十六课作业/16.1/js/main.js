function Person(obj) {
	var output = "";
	if (typeof obj.name == "string") {output += "Name:"+obj.name +"\n";}
	if (typeof obj.gender == "string") {output += "Gender:"+obj.gender +"\n";}
	if (typeof obj.device == "string") {output += "Device:"+obj.device +"\n";}
	if (typeof obj.nickname == "string") {output += "Nickname:"+obj.nickname +"\n";}
	if (typeof obj.age == "number") {output += "Age:" + obj.age +"\n";}
	return output;
}

var Myself = Person({
	name:"Jesse Fan",
	age:23,
	gender:"male",
	device:"Xperia",
	nickname:"鑫仔"
})

var MyGF = Person({
	name:"Yiu Ho",
	age:23,
	gender:"female",
})
alert(Myself);
alert(MyGF);
