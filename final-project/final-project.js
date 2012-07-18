var scalino = T([0])([-4.5])(SIMPLEX_GRID([
	[9],
	[6],
	[0.2]
	]));

//DRAW(scalino);

var basamento_facc = T([0,1,2])([-4.45,0.05,0.2])(SIMPLEX_GRID([
	[0.95+0.15,-0.4,1.3,-3.3,1.3,-0.4,0.95+0.15],
	[0],
	[0.5]
	]));

var fin_facc = T([0,1,2])([-(0.4+0.45+0.8+1.3+0.4),0.05,0.2])(SIMPLEX_GRID([
	[0.4,-(1.3+0.8+0.45+0.8+0.45+0.8+1.3),0.4],
	[0],
	[0.15,-0.2,0.15]
	]));

var basamento_lat_sin = T([0,1,2])([-4.45,0.05,0.2])(SIMPLEX_GRID([
	[0.05],
	[0.15+5.6+0.15],
	[0.5]
	]));

//DRAW(basamento_lat_sin);

var basamento_lat_dex = T([0])([8.85])(basamento_lat_sin);

//DRAW(basamento_lat_dex);

var basamento_retro = T([0,1,2])([-4.45,0.15+5.6+0.15,0.2])(SIMPLEX_GRID([
	[8.9],
	[0.05],
	[0.5]
	]));

var scalino_basso = T([0])([-4.5])(SIMPLEX_GRID([
	[9],
	[6],
	[0.15]
	]));

// scale facciata

var basi = T([0,1])([-2.15,-1.5])(SIMPLEX_GRID([
	[0.5,-3.3,0.5],
	[1.5],
	[0.2,-0.5,0.15]
	]));

//DRAW(basi);

var muretto_x = T([0,1,2])([-2.15,-1.45,0.2])(SIMPLEX_GRID([
	[-0.05,0.4,-0.05,-3.3,-0.05,0.4,-0.05],
	[0.05+1.45],
	[0.5]
	]));

//DRAW(muretto_x);

var scale = STRUCT([]);
for (var i = 0; i < 10; i++){
	var gradino = T([0,1,2])([-1.65,-1.5+(0.15*i),(0.085*i)])(SIMPLEX_GRID([
	[3.3],
	[1.5-(0.15*i)],
	[0.085]
	]));
	scale = STRUCT([scale,(gradino)]);
};

var scalinata = STRUCT([basi,muretto_x,scale]);
//DRAW(scalinata);

// scale retro

var app = STRUCT([]);
for(var i = 0; i < 10; i++){
	var scal = T([0,1,2])([-1.85+(0.075*i),6,0.085*i])(SIMPLEX_GRID([
		[3.7-(0.15*i)],
		[0.75],
		[0.085]
		]));
	app = STRUCT([app,(scal)]);
};

//DRAW(app);

var basamento = COLOR([0.960,0.960,0.862])(STRUCT([scalino,app,scalinata,basamento_facc,fin_facc,basamento_lat_sin,basamento_lat_dex,basamento_retro,T([2])([0.7])(scalino_basso)]));
//DRAW(basamento);

var pavimento_facc_basso = T([0,1,2])([-4.4,0.1,0.85])(SIMPLEX_GRID([
	[0.1+0.95,-0.4,1.3-0.05,-3.3-0.1,1.3-0.05,-0.4,0.95+0.1],
	[0.1+0.2],
	[0.15]
	]));

//DRAW(pavimento_facc_basso);

var pavimento_lat_sin_basso = T([0,1,2])([-4.4,0.1,0.85])(SIMPLEX_GRID([
	[0.1+0.15],
	[0.1+0.45,-0.4,1.6,-0.4,1.4,-0.4,0.95+0.1],
	[0.15]
	]));

//DRAW(pavimento_lat_sin_basso);

var pavimento_lat_des_basso = T([0])([8.7-0.15])(pavimento_lat_sin_basso);

//DRAW(pavimento_lat_des_basso);

var pavimento_retro_basso = T([0,1,2])([-4.4,5.8-0.15,0.85])(SIMPLEX_GRID([
	[0.1+0.95,-0.4,1.5,-0.4,0.75,-0.6,0.75,-0.4,1.5,-0.4,0.95+0.1],
	[0.1+0.15],
	[0.15]
	]));

//DRAW(pavimento_retro_basso);

var pavimento_basso = STRUCT([pavimento_facc_basso,pavimento_lat_sin_basso,pavimento_lat_des_basso,pavimento_retro_basso]);

var pavimento_facc_alto = T([0,1,2])([-(0.4+0.45+0.8+1.3+0.4+0.95),0.2,1])(SIMPLEX_GRID([
	[0.95,-0.4,1.3-0.05,-3.3-0.1,1.3-0.05,-0.4,0.95],
	[0.2],
	[0.25]
	]));

//DRAW(pavimento_facc_alto);

var pavimento_lat_sin_alto = T([0,1,2])([-4.3,0.2+0.2,1])(SIMPLEX_GRID([
	[0.15],
	[0.45-0.2,-0.4,1.6,-0.4,1.4,-0.4,0.95-0.15],
	[0.25]
	]));

//DRAW(pavimento_lat_sin_alto);

var pavimento_lat_des_alto = T([0])([8.6-0.15])(pavimento_lat_sin_alto);

//DRAW(pavimento_lat_des_alto)

var pavimento_retro_alto = T([0,1,2])([-4.3,5.6+0.2-0.15,1])(SIMPLEX_GRID([
	[0.95,-0.4,1.5,-0.4,0.75,-0.6,0.75,-0.4,1.5,-0.4,0.95],
	[0.15],
	[0.25]
	]));

//DRAW(pavimento_retro_alto);
var pavimento_alto = STRUCT([pavimento_facc_alto,pavimento_lat_sin_alto,pavimento_lat_des_alto,pavimento_retro_alto]);
var pavimento = STRUCT([pavimento_basso,pavimento_alto]);

//DRAW(pavimento);

var cornice_piccola = T([2])([1.25-0.57])(S([2])([0.67])((pavimento_basso)));

