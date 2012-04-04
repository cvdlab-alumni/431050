// 3D model of the Barcellona Pavilion

var h1 = 17;
var l1 = 39;

var h2 = 5;
var l2 = 8;

var h3 = 12;
var l3 = 12;

var z = 1.2;

var floor = SIMPLEX_GRID([
	[l1],
	[h1],
	[z]
	]);

var floor1 = SIMPLEX_GRID([
	[l2],
	[h2],
	[z]
	]);

var floor2 = SIMPLEX_GRID([
	[l3],
	[h3],
	[z]
	]);

var floor3 = SIMPLEX_GRID([
	[1],
	[1,1],
	[z]
	]);

var floor31 = T([0])([-1])(floor3);
var floor32 = T([0,1])([l1+l3, 4])(floor3);

var floor11 = T([1])([h1])(floor1);

var floor22 = T([0,1])([l1,4])(floor2);

var pavimento = STRUCT([floor, floor11, floor22, floor31, floor32]);


//piscine

var piscina_g = SIMPLEX_GRID([
	[20],
	[9],
	[0.01]
	]);

var piscina1 = T([1,2])([1,z-0.01])(piscina_g);

var piscina_p = SIMPLEX_GRID([
	[4],
	[11],
	[0.01]
	]);

var piscina2 = T([0,1,2])([47,5,z-0.01])(piscina_p);
var piscine = STRUCT([piscina1, piscina2]);

//muri

var muro0 = T([0,1,2])([6,21.8,z])(SIMPLEX_GRID([
	[0.3],
	[0.2],
	[3]
	]));

var muro1 = T([0,1,2])([5.5,15,z])(SIMPLEX_GRID([
	[20],
	[0.3],
	[3]
	]));

var muro2 = T([0,1,2])([25,7.4,z])(SIMPLEX_GRID([
		[9],
		[0.3],
		[3]
	]));

var muro3 = T([0,1,2])([37.2,11.25,z])(SIMPLEX_GRID([
		[5.3],
		[0.4],
		[3]
	]));


var muro4 = T([1,2])([22,z])(SIMPLEX_GRID([
	[4,-4],
	[0.3],
	[3]
	]));

var muro5 = T([1,2])([1,z])(SIMPLEX_GRID([
	[0.3],
	[21],
	[3]
	]));

var muro6 = T([1,2])([1,z])(SIMPLEX_GRID([
	[6.7],
	[0.3],
	[3]
	]));

var muro7 = T([0,1,2])([8,17,z])(SIMPLEX_GRID([
	[0.3],
	[5],
	[3]
	]));

var muron = STRUCT([muro4, muro5, muro6, muro7]);

var muro9 = T([0,1,2])([37.8,16-0.3,z])(SIMPLEX_GRID([
	[13.2],
	[0.3],
	[3]
	]));

var muro10 = T([0,1,2])([51-0.3,5,z])(SIMPLEX_GRID([
	[0.3],
	[11],
	[3]
	]));

var muro11 = T([0,1,2])([41.2,5,z])(SIMPLEX_GRID([
	[9.8],
	[0.3],
	[3]
	]));

var sep = T([0,1,2])([6,21.8,z])(SIMPLEX_GRID([
	[0.3],
	[0.2],
	[3]
	]));

var sep1 = T([0,1,2])([4,20.8,z])(SIMPLEX_GRID([
	[4],
	[0.3],
	[3]
	]));

var muros = STRUCT([muro9, muro10, muro11, sep, sep1]);

var muri = STRUCT([muro0, muro1, muro2, muro3, muros, muron]);

//vetri

var grid1 = SIMPLEX_GRID([
	[0.1],
	[0.2,-0.7,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.7,0.2],
	[3]
	]);

var grid2 = T([2])([3])(SIMPLEX_GRID([
	[0.1],
	[1,1,1,1,1,1,1],
	[0.1]
	]));

var vetro1 = T([0,1,2])([44.8,7,z])(STRUCT([grid1, grid2]));

var grid12 = SIMPLEX_GRID([
	[0.2,-0.7,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.7,0.2],
	[0.1],
	[3]
	]);

var grid22 = T([2])([3])(SIMPLEX_GRID([
	[1,1,1,1,1,1,1,1,1,1],
	[0.1],
	[0.1]
	]));

