// exercise5

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
//DRAW(wing);

//fuselage

var seg = POLYLINE([[0,3,0],[0,0,0],[2,0,0],[2,3,0]]);
var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var cpoints = [[0,3,0],[1,3.5,0],[2,3,0]];
var knots = [0,0,0,3,3,3];
var c = NUBS(S0)(2)(knots)(cpoints);
var curve = MAP(c)(domain);
//DRAW(curve);

var struct = STRUCT([seg,curve]);
//DRAW(struct);

var p0 = [[0,2.2,0],[1,3.5,0],[2,2.2,0]];
var p1 = [[0.9,1.7,12.88],[1,2.1,12.88],[1.1,1.7,12.88]];

var c0 = NUBS(S0)(2)(knots)(p0);
var c1 = NUBS(S0)(2)(knots)(p1);

var curves = STRUCT(CONS(AA(MAP)([c0,c1]))(domain));
//DRAW(curves);

var t = BEZIER(S1)([c0,c1]);
var topsurf = MAP(t)(domain2);
//DRAW(topsurf);

var points = [[0,0,0],[2,0,0],[1.1,1.5,12.88],[0.9,1.5,12.88]];
var cells = [[0,1,2],[0,2,3]];
var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
//DRAW(simplicialComplex);

var points1 = [[0,0,0],[0,2.2,0],[0.9,1.7,12.88],[0.9,1.5,12.88]];
var cells1 = [[0,1,2],[0,2,3]];
var simplicialComplex1 = SIMPLICIAL_COMPLEX(points1)(cells1);
//DRAW(simplicialComplex1);

var points2 = [[2,0,0],[2,2.2,0],[1.1,1.7,12.88],[1.1,1.5,12.88]];
var cells2 = [[0,1,2],[0,2,3]];
var simplicialComplex2 = SIMPLICIAL_COMPLEX(points2)(cells2);
//DRAW(simplicialComplex2);

var coda = STRUCT([topsurf, simplicialComplex, simplicialComplex1, simplicialComplex2]);
//DRAW(coda);

//body 
var bcpoints = [[0,0.1,-1.5],[2,0.1,-1.5],[-2,11,0],[-2,-11,0]];
var body = CUBIC_HERMITE(S0)(bcpoints);
var bodys = MAP(body)(domain);
//DRAW(bodys);

var bs = BEZIER(S1)([c0,body]);
var bodysurf = MAP(bs)(domain2);
//DRAW(bodysurf);

var pointsb = [[0,0,0],[2,0,0],[0,0.1,-1.5],[2,0.1,-1.5]];
var cells = [[0,1,2],[1,2,3]];
var bsimplicialComplex = SIMPLICIAL_COMPLEX(pointsb)(cells);
//DRAW(bsimplicialComplex);

var pointsb1 = [[0,0,0],[0,2.2,0],[0,0.1,-1.5]];
var cells = [[0,1,2]];
var b1simplicialComplex = SIMPLICIAL_COMPLEX(pointsb1)(cells);
//DRAW(b1simplicialComplex);

var pointsb2 = [[2,0,0],[2,2.2,0],[2,0.1,-1.5]];
var cells = [[0,1,2]];
var b2simplicialComplex = SIMPLICIAL_COMPLEX(pointsb2)(cells);
//DRAW(b2simplicialComplex);

var body1 = STRUCT([bodysurf, bsimplicialComplex, b1simplicialComplex, b2simplicialComplex]);
//DRAW(body1);

//testa della fusoliera
var cabinpoints = [[0,0.2,-2.5],[2,0.2,-2.5],[-2,6,0],[-2,-6,0]];
var cabin = CUBIC_HERMITE(S0)(cabinpoints);
var cabincurve = MAP(cabin)(domain);

var cabinpoints1 = [[0,0.3,-3.5],[2,0.3,-3.5],[-2,9,0],[-2,-9,0]];
var cabin1 = CUBIC_HERMITE(S0)(cabinpoints1);
var cabincurve1 = MAP(cabin1)(domain);

var cabins = BEZIER(S1)([body,cabin,cabin1]);
var cabinsurf = MAP(cabins)(domain2);
//DRAW(cabinsurf);

var cabinfpoints = [[0,0.1,-1.5],[2,0.1,-1.5],[0,0.3,-3.5],[2,0.3,-3.5]];
var cells = [[0,1,2],[1,2,3]];
var cabinfsimplicialComplex = SIMPLICIAL_COMPLEX(cabinfpoints)(cells);
//DRAW(cabinfsimplicialComplex);

var body2 = STRUCT([cabinsurf, cabinfsimplicialComplex]);
//DRAW(body2);