//DRAW(cornice_piccola);

var corpo_basso_muri = T([2])([-8.8+1.35])(SCALE([2])([8.8])(pavimento_alto));
//DRAW(corpo_basso_muri);

var corpo_basso_finestre_facc = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.3,-3.3,-1.3,0.4,-0.95],
	[0.2],
	[0.5,-1.15,1.2]
	]));

//DRAW(corpo_basso_finestre_facc);

var corpo_basso_finestre_retro = T([0,1,2])([-4.3,5.8-0.15,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.5,0.4,-0.75,-0.6,-0.75,0.4,-1.5,0.4,-0.95],
	[0.15],
	[0.5,-1.15,1.2]
	]));

//DRAW(corpo_basso_finestre_retro);

var corpo_basso_porta_retro = T([0,1,2])([-4.3,5.8-0.15,0.85+0.5])(SIMPLEX_GRID([
	[-0.95,0.4,-1.5,0.4,-0.75,0.6,-0.75,0.4,-1.5,0.4,-0.95],
	[0.15],
	[-1.15,1.2]
	]));
//DRAW(corpo_basso_porta_retro);

//var corpo_basso_retro = STRUCT([corpo_basso_finestre_retro,corpo_basso_porta_retro]);
//DRAW(corpo_basso_retro);


var corpo_basso_finestre_sin = T([0,1,2])([-4.3,0.2+0.2,0.85])(SIMPLEX_GRID([
	[0.15],
	[-0.45+0.2,0.4,-1.6,0.4,-1.4,0.4,-0.95+0.15],
	[0.5,-1.15,1.2]
	]));

//DRAW(corpo_basso_finestre_sin);

var corpo_basso_finestre_des = T([0])([8.6-0.15])(corpo_basso_finestre_sin);

//DRAW(corpo_basso_finestre_des);

var corpo_basso_finestre = STRUCT([corpo_basso_finestre_facc,corpo_basso_finestre_retro,corpo_basso_porta_retro,corpo_basso_finestre_sin,corpo_basso_finestre_des]);
//DRAW(corpo_basso_finestre);

var cornice_grande_facc = T([0,1,2])([-4.4,0.1,3.55])(SIMPLEX_GRID([
	[0.1+0.95+0.4+1.3,-(0.8+0.45+0.8+0.45+0.8),1.3+0.4+0.95+0.1],
	[0.1+0.2],
	[0.15]
	]));

//DRAW(cornice_grande_facc);

var cornice_grande_lat_sin = T([0,1,2])([-4.4,0.1,3.55])(SIMPLEX_GRID([
	[0.1+0.15],
	[0.1+0.45,0.4,1.6,0.4,1.4,0.4,0.95+0.1],
	[0.15]
	]));

//DRAW(cornice_grande_lat_sin);

var cornice_grande_lat_des = T([0])([8.7-0.15])(cornice_grande_lat_sin);

//DRAW(cornice_grande_lat_des);

var cornice_grande_retro = T([0,1,2])([-4.4,5.8-0.15,3.55])(SIMPLEX_GRID([
	[0.1+0.95,0.4,1.5,0.4,0.75,0.6,0.75,0.4,1.5,0.4,0.95+0.1],
	[0.15+0.15],
	[0.15]
	]));

//DRAW(cornice_grande_retro);

var cornice_grande = STRUCT([cornice_grande_facc,cornice_grande_lat_sin,cornice_grande_lat_des,cornice_grande_retro]);
//DRAW(cornice_grande);

var corpo_basso = COLOR([0.960,0.960,0.862])(STRUCT([pavimento,cornice_piccola,corpo_basso_muri,corpo_basso_finestre,cornice_grande]));

//DRAW(corpo_basso);

var corpo_alto_muri = T([2])([-3+1.35+2.35])(SCALE([2])([3])(pavimento_alto));

var corpo_alto_finestre_facc = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-0.95,0.4,-1.3,-3.3,-1.3,0.4,-0.95],
	[0.2],
	[0.175,-0.4,0.175]
	]));

//DRAW(corpo_alto_finestre_facc);

var corpo_alto_finestre_retro = T([0,1,2])([-4.3,5.8-0.15,3.7])(SIMPLEX_GRID([
	[-0.95,0.4,-1.5,0.4,-0.75,-0.6,-0.75,0.4,-1.5,0.4,-0.95],
	[0.15],
	[0.175,-0.4,0.175]
	]));

//DRAW(corpo_alto_finestre_retro);

var corpo_alto_finestre_sin = T([0,1,2])([-4.3,0.2+0.2,3.7])(SIMPLEX_GRID([
	[0.15],
	[-0.45+0.2,0.4,-1.6,0.4,-1.4,0.4,-0.95+0.15],
	[0.175,-0.4,0.175]
	]));

//DRAW(corpo_alto_finestre_sin);

var corpo_alto_finestre_des = T([0])([8.6-0.15])(corpo_alto_finestre_sin);

//DRAW(corpo_alto_finestre_des);

var corpo_alto_finestre = STRUCT([corpo_alto_finestre_facc,corpo_alto_finestre_retro,corpo_alto_finestre_sin,corpo_alto_finestre_des]);

//DRAW(corpo_alto_finestre);


var corpo_alto_porta_retro = T([0,1,2])([-0.3,5.8-0.15,3.7])(SIMPLEX_GRID([
	[0.6],
	[0.15],
	[0.75]
	]));

var cornice_alta = T([2])([4.45-2.84])(SCALE([2])([0.8])(cornice_grande));

//DRAW(cornice_alta);

var corpo_alto = COLOR([0.960,0.960,0.862])(STRUCT([corpo_alto_muri,corpo_alto_porta_retro,corpo_alto_finestre,cornice_alta]));

//DRAW(corpo_alto);

var pavimento_interno_avanti = T([0,1,2])([-4.3,0.2,3.55])(SIMPLEX_GRID([
	[2.45,-3.7,2.45],
	[5.6],
	[0.15]
	]));

var pavimento_interno_dietro = T([0,1,2])([-4.3,2,3.55])(SIMPLEX_GRID([
	[-2.45,3.7,-2.45],
	[3.8],
	[0.15]
	]));

