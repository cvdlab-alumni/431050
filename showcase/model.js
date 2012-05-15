//re e regina scacchi

var base = EXTRUDE([0.4])(DISK(1)(1032));
//DRAW(disk);

var piedi = T([2])([0.4])(EXTRUDE([0.4])(DISK(0.8)(1032)));
//DRAW(disk1);

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var cpoints = [[-0.7,0,0],[-0.7,0.7,0],[0,0.7,0],[0.7,0.7,0],[0.7,0,0],[0.7,-0.7,0],[0,-0.7,0],[-0.7,-0.7,0],[-0.7,0,0]];
var knots = [0,0,0,2,2,4,4,6,6,8,8,8];
var nubs = NUBS(S0)(2)(knots)(cpoints);
//var cerchio = MAP(nubs)(domain);
//DRAW(cerchio);

var cpoints1 = [[-0.7,0,0.3],[-0.7,0.7,0.3],[0,0.7,0.3],[0.7,0.7,0.3],[0.7,0,0.3],[0.7,-0.7,0.3],[0,-0.7,0.3],[-0.7,-0.7,0.3],[-0.7,0,0.3]];
var nubs1 = NUBS(S0)(2)(knots)(cpoints1);
//var cerchio1 = MAP(nubs1)(domain);
//DRAW(cerchio1);

var cpoints2 = [[-0.4,0,1],[-0.4,0.4,1],[0,0.4,1],[0.4,0.4,1],[0.4,0,1],[0.4,-0.4,1],[0,-0.4,1],[-0.4,-0.4,1],[-0.4,0,1]];
var nubs2 = NUBS(S0)(2)(knots)(cpoints2);
//var cerchio2 = MAP(nubs2)(domain);
//DRAW(cerchio2);

var bezier = BEZIER(S1)([nubs,nubs1]);
var corpoinf = MAP(bezier)(domain2);
var bezier1 = BEZIER(S1)([nubs1,nubs2]);
var corposup = MAP(bezier1)(domain2);
var corpo = STRUCT([corposup,corpoinf]);

var croce_x = SIMPLEX_GRID([
		[0.4],
		[0.3],
		[0.1,-0.2,0.2]
	]);

var croce_y = T([0,2])([-0.1,0.1])(SIMPLEX_GRID([
		[0.6],
		[0.3],
		[0.2]
	]));

var croce = T([0,1,2])([-0.2,-0.15,2.97])(STRUCT([croce_x,croce_y]));
//DRAW(croce);

var colloinf = T([2])([1.8])(EXTRUDE([0.2])(DISK(0.7)(1032)));
//DRAW(disk3);

var collosup = T([2])([2])(EXTRUDE([0.2])(DISK(0.6)(1032)));
//DRAW(disk4);

//head

var cpoints3 = [[-0.4,0,1.8],[-0.4,0.4,1.8],[0,0.4,1.8],[0.4,0.4,1.8],[0.4,0,1.8],[0.4,-0.4,1.8],[0,-0.4,1.8],[-0.4,-0.4,1.8],[-0.4,0,1.8]];
var nubs3 = NUBS(S0)(2)(knots)(cpoints3);
//var cerchio3 = MAP(nubs3)(domain);

var cpoints4 = [[-0.5,0,2.5],[-0.5,0.5,2.5],[0,0.5,2.5],[0.5,0.5,2.5],[0.5,0,2.5],[0.5,-0.5,2.5],[0,-0.5,2.5],[-0.5,-0.5,2.5],[-0.5,0,2.5]];
var nubs4 = NUBS(S0)(2)(knots)(cpoints4);
//var cerchio4 = MAP(nubs4)(domain);

var bezier3 = BEZIER(S1)([nubs3,nubs4]);
var testainf = MAP(bezier3)(domain2);
//DRAW(body3);

var cpoints5 = [[-0.3,0,2.9],[-0.3,0.3,2.9],[0,0.3,2.9],[0.3,0.3,2.9],[0.3,0,2.9],[0.3,-0.3,2.9],[0,-0.3,2.9],[-0.3,-0.3,2.9],[-0.3,0,2.9]];
var nubs5 = NUBS(S0)(2)(knots)(cpoints5);
//var cerchio5 = MAP(nubs5)(domain);
//DRAW(cerchio5);

var bezier4 = BEZIER(S1)([nubs4,nubs5]);
var testamed = MAP(bezier4)(domain2);
//DRAW(body4);

var cpoints6 = [[-0.1,0,2.97],[-0.1,0.1,2.97],[0,0.1,2.97],[0.1,0.1,2.97],[0.1,0,2.97],[0.1,-0.1,2.97],[0,-0.1,2.97],[-0.1,-0.1,2.97],[-0.1,0,2.97]];
var nubs6 = NUBS(S0)(2)(knots)(cpoints6);
//var cerchio6 = MAP(nubs6)(domain);
//DRAW(cerchio6);

var bezier5 = BEZIER(S1)([nubs5,nubs6]);
var testasup = MAP(bezier5)(domain2);
//DRAW(body5);

var bottom = COLOR([1,0,0])(DISK(1)(1032));
//DRAW(bottom);

var upking = COLOR([0.14,0.14,0.15])(STRUCT([base,piedi,colloinf,collosup,testainf,testamed,testasup,croce,T([2])([0.8])(corpo)]));

var re = STRUCT([bottom,upking]);
//DRAW(king);

//sfera
var domainsphere = DOMAIN([[0-(PI),PI],[0,2*PI]])([32,32]);

	var mapSphere = function (p){
		var u = p[0];
		var v = p[1];

		return [0.3*COS(u)*COS(v), 0.3*COS(u)*SIN(v), 0.3*SIN(u)];	
	};
	var sfera = T([2])([3.27])(MAP(mapSphere)(domainsphere));
	//DRAW(sphere);

	var upqueen = COLOR([0.14,0.14,0.15])(T([0])([3])(STRUCT([base,piedi,colloinf,collosup,testainf,testamed,testasup,sfera,T([2])([0.8])(corpo)])));
	var regina = STRUCT([upqueen,T([0])([3])(bottom)]);
	//DRAW(queen);

var scmodel = STRUCT([re,regina]);