//punta
var motorpoints = [[0,0.4,-4.5],[2,0.4,-4.5],[-2,9,0],[-2,-9,0]];
var motor1 = CUBIC_HERMITE(S0)(motorpoints);
var motorcurve1 = MAP(motor1)(domain);

var motors = BEZIER(S1)([cabin1,motor1]);
var motorsurf = MAP(motors)(domain2);
//DRAW(motorsurf);

var motorfpoints = [[0,0.3,-3.5],[2,0.3,-3.5],[0,0.4,-4.5],[2,0.4,-4.5]];
var cells = [[0,1,2],[1,2,3]];
var motorfsimplicialComplex = SIMPLICIAL_COMPLEX(motorfpoints)(cells);

var punta = [[0.7,1.5,-5.5],[1.3,1.5,-5.5],[0,0.7,0],[0,-0.7,0]];
var hermite = CUBIC_HERMITE(S0)(punta);
var hcurve = MAP(hermite)(domain);

var punta1 = [[0.7,1.5,-5.5],[1.3,1.5,-5.5],[0,-0.7,0],[0,0.7,0]];
var hermite1 = CUBIC_HERMITE(S0)(punta1);
var hcurve1 = MAP(hermite1)(domain);

var hsup = BEZIER(S1)([hermite, hermite1]);
var hermitesup = MAP(hsup)(domain2);
//DRAW(hermitesup);

var cofup = BEZIER(S1)([hermite,motor1]);
var cup = MAP(cofup)(domain2);
//DRAW(cup);

var newherm = CUBIC_HERMITE(S0)([[0,0.4,-4.5],[2,0.4,-4.5],[1,0,0],[1,0,0]]);
var cofdown = BEZIER(S1)([hermite1, newherm]);
var cofdownsurf = MAP(cofdown)(domain2);
//DRAW(cofdownsurf);

var body3 = STRUCT([motorsurf, motorfsimplicialComplex, hermitesup, cup, cofdownsurf]);
//DRAW(body3);

var fuselage = STRUCT([body1, body2, body3, coda]);
//DRAW(fuselage);

//stabilizers

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var points1 = [[2,-3,0],[0,-1.5,0],[0,0,0]];
var knots1 = [0,0,0,2,2,2];
var c1 = NUBS(S0)(2)(knots1)(points1);
var curve1 = MAP(c1)(domain);
//DRAW(curve1);

var points2 = [[0,0,0],[2,0,0],[2.5,-1.5,0],[2,-3,0]];
var knots2 = [0,0,0,1,3,3,3];
var c2 = NUBS(S0)(2)(knots2)(points2);
var curve2 = MAP(c2)(domain);
//DRAW(curve2);

var hermite = CUBIC_HERMITE(S1)([c1,c2,[0,1,0],[0,-1,0]]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var surface = MAP(hermite)(domain2);
//DRAW(surface);

var stab1 = STRUCT([curve1,curve2,surface]);
//DRAW(surface);

var stab2 = R([1,2])(PI)(stab1);
//DRAW(stab2);

var points3 = [[0,0,0],[0,0,2],[2,0,2.5]];
var knots3 = [0,0,0,2,2,2];
var c3 = NUBS(S0)(2)(knots3)(points3);
var curve3 = MAP(c3)(domain);
//DRAW(curve3);

var points4 = [[2,0,2.5],[3,0,0],[0,0,0]];
var knots4 = [0,0,0,2,2,2];
var c4 = NUBS(S0)(2)(knots4)(points4);
var curve4 = MAP(c4)(domain);
//DRAW(curve4);

var hermite1 = CUBIC_HERMITE(S1)([c3,c4,[0,1,0],[0,-1,0]]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var surface1 = MAP(hermite1)(domain2);
//DRAW(surface1);

var stabilizers = STRUCT([stab1, stab2, surface1]);
//DRAW(stabilizers);

var wingdex = T([0,1,2])([4,1,-2])(R([0,2])([PI/2])(wing));
//DRAW(wingdex);
var wingsix = T([0,1,2])([-2,1,-2])(R([1,2])([PI])(R([0,2])([-PI/2])(wing)));
//DRAW(wingsix);
var wings = STRUCT([wingdex, wingsix]);

var stabrot1 = R([0,1])(PI/2)(stabilizers);
var stabrot2 = R([1,2])(-PI/2)(stabrot1);
var stabrot3 = R([0,2])(PI)(stabrot2);
var stabls = T([0,1,2])([1,1.7,12.88])(stabrot3);
//DRAW(stabls);

var dh53 = STRUCT([fuselage, wings, stabls]);
//DRAW(dh53);

var pista = SIMPLEX_GRID([[15],[0],[100]]);
var dh53transl = T([0,1,2])([6.5,2,70])(dh53);
var pistastruct = STRUCT([pista, dh53transl]);
DRAW(pistastruct);