var pavimento_interno = STRUCT([pavimento_interno_avanti,pavimento_interno_dietro]);
//DRAW(pavimento_interno);



var muri_interni_x1 = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[0.95,-0.4,1,-0.1,0.4,-0.25,0.9,-0.6,0.9,-0.25,0.4,-0.1,1,-0.4,0.95],
	[-1.8,0.1],
	[2.7]
	]));

var muri_interni_x2 = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-2.35-0.1,0.4,-0.25,0.05+0.1,-2.1,0.05+0.1,-0.25,0.4,-0.1,-2.35],
	[-3.25,0.1],
	[2.7]
	]));

var muri_interni_y1 = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-2.35,0.1,-3.7,0.1,-2.35],
	[4.25,-0.4,0.95],
	[2.7]
	]));

var muri_interni_y2 = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-(0.95+0.4+1.5+0.25+0.05),0.1,-2.1,0.1,-(0.95+0.4+1.5+0.25+0.05)],
	[-1.8,0.6,-0.4,0.5],
	[2.7]
	]));

var porte_interno_x = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1,0.1,-0.4,0.25,-0.9,0.6,-0.9,0.25,-0.4,0.1,-1,0.4,-0.95],
	[-1.8,0.1],
	[-1.2,1.5]
	]));

var porte_interno_y = T([0,1,2])([-4.3,0.2,0.85])(SIMPLEX_GRID([
	[-2.35,0.1,-3.7,0.1,-2.35],
	[-4.25,0.4,-0.95],
	[-1.2,1.5]
	]));

var porte_interno = STRUCT([porte_interno_x,porte_interno_y]);

var muri_interni = STRUCT([muri_interni_x1,muri_interni_x2,muri_interni_y1,muri_interni_y2,porte_interno]);
//DRAW(muri_interni);

var muri_interni_alti_x1 = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[0.95,-0.4,1,-0.1,0.4,-0.25,0.9,-0.6,0.9,-0.25,0.4,-0.1,1,-0.4,0.95],
	[-1.8,0.1],
	[0.75]
	]));

var muri_interni_alti_x2 = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-2.35-0.1,0.4,-0.25,0.05+0.1,-2.1,0.05+0.1,-0.25,0.4,-0.1,-2.35],
	[-3.25,0.1],
	[0.75]
	]));

var muri_interni_alti_y1 = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-2.35,0.1,-3.7,0.1,-2.35],
	[4.25,-0.4,0.95],
	[0.75]
	]));

var muri_interni_alti_y2 = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-(0.95+0.4+1.5+0.25+0.05),0.1,-2.1,0.1,-(0.95+0.4+1.5+0.25+0.05)],
	[-1.8,0.6,-0.4,0.5],
	[0.75]
	]));

var porte_interno_alto_x = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-0.95,0.4,-1,0.1,-0.4,0.25,-0.9,0.6,-0.9,0.25,-0.4,0.1,-1,0.4,-0.95],
	[-1.8,0.1],
	[-0.7,0.05]
	]));

var porte_interno_alto_y = T([0,1,2])([-4.3,0.2,3.7])(SIMPLEX_GRID([
	[-2.35,0.1,-3.7,0.1,-2.35],
	[-4.25,0.4,-0.95],
	[-0.7,0.05]
	]));

var porte_interno_alto = STRUCT([porte_interno_alto_x,porte_interno_alto_y]);

var muri_interni_alti = STRUCT([muri_interni_alti_x1,muri_interni_alti_x2,muri_interni_alti_y1,muri_interni_alti_y2,porte_interno_alto]);
//DRAW(muri_interni_alti);

var interno = COLOR([0.960,0.960,0.862])(STRUCT([pavimento_interno,muri_interni,muri_interni_alti]));

//DRAW(interno);

// facciata

var colonne_avanti_basi = T([0,2])([-2.15,0.85])(SIMPLEX_GRID([
	[0.5,-0.8,0.45,-0.8,0.45,-0.8,0.5],
	[0.3],
	[0.15,-1.7,0.15]
	]));

//DRAW(colonne_avanti_basi);

var colonne_avanti_corpo = T([0,1,2])([-2.15+0.05,0.05,0.85])(SIMPLEX_GRID([
	[0.4,-0.8-0.1,0.35,-0.8-0.1,0.35,-0.8-0.1,0.4],
	[0.2],
	[-0.15,1.7,-0.15]
	]));

//DRAW(colonne_avanti_corpo);

var colonne_avanti = STRUCT([colonne_avanti_basi,colonne_avanti_corpo]);
//DRAW(colonne_avanti);

var colonne_dietro_basi = T([0,1,2])([-1.95+0.1,1.8+0.1,0.85])(SIMPLEX_GRID([
	[0.2,-0.8,0.45,-0.8,0.45,-0.8,0.2],
	[0.1],
	[0.15,-1.7,0.15]
	]));

//DRAW(colonne_dietro_basi);

var colonne_dietro_corpo = T([0,1,2])([-1.95+0.1,1.8+0.1,0.85])(SIMPLEX_GRID([
	[0.15,-0.8-0.1,0.35,-0.8-0.1,0.35,-0.8-0.1,0.15],
	[0.1],
	[-0.15,1.7,-0.15]
	]));

//DRAW(colonne_dietro_corpo);

var colonne_lato_basi = T([0,1,2])([-1.85,0.4,0.85])(SIMPLEX_GRID([
	[0.1,-3.5,0.1],
	[0.25,-1.1,0.25],
	[0.15,-2.4,0.15]
	]));

//DRAW(colonne_lato_basi);

var colonne_lato_corpo = T([0,1,2])([-1.85,0.4,0.85])(SIMPLEX_GRID([
	[0.1,-3.5,0.1],
	[0.2,-1.1-0.1,0.2],
	[-0.15,2.4,-0.15]
	]));

//DRAW(colonne_lato_corpo);

var colonne_interne = COLOR([0.960,0.960,0.862])(STRUCT([colonne_dietro_basi,colonne_dietro_corpo,colonne_lato_basi,colonne_lato_corpo]));
//DRAW(colonne_interne);

