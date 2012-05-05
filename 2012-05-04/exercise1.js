//wing

var domain = INTERVALS(1)(30);
var cpoints = [[0,0,0],[1.5,0.5,0],[3,-0,0],[1.5,-0.5,0],[0,0,0]];
var c = BEZIER(S0)(cpoints);
var curve = MAP(c)(domain);

function POLYPOINT(points){
	return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i){
		return [i];
	}));
}

var polypoints = POLYPOINT(cpoints);
//DRAW(polypoints);

var t = T([2])([2]);
var struct = STRUCT([polypoints,t,polypoints,t,polypoints,t,polypoints,t,polypoints,t,polypoints,t,polypoints]);

var p0 = [[0,0,0],[1.5,0.5,0],[3,-0,0],[1.5,-0.5,0],[0,0,0]];
var p1 = p0.map(function (p) {return [p[0],p[1],p[2]+2]});
var p2 = p0.map(function (p) {return [p[0],p[1],p[2]+4]});
var p3 = p0.map(function (p) {return [p[0],p[1],p[2]+6]});
var p4 = p0.map(function (p) {return [p[0],p[1],p[2]+8]});
var p5 = p0.map(function (p) {return [p[0],p[1],p[2]+10]});
var p6 = p0.map(function (p) {return [p[0],p[1],p[2]+12]});
var p7 = p0.map(function (p) {return [p[0]*0.3+0.5,p[1]*0.3,p[2]+12]});
var p8 = p0.map(function (p) {return [p[0]*0.8+0.3,p[1]*0.8,p[2]-2]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);

var curves = STRUCT(CONS(AA(MAP)([c8,c0,c1,c2,c3,c4,c5,c6,c7]))(domain));
//DRAW(curves);

var domainsurf = DOMAIN([[0,1],[0,1]])([30,50]);
var s = BEZIER(S1)([c8,c0,c1,c2,c3,c4,c5,c6,c7]);
var wing = MAP(s)(domainsurf);
DRAW(wing);

