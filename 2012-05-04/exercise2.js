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
DRAW(fuselage);