var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,30,1]);
var controlpoints = [[-0.45,0,2.85],[ -0.22,0,3.3],[ 0.22,0,3.3],[0.45,0,2.85]];
var arco = BEZIER(S0)(controlpoints);

var controlpoints2 = [[-0.45,0.2,2.85],[ -0.22,0.2,3.3],[ 0.22,0.2,3.3],[0.45,0.2,2.85]];
var arco_interno = BEZIER(S0)(controlpoints2);
//DRAW(arco_interno);

var controlpoints_dietro = [[-0.45,0.05,2.85],[ -0.22,0.05,3.3],[ 0.22,0.05,3.3],[0.45,0.05,2.85]];
var arco_dietro = BEZIER(S0)(controlpoints_dietro);
//DRAW(arco2_dietro);

var archi = BEZIER(S1)([arco, arco_interno]);
var arco_sup = MAP(archi)(domain2);
//DRAW(arco2_surf);

var controlpoints_copia = [[-0.45,0,2.85+0.5],[ -0.22,0,3.3+0.5],[ 0.22,0,3.3+0.5],[0.45,0,2.85+0.5]];
var arco_copia = BEZIER(S0)(controlpoints_copia);
//var arco_sup_copia = MAP(arco_copia)(domain);
//DRAW(arco2_sup_copia);


var controlpoints2_copia = [[-0.45,0.2,2.85+0.5],[ -0.22,0.2,3.3+0.5],[ 0.22,0.2,3.3+0.5],[0.45,0.2,2.85+0.5]];
var arco_interno_copia = BEZIER(S0)(controlpoints2_copia);
//var arco_interno_sup_copia = MAP(arco_interno_copia)(domain);
//DRAW(arco2_interno_sup_copia);

var copia = BEZIER(S1)([arco_copia,arco_interno_copia]);
var super_copia = MAP(copia)(domain2);
//DRAW(super_copia);

var bezier = BEZIER(S2)([archi,copia]);
var superficie = T([1])([0.05])(MAP(bezier)(domain3));
//DRAW(superficie);

var arco1_copia = T([0])([-1.25])(superficie);
//DRAW(arco1_copia);

var arco3_copia = T([0])([1.25])(superficie);
//DRAW(arco3_copia);

var arco_dietro_b = BEZIER(S1)([arco,arco_dietro]);
var arco_dietro_sup = T([1])([1.9])(MAP(arco_dietro_b)(domain2));
//DRAW(arco_dietro_sup);

var arco_dietro_sin = T([0,1])([-1.25,1.9])(MAP(arco_dietro_b)(domain2));
//DRAW(arco_dietro_sin);
 
var arco_dietro_des = T([0,1])([1.25,1.9])(MAP(arco_dietro_b)(domain2));
//DRAW(arco_dietro_des);

//var archi_dietro = STRUCT([arco_dietro_sup,arco_dietro_sin,arco_dietro_des]);
//DRAW(archi_dietro);

var facciata_sup = T([0,1,2])([-2.15+0.05,0.05,3.3])(SIMPLEX_GRID([
	[4.2],
	[0.2],
	[1.2]
	]));

//DRAW(facciata_sup);

var facciata_inf = T([0,1,2])([-2.15+0.05,0.05,2.85])(SIMPLEX_GRID([
	[0.4,-0.8-0.1,0.35,-0.8-0.1,0.35,-0.8-0.1,0.4],
	[0.2],
	[1.65]
	]));

//DRAW(facciata_inf);

var struttura_archi = STRUCT([superficie,arco1_copia,arco3_copia,facciata_inf]);
//DRAW(struttura_archi);

var facciata_lati = T([0,1,2])([-2.15+0.05,-0.1+0.05,0.85])(SIMPLEX_GRID([
	[0.05,-0.3,0.05,-3.25,0.05,-0.3,0.05],
	[0.3],
	[3.6]
	]));

//DRAW(facciata_lati);

var cornicione_sup_facc = T([0,1,2])([-2.15,-0.05,3.55])(SIMPLEX_GRID([
	[4.3],
	[0.1+0.2],
	[0.15,-0.75,0.12]
	]));

//DRAW(cornicione_sup_facc);

var points = [[-0.075,0,0],[-0.125,0,0.35],[0.125,0,0.35],[0.075,0,0],[-0.075,0,0]];
var cells = [[0,1,2],[1,3,2],[2,3,4]];
var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
//DRAW(simplicialComplex);

var segm = [[-0.075,0,0],[-0.075,-0.15,0],[0.075,-0.15,0],[0.075,0,0],[-0.075,0,0]];

var simplicialComplex_segm = SIMPLICIAL_COMPLEX(segm)(cells);
//DRAW(simplicialComplex_segm);

var points_lat_seg_1 = [[-0.075,0,0],[-0.125,0,0.35],[-0.125,-0.15,0.35],[-0.075,-0.15,0],[-0.075,0,0]];

var simplicialComplex_lat_seg_1 = SIMPLICIAL_COMPLEX(points_lat_seg_1)(cells);
//DRAW(simplicialComplex_lat_seg_1);

var points_lat_seg_2 = [[0.075,0,0],[0.125,0,0.35],[0.125,-0.15,0.35],[0.075,-0.15,0],[0.075,0,0]];

var simplicialComplex_lat_seg_2 = SIMPLICIAL_COMPLEX(points_lat_seg_2)(cells);
//DRAW(simplicialComplex_lat_seg_2);

var decorazione = STRUCT([simplicialComplex_segm,simplicialComplex_lat_seg_1,simplicialComplex_lat_seg_2,T([1])([-0.15])(simplicialComplex)]);

var decorazioni = T([1])([0.1])(STRUCT([T([2])([3.2]),decorazione,T([0])([-1.25]),decorazione,T([0])([2.5]),decorazione]));
//DRAW(decorazioni);

// loggia

