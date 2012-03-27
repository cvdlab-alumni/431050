//realizzare script per creare dominio dim. 1, 2, 3.

//traslare una retta in alto
var domain = DOMAIN([[0,1]])([10]);

var mapping = function (p) {
	var u = p[0]; //p[0] è la coordinata x

	return [u, 1];
};

var mapped = MAP(mapping)(domain);
DRAW(mapped);

//bisettrice
var domain = DOMAIN([[0,1]])([10]);

var bisettrice = function (p) {
	var u = p[0];
	return [u,u];
};

var bis = MAP(bisettrice)(domain);
DRAW(bis);

//sinusoide
var domain = DOMAIN([[0,2*PI]])([36]);//più divisioni si fanno più è definita la curva

var sinusoide = function (p){
	var u = p[0];
	return [u,SIN(u)];
};

var sinus = MAP(sinusoide)(domain);
COLOR([0,0,0])(sinus);
DRAW(sinus);

//circonferenza
var drawCircle = function(r,n){
	var domain = DOMAIN([[0,2*PI]])([n]);//più divisioni si fanno più è definita la curva

	var mapCircle = function (p){
		var u = p[0];
		return [r*SIN(u),r*COS(u)];
	};

	var circle = MAP(mapCircle)(domain);
	COLOR([0,0,0])(circle);
	DRAW(circle);
};

//cilindro
var drawCylinder = function(r,h,m,n,color){
	var domain = DOMAIN([[0,2*PI],[0,h]])([n,m]);

	var mapCylinder = function(p){
		var u = p[0];
		var v = p[1];

		return [r*COS(u),r*SIN(u),v];
	};

	var cylinder = MAP(mapCylinder)(domain);
	COLOR(color)(cylinder);
	DRAW(cylinder);
};


//sfera(semi sfera)
var drawSphere = function (r,n,color){
	var domain = DOMAIN([[0-(PI/2),PI/2],[0-(PI/2),PI/2]])([n,n]);//con questo intervallo è una semisfera

	var mapSphere = function (p){
		var u = p[0];
		var v = p[1];

		return [r*COS(u)*COS(v), r*COS(u)*SIN(v), r*SIN(u)];	
	};
	var sphere = MAP(mapSphere)(domain);
	COLOR(color)(sphere);
	DRAW(sphere);
};

//sfera
var drawSphere = function (r,n,color){
	var domain = DOMAIN([[0-(PI),PI],[0,2*PI]])([n,n]);//con questo intervallo è una semisfera

	var mapSphere = function (p){
		var u = p[0];
		var v = p[1];

		return [r*COS(u)*COS(v), r*COS(u)*SIN(v), r*SIN(u)];	
	};
	var sphere = MAP(mapSphere)(domain);
	COLOR(color)(sphere);
	DRAW(sphere);
};