var vetro2 = T([0,1,2])([30,13.7,z])(STRUCT([grid12, grid22]));

var grid13 = SIMPLEX_GRID([
	[0.2,-0.7,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.7,0.1,0.1,-0.7,0.2],
	[0.1],
	[3]
	]);

var grid23 = T([2])([3])(SIMPLEX_GRID([
	[1,1,1,1,1,1,1,1],
	[0.1],
	[0.1]
	]));

var vetro3 = T([1,2])([17,z])(STRUCT([grid13, grid23]));

var grid14 = SIMPLEX_GRID([
	[0.2,-0.7,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.7,0.2],
	[0.1],
	[3]
	]);

var grid24 = T([2])([3])(SIMPLEX_GRID([
	[1,1,1,1],
	[0.1],
	[0.1]
	]));

var vetro4 = T([0,1,2])([4,22,z])(STRUCT([grid14, grid24]));

var grid15 = SIMPLEX_GRID([
	[0.2,-0.7,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.8,0.1,0.1,-0.7,0.2],
	[0.1],
	[3]
	]);

var grid25 = T([2])([3])(SIMPLEX_GRID([
	[1,1,1,1,1],
	[0.1],
	[0.1]
	]));

var v1 = R([2])([Math.PI/2])(STRUCT([grid15, grid25]))
var vetro5 = T([0,1,2])([4,17,z])(v1);

var vetri = STRUCT([vetro1, vetro2, vetro3, vetro4, vetro5]);

//pannelli di vetro

var pannello = SIMPLEX_GRID([
	[0.1],
	[0.2,-2.7,0.1,0.1,-2.7,0.2],
	[3]
	]);

var pannello1 = T([2])([3])(SIMPLEX_GRID([
	[0.1],
	[3,3],
	[0.1]
	]));

var pan = T([0,1,2])([31,7.5,z])(STRUCT([pannello, pannello1]));
var pan1 = T([0,1,2])([32,7.5,z])(STRUCT([pannello, pannello1]));

//pannello laterale
var pannellol = SIMPLEX_GRID([
	[0.3,-3.28,0.15,0.3,-3.28,0.15,0.3,-3.28,0.15],
	[0.1],
	[3]
	]);

var pannellol1 = T([2])([3])(SIMPLEX_GRID([
	[11.3],
	[0.1],
	[0.1]
	]));

var panlat = T([0,1,2])([30.2,5,z])(STRUCT([pannellol, pannellol1]));

//pilastri
var pilastri_x = SIMPLEX_GRID([
	[0.3,-6.03,0.15,0.15,-6.03,0.15,0.15,-6.03,0.3],
	[0.1,-6.9,0.1],
	[3]
	]);

var pilastri_y = T([0,1])([0.1,-0.1])(SIMPLEX_GRID([
	[0.1,-6.23,0.05,0.05,-6.23,0.05,0.05,-6.23,0.1],
	[0.3,-6.7,0.3],
	[3]
	]));

var pilastri = T([0,1,2])([26,7,z])(STRUCT([pilastri_x,pilastri_y]));

var tetto1 = T([0,1,2])([-1,13,z])(SIMPLEX_GRID([
	[10],
	[10],
	[-3,0.3]
	]));

var tetto21 = T([0,1,2])([23,4,z])(SIMPLEX_GRID([
	[7,-1,15],
	[13],
	[-3,0.3]
	]));

var tetto22 = T([0,1,2])([30,4,z])(SIMPLEX_GRID([
	[1],
	[3,-7,3],
	[-3,0.3]
	]));

var tetto2 = STRUCT([tetto21, tetto22]);
var tetti = STRUCT([tetto1, tetto2]);

var panch1 = T([0])([0.5])(SIMPLEX_GRID([
	[0.3,-1.55,0.15,0.15,-1.7,0.15,0.15,-1.7,0.15,0.15,-1.7,0.15,0.15,-1.7,0.15,0.15,-1.7,0.15,0.15,-1.55,0.3],
	[0.6],
	[0.8]
	]));

var panch2 = T([2])([0.8])(SIMPLEX_GRID([
	[15],
	[0.6],
	[0.2]
	]));

var panchina = T([0,1,2])([6,14,z])(STRUCT([panch1, panch2]));

var modello = STRUCT([pavimento, muri, vetri, pan, pan1, panlat, pilastri, tetti, panchina, piscine]);