var controlpoints_dietro = [[-0.45,1.9,2.85],[ -0.22,1.9,3.3],[ 0.22,1.9,3.3],[0.45,1.9,2.85]];
var arco_dietro = BEZIER(S0)(controlpoints_dietro);
//var arco_dietro_sup = MAP(arco_dietro)(domain);
//DRAW(arco_dietro_sup);

var controlpoints2_dietro = [[-0.45,1.9+0.1,2.85],[ -0.22,1.9+0.1,3.3],[ 0.22,1.9+0.1,3.3],[0.45,1.9+0.1,2.85]];
var arco_interno_dietro = BEZIER(S0)(controlpoints2_dietro);
//var arco_interno_dietro_sup = MAP(arco_interno_dietro)(domain);
//DRAW(arco_interno_dietro_sup);

var controlpoints_copia_dietro = [[-0.45-0.05,1.9,2.85],[ -0.22-0.05,1.9,3.3],[ 0.22+0.05,1.9,3.3],[0.45+0.05,1.9,2.85]];
var arco_copia_dietro = BEZIER(S0)(controlpoints_copia_dietro);
//var a = MAP(arco_copia_dietro)(domain);

var archi_dietro = BEZIER(S1)([arco_dietro, arco_copia_dietro]);
//var archi_dietro_sup = MAP(archi_dietro)(domain2);
//DRAW(archi_dietro_sup);

var controlpoints2_copia_dietro = [[-0.45-0.05,1.9+0.1,2.85],[ -0.22-0.05,1.9+0.1,3.3],[ 0.22+0.05,1.9+0.1,3.3],[0.45+0.05,1.9+0.1,2.85]];
var arco_interno_copia_dietro = BEZIER(S0)(controlpoints2_copia_dietro);
//var b = MAP(arco_interno_copia_dietro)(domain);


var copia_dietro = BEZIER(S1)([arco_interno_dietro,arco_interno_copia_dietro]);
//var super_copia_dietro = MAP(copia_dietro)(domain2);
//DRAW(super_copia_dietro);

var bezier_dietro = BEZIER(S2)([archi_dietro,copia_dietro]);
var arco2_dietro = T([1])([0.05])(MAP(bezier_dietro)(domain3));

//DRAW(arco2_dietro);

var arco1_dietro = T([0])([-1.25])(arco2_dietro);
var arco3_dietro = T([0])([1.25])(arco2_dietro);

var struttura_archi_dietro = STRUCT([arco2_dietro,arco1_dietro,arco3_dietro]);
//DRAW(struttura_archi_dietro);


//arco sinistro

var cp_archi_lat = [[0.1,0.65-0.05,3.55],[0.1,0.55-0.05,4],[0.1,1.65+0.05,4],[0.1,1.75+0.05,3.55]];
var bezier_arco_lat = BEZIER(S0)(cp_archi_lat);
//var arco_lat = T([0])([-1.95])(MAP(bezier_arco_lat)(domain));
//DRAW(arco_lat);

var cp_archi_interni_lat = [[0.2,0.65-0.05,3.55],[0.2,0.55-0.05,4],[0.2,1.65+0.05,4],[0.2,1.75+0.05,3.55]];
var bezier_arco_interno_lat = BEZIER(S0)(cp_archi_interni_lat);
//var arco_interno_lat = T([0])([-1.95])(MAP(bezier_arco_interno_lat)(domain));
//DRAW(arco_interno_lat);

var cp_copia_archi_lat = [[0.1,0.65-0.05-0.2,3.55],[0.1,0.55-0.05-0.2,4+0.1+0.2],[0.1,1.65+0.05+0.2,4+0.1+0.2],[0.1,1.75+0.05+0.2,3.55]];
var bezier_copia_arco_lat = BEZIER(S0)(cp_copia_archi_lat);

var cp_copia_archi_interni_lat = [[0.2,0.65-0.05-0.2,3.55],[0.2,0.55-0.05-0.2,4+0.1+0.2],[0.2,1.65+0.05+0.2,4+0.1+0.2],[0.2,1.75+0.05+0.2,3.55]];
var bezier_copia_archi_interni_lat = BEZIER(S0)(cp_copia_archi_interni_lat);

var sup_archi_interni_lat = BEZIER(S1)([bezier_arco_lat,bezier_arco_interno_lat]);
var sup_copia_archi_interni_lat = BEZIER(S1)([bezier_copia_arco_lat,bezier_copia_archi_interni_lat]);

var arco_interno_laterale = BEZIER(S2)([sup_archi_interni_lat,sup_copia_archi_interni_lat]);
var arco_lat_sin = T([0])([-1.95])(MAP(arco_interno_laterale)(domain3));
//DRAW(arco_lat_sin);

//arco destro

var cp_archi_lat_des = [[3.7,0.65-0.05,3.55],[3.7,0.55-0.05,4],[3.7,1.65+0.05,4],[3.7,1.75+0.05,3.55]];
var bezier_arco_lat_des = BEZIER(S0)(cp_archi_lat_des);
//var arco_lat = T([0])([-1.95])(MAP(bezier_arco_lat)(domain));
//DRAW(arco_lat);

var cp_archi_interni_lat_des = [[3.8,0.65-0.05,3.55],[3.8,0.55-0.05,4],[3.8,1.65+0.05,4],[3.8,1.75+0.05,3.55]];
var bezier_arco_interno_lat_des = BEZIER(S0)(cp_archi_interni_lat_des);
//var arco_interno_lat = T([0])([-1.95])(MAP(bezier_arco_interno_lat)(domain));
//DRAW(arco_interno_lat);

var sup_archi_interni_lat_des = BEZIER(S1)([bezier_arco_lat_des,bezier_arco_interno_lat_des]);

var cp_copia_archi_lat_des = [[3.7,0.65-0.05-0.2,3.55],[3.7,0.55-0.05-0.2,4+0.3],[3.7,1.65+0.05+0.2,4+0.3],[3.7,1.75+0.05+0.2,3.55]];
var bezier_copia_arco_lat_des = BEZIER(S0)(cp_copia_archi_lat_des);

