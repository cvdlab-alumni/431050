//stabilizers

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var points1 = [[4,-6,0],[0,-3,0],[0,0,0]];
var knots1 = [0,0,0,2,2,2];
var c1 = NUBS(S0)(2)(knots1)(points1);
var curve1 = MAP(c1)(domain);
//DRAW(curve1);

var points2 = [[0,0,0],[4,0,0],[5,-3,0],[4,-6,0]];
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

var points3 = [[0,0,0],[0,0,4],[4,0,5]];
var knots3 = [0,0,0,2,2,2];
var c3 = NUBS(S0)(2)(knots3)(points3);
var curve3 = MAP(c3)(domain);
//DRAW(curve3);

var points4 = [[4,0,5],[6,0,0],[0,0,0]];
var knots4 = [0,0,0,2,2,2];
var c4 = NUBS(S0)(2)(knots4)(points4);
var curve4 = MAP(c4)(domain);
//DRAW(curve4);

var hermite1 = CUBIC_HERMITE(S1)([c3,c4,[0,1,0],[0,-1,0]]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var surface1 = MAP(hermite1)(domain2);
//DRAW(surface1);

var stabilizers = STRUCT([stab1, stab2, surface1]);
DRAW(stabilizers);