var cp_copia_archi_interni_lat_des = [[3.8,0.65-0.05-0.2,3.55],[3.8,0.55-0.05-0.2,4+0.3],[3.8,1.65+0.05+0.2,4+0.3],[3.8,1.75+0.05+0.2,3.55]];
var bezier_copia_archi_interni_lat_des = BEZIER(S0)(cp_copia_archi_interni_lat_des);

var sup_copia_archi_interni_lat_des = BEZIER(S1)([bezier_copia_arco_lat_des,bezier_copia_archi_interni_lat_des]);

var arco_interno_laterale_des = BEZIER(S2)([sup_archi_interni_lat_des,sup_copia_archi_interni_lat_des]);
var arco_lat_des = T([0])([-1.95])(MAP(arco_interno_laterale_des)(domain3));
//DRAW(arco_lat_des);

var volta = T([0])([-1.95])(MAP(BEZIER(S1)([sup_copia_archi_interni_lat,sup_copia_archi_interni_lat_des]))(domain2));
//DRAW(volta);

var loggia = COLOR([0.960,0.960,0.862])(STRUCT([struttura_archi_dietro,arco_lat_sin,arco_lat_des,volta,colonne_interne]));
//DRAW(loggia);

var cornice_piccola_tetto_x = T([0,2])([-4.45,4.57])(SIMPLEX_GRID([
	[8.9],
	[0.05,-5.8,0.05],
	[0.05]
]));

//DRAW(cornice_piccola_tetto_x);

var cornice_piccola_tetto_y =T([0,2])([-4.45,4.57])(SIMPLEX_GRID([
	[0.05,-8.8,0.05],
	[5.9],
	[0.05]
])); 

//DRAW(cornice_piccola_tetto_y);

var cornice_piccola_tetto = STRUCT([cornice_piccola_tetto_x,cornice_piccola_tetto_y]);
//DRAW(cornice_piccola_tetto);

var cornice_media_tetto_x = T([0,1,2])([-4.45-0.03,-0.03,4.57+0.05])(SIMPLEX_GRID([
	[0.03+0.03+8.9],
	[0.03,-5.9,0.03],
	[0.04]
]));

//DRAW(cornice_media_tetto_x);

var cornice_media_tetto_y = T([0,1,2])([-4.45-0.03,-0.03,4.57+0.05])(SIMPLEX_GRID([
	[0.03,-8.9,0.03],
	[5.9+0.06],
	[0.04]
])); 

//DRAW(cornice_media_tetto_y);

var cornice_media_tetto = STRUCT([cornice_media_tetto_x,cornice_media_tetto_y]);
//DRAW(cornice_piccola_tetto);

var cornice_grande_tetto_x = T([0,1,2])([-4.45-0.03-0.04,-0.07,4.57+0.05+0.04])(SIMPLEX_GRID([
	[9.04],
	[0.04,-5.96,0.04],
	[0.03]
]));

//DRAW(cornice_grande_tetto_x);

var cornice_grande_tetto_y = T([0,1,2])([-4.45-0.03-0.04,-0.07,4.57+0.05+0.04])(SIMPLEX_GRID([
	[0.04,-8.96,0.04],
	[5.9+0.06+0.08],
	[0.03]
])); 

//DRAW(cornice_grande_tetto_y);

var cornice_grande_tetto = STRUCT([cornice_grande_tetto_x,cornice_grande_tetto_y]);
//DRAW(cornice_grande_tetto);


var cornice_tetto = COLOR([0.960,0.960,0.862])(T([1])([0.05])(STRUCT([cornice_piccola_tetto,cornice_media_tetto,cornice_grande_tetto])));

//DRAW(cornice_tetto);

var points_triangolo_sin = [[-4.53,0,0],[-4.53,6.06,0],[-2.8,3.03,1.1],[-4.53,0,0]];
var cells_tr = [[0,1,2],[1,3,2]];
var simplicialComplex_triangolo_sin = SIMPLICIAL_COMPLEX(points_triangolo_sin)(cells_tr);
//DRAW(simplicialComplex_triangolo_sin);

var points_triangolo_des = [[4.53,0,0],[4.53,6.06,0],[2.8,3.03,1.1],[4.53,0,0]];
var simplicialComplex_triangolo_des = SIMPLICIAL_COMPLEX(points_triangolo_des)(cells_tr);
//DRAW(simplicialComplex_triangolo_des);

var points_trapezio_avanti = [[-4.53,0,0],[-2.8,3.03,1.1],[2.8,3.03,1.1],[4.53,0,0],[-4.53,0,0]];
var simplicialComplex_trapezio_avanti = SIMPLICIAL_COMPLEX(points_trapezio_avanti)(cells);
//DRAW(simplicialComplex_trapezio_avanti);

var points_trapezio_dietro = [[-4.53,6.06,0],[-2.8,3.03,1.1],[2.8,3.03,1.1],[4.53,6.06,0],[-4.53,6.06,0]];
var simplicialComplex_trapezio_dietro = SIMPLICIAL_COMPLEX(points_trapezio_dietro)(cells);
//DRAW(simplicialComplex_trapezio_dietro);

var sottotetto = T([1,2])([0,4.69])(STRUCT([simplicialComplex_triangolo_sin,simplicialComplex_triangolo_des,simplicialComplex_trapezio_avanti,simplicialComplex_trapezio_dietro]));
//DRAW(sottotetto);

var tetto_sopra = T([2])([0.03])(sottotetto);
//DRAW(tetto_sopra);

var points_bordo_lat = [[-4.53,0,0],[-4.53,6.06,0],[-4.53,6.06,0.03],[-4.53,0,0.03],[-4.53,0,0]];
var simplicialComplex_bordo_lat = SIMPLICIAL_COMPLEX(points_bordo_lat)(cells);
//DRAW(simplicialComplex_bordo_lat);

var points_bordo_avanti = [[-4.53,0,0],[4.53,0,0],[4.53,0,0.03],[-4.53,0,0.03],[-4.53,0,0]];
var simplicialComplex_bordo_avanti = SIMPLICIAL_COMPLEX(points_bordo_avanti)(cells);
//DRAW(simplicialComplex_bordo_avanti);

var bordo = T([2])([4.69])(STRUCT([simplicialComplex_bordo_lat,simplicialComplex_bordo_avanti,
	T([1])([6.06])(simplicialComplex_bordo_avanti),T([0])([9.06])(simplicialComplex_bordo_lat)]));
//DRAW(bordo);

var points_triangolo_facc_sin = [[-2.65,0,0],[0,3.03,1.1],[0,0,1.5],[-2.65,0,0]];
var cells_tr = [[0,1,2],[1,3,2]];
var simplicialComplex_triangolo_facc_sin = SIMPLICIAL_COMPLEX(points_triangolo_facc_sin)(cells_tr);
//DRAW(simplicialComplex_triangolo_facc_sin);

var points_triangolo_facc_des = [[2.65,0,0],[0,3.03,1.1],[0,0,1.5],[2.65,0,0]];
var cells_tr = [[0,1,2],[1,3,2]];
var simplicialComplex_triangolo_facc_des = SIMPLICIAL_COMPLEX(points_triangolo_facc_des)(cells_tr);
//DRAW(simplicialComplex_triangolo_facc_des);

var points_aggiunta_sin = [[-2.65,0,0],[0,0,1.5],[0,-0.2,1.5],[-2.65,-0.2,0],[-2.65,0,0]];
var simplicialComplex_aggiunta_sin = SIMPLICIAL_COMPLEX(points_aggiunta_sin)(cells);
//DRAW(simplicialComplex_aggiunta_sin);

var points_aggiunta_des = [[2.65,0,0],[0,0,1.5],[0,-0.2,1.5],[2.65,-0.2,0],[2.65,0,0]];
var simplicialComplex_aggiunta_des = SIMPLICIAL_COMPLEX(points_aggiunta_des)(cells);
//DRAW(simplicialComplex_aggiunta_des);

var sotto = STRUCT([simplicialComplex_triangolo_facc_sin,simplicialComplex_triangolo_facc_des,simplicialComplex_aggiunta_sin,simplicialComplex_aggiunta_des]);
//DRAW(sotto);

var sopra = T([2])([0.03])(sotto);
//DRAW(sopra);

var points_bordo_lat_facc_sin = [[-2.65,-0.2,0],[0,-0.2,1.5],[0,-0.2,1.5+0.03],[-2.65,-0.2,0.03],[-2.65,-0.2,0]];
var simplicialComplex_bordo_lat_facc_sin = SIMPLICIAL_COMPLEX(points_bordo_lat_facc_sin)(cells);
//DRAW(simplicialComplex_bordo_lat_facc_sin); 

var points_bordo_lat_facc_des = [[2.65,-0.2,0],[0,-0.2,1.5],[0,-0.2,1.5+0.03],[2.65,-0.2,0.03],[2.65,-0.2,0]];
var simplicialComplex_bordo_lat_facc_des = SIMPLICIAL_COMPLEX(points_bordo_lat_facc_des)(cells);
//DRAW(simplicialComplex_bordo_lat_facc_des);

var points_bordo_angolo_sin = [[-2.65,0,0],[-2.65,0,0.03],[-2.65,-0.2,0.03],[-2.65,-0.2,0],[-2.65,0,0]];
var simplicialComplex_bordo_angolo_sin = SIMPLICIAL_COMPLEX(points_bordo_angolo_sin)(cells);
//DRAW(simplicialComplex_bordo_angolo_sin); 

var points_bordo_angolo_des = [[2.65,0,0],[2.65,0,0.03],[2.65,-0.2,0.03],[2.65,-0.2,0],[2.65,0,0]];
var simplicialComplex_bordo_angolo_des = SIMPLICIAL_COMPLEX(points_bordo_angolo_des)(cells);
//DRAW(simplicialComplex_bordo_angolo_des); 

var points_triangolo_facc_centrale = [[-2.65,-0.1,0],[0,-0.1,1.5],[2.65,-0.1,0],[-2.65,-0.1,0]];
var simplicialComplex_triangolo_facc_centrale = SIMPLICIAL_COMPLEX(points_triangolo_facc_centrale)(cells_tr);
//DRAW(simplicialComplex_triangolo_facc_centrale);

var points_bombatura_sin = [[-2.65,-0.2,0.03],[0,-0.2,1.5+0.03],[0,-0.2,1.41],[-2.65+0.12,-0.2,0],[-2.65,-0.2,0.03]];
var bombatura_sin = SIMPLICIAL_COMPLEX(points_bombatura_sin)(cells);
//DRAW(bombatura_sin);

var bombatura_sin_spess = T([1])([0.1])(bombatura_sin);
//DRAW(bombatura_sin_spess);

var points_bombatura_sin_sotto = [[-2.65+0.12,-0.2+0.1,0],[0,-0.2+0.1,1.5-0.12+0.03],[0,-0.2,1.5-0.12+0.03],[-2.65+0.12,-0.2,0],[-2.65+0.12,-0.2+0.1,0]];
var bombatura_sin_sotto = SIMPLICIAL_COMPLEX(points_bombatura_sin_sotto)(cells);
//DRAW(bombatura_sin_sotto);

var points_bombatura_sin_lato = [[-2.65,-0.2,0.03],[-2.65+0.12,-0.2,0],[-2.65+0.12,-0.2+0.1,0],[-2.65,-0.2+0.1,0.03],[-2.65,-0.2,0.03]];
var bombatura_sin_lato = SIMPLICIAL_COMPLEX(points_bombatura_sin_lato)(cells);
//DRAW(bombatura_sin_lato);

var points_bombatura_des = [[2.65,-0.2,0.03],[0,-0.2,1.5+0.03],[0,-0.2,1.41],[2.65-0.12,-0.2,0],[2.65,-0.2,0.03]];
var bombatura_des = SIMPLICIAL_COMPLEX(points_bombatura_des)(cells);
//DRAW(bombatura_des);

var bombatura_des_spess = T([1])([0.1])(bombatura_des);
//DRAW(bombatura_des_spess);

var points_bombatura_des_sotto = [[2.65-0.12,-0.2+0.1,0],[0,-0.2+0.1,1.5-0.12+0.03],[0,-0.2,1.5-0.12+0.03],[2.65-0.12,-0.2,0],[2.65-0.12,-0.2+0.1,0]];
var bombatura_des_sotto = SIMPLICIAL_COMPLEX(points_bombatura_des_sotto)(cells);
//DRAW(bombatura_des_sotto);

var points_bombatura_des_lato = [[2.65,-0.2,0.03],[2.65-0.12,-0.2,0],[2.65-0.12,-0.2+0.1,0],[2.65,-0.2+0.1,0.03],[2.65,-0.2,0.03]];
var bombatura_des_lato = SIMPLICIAL_COMPLEX(points_bombatura_des_lato)(cells);
//DRAW(bombatura_des_lato);

var bombature = STRUCT([bombatura_sin,bombatura_sin_spess,bombatura_sin_sotto,
	bombatura_sin_lato,bombatura_des,bombatura_des_spess,bombatura_des_sotto,bombatura_des_lato]);
//DRAW(bombature);	

var tetto_facc = T([2])([4.69])(STRUCT([sotto,sopra,simplicialComplex_bordo_lat_facc_sin,simplicialComplex_bordo_lat_facc_des,
	simplicialComplex_bordo_angolo_des,simplicialComplex_bordo_angolo_sin]));

var tetto = COLOR([0.698,0.133,0.133])(STRUCT([tetto_sopra,sottotetto,bordo,tetto_facc]));
//DRAW(tetto);

var triangolo_facc = T([2])([4.69])(STRUCT([bombature,simplicialComplex_triangolo_facc_centrale]));
//DRAW(triangolo_facc);

var cornice_piccola_tetto_facc = T([0,2])([-2.5,4.57])(SIMPLEX_GRID([
	[5],
	[0.05],
	[0.05]
]));

//DRAW(cornice_piccola_tetto_facc);

var cornice_media_tetto_facc = T([0,1,2])([-2.5-0.03,-0.03,4.57+0.05])(SIMPLEX_GRID([
	[5+0.03+0.03],
	[0.03],
	[0.04]
]));

//DRAW(cornice_media_tetto_facc);

var cornice_grande_tetto_facc = T([0,1,2])([-2.5-0.03-0.04,-0.07,4.57+0.05+0.04])(SIMPLEX_GRID([
	[5+0.06+0.08],
	[0.04],
	[0.03]
]));

//DRAW(cornice_grande_tetto_facc);

var cornice_facc = STRUCT([cornice_piccola_tetto_facc,cornice_media_tetto_facc,cornice_grande_tetto_facc]);

var cornici_facc = COLOR([0.960,0.960,0.862])(STRUCT([cornice_piccola_tetto,cornice_media_tetto,cornice_grande_tetto]));
//DRAW(cornici_facc);

var finestre_retro = T([0,1,2])([-4.3,5.8-0.05,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.5,0.4,-0.75,-0.6,-0.75,0.4,-1.5,0.4,-0.95],
	[0.01],
	[-0.5,1.15,-1.2]
	]));
//DRAW(finestre_retro);

var finestre_retro_sopra = T([0,1,2])([-4.3,5.8-0.05,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.5,0.4,-0.75,-0.6,-0.75,0.4,-1.5,0.4,-0.95],
	[0.01],
	[-2.85,-0.175,0.4,-0.175]
	]));
//DRAW(finestre_retro_sopra);

var finestre_facc = T([0,1,2])([-4.3,0.2+0.05,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.3,-3.3,-1.3,0.4,-0.95],
	[0.01],
	[-0.5,1.15,-1.2]
	]));
//DRAW(finestre_facc);

var finestre_facc_sopra = T([0,1,2])([-4.3,0.2+0.05,0.85])(SIMPLEX_GRID([
	[-0.95,0.4,-1.3,-3.3,-1.3,0.4,-0.95],
	[0.01],
	[-2.85,-0.175,0.4,-0.175]
	]));
//DRAW(finestre_facc_sopra);

var finestre_sin = T([0,1,2])([-4.3+0.05,0.2+0.2,0.85])(SIMPLEX_GRID([
	[0.01],
	[-0.45+0.2,0.4,-1.6,0.4,-1.4,0.4,-0.95+0.15],
	[-0.5,1.15,-1.2]
	]));
//DRAW(finestre_sin);

var finestre_sin_sopra = T([0,1,2])([-4.3+0.05,0.2+0.2,0.85])(SIMPLEX_GRID([
	[0.01],
	[-0.45+0.2,0.4,-1.6,0.4,-1.4,0.4,-0.95+0.15],
	[-2.85,-0.175,0.4,-0.175]
	]));
//DRAW(finestre_sin_sopra);

var finestre_des = T([0])([8.6-0.15+0.05])(finestre_sin);
//DRAW(finestre_des);

var finestre_des_sopra = T([0])([8.6-0.15+0.05])(finestre_sin_sopra);
//DRAW(finestre_des_sopra);

var finestre_sopra = COLOR([0.588,0.294,0])(STRUCT([finestre_facc_sopra,finestre_retro_sopra,finestre_sin_sopra,finestre_des_sopra]));

var finestre_bas = T([0,1])([-4.3,0.06])(SIMPLEX_GRID([
	[-0.95,0.4,-5.9,0.4,-0.95],
	[0.01],
	[-0.35,0.2]
	]));
//DRAW(finestre_bas);

var finestre = STRUCT([COLOR([0.678,0.847,0.901,0.5])(STRUCT([finestre_facc,finestre_sin,finestre_des,finestre_retro])),COLOR([0.588,0.294,0])(finestre_bas),finestre_sopra]);
//DRAW(finestre);

var facciata = COLOR([0.960,0.960,0.862])(STRUCT([cornice_facc,triangolo_facc,colonne_avanti,facciata_sup,struttura_archi,cornicione_sup_facc,decorazioni]));
//DRAW(facciata);

var corpo = (STRUCT([basamento,cornici_facc,corpo_basso,corpo_alto,interno,facciata,loggia,cornice_tetto]));
var villa = STRUCT([corpo,finestre,tetto]);
DRAW(villa);