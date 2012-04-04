//2D model of the floor plan of the Barcelona Pavilion

var pavimento = POLYLINE([[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]]);

var piscina1 = POLYLINE([[1,1],[1,10],[21,10],[21,1],[1,1]]);
var piscina2 = POLYLINE([[47,5],[47,16],[51,16],[51,5],[47,5]]);

var piscine = STRUCT([piscina1, piscina2]);

//i pilastri

var pil11 = POLYLINE([[25.8,7],[26.2,7]]);
var pil12 = POLYLINE([[26,6.8],[26,7.2]]);
var pil1 = STRUCT([pil11, pil12]);

var pil21 = POLYLINE([[25.8,14],[26.2,14]]);
var pil22 = POLYLINE([[26,13.8],[26,14.2]]);
var pil2 = STRUCT([pil21, pil22]);

var pil31 = POLYLINE([[32.13,7],[32.53,7]]);
var pil32 = POLYLINE([[32.33,6.8],[32.33,7.2]]);
var pil3 = STRUCT([pil31, pil32]);

var pil41 = POLYLINE([[32.13,14],[32.53,14]]);
var pil42 = POLYLINE([[32.33,13.8],[32.33,14.2]]);
var pil4 = STRUCT([pil41, pil42]);

var pil51 = POLYLINE([[38.46,7],[38.86,7]]);
var pil52 = POLYLINE([[38.66,6.8],[38.66,7.2]]);
var pil5 = STRUCT([pil51, pil52]);

var pil61 = POLYLINE([[38.46,14],[38.86,14]]);
var pil62 = POLYLINE([[38.66,13.8],[38.66,14.2]]);
var pil6 = STRUCT([pil61, pil62]);

var pil71 = POLYLINE([[44.79,7],[45.19,7]]);
var pil72 = POLYLINE([[44.99,6.8],[44.99,7.2]]);
var pil7 = STRUCT([pil71, pil72]);

var pil81 = POLYLINE([[44.79,14],[45.19,14]]);
var pil82 = POLYLINE([[44.99,13.8],[44.99,14.2]]);
var pil8 = STRUCT([pil81, pil82]);

var pilastri = STRUCT([pil1, pil2, pil3, pil4, pil5, pil6, pil7, pil8]);

//le scale
var scala = POLYLINE([[36,1],[36,4],[39,4],[39,1],[36,1]]);
var gradino0 = POLYLINE([[36.375,1],[36.375,4]]);
var gradino1 = POLYLINE([[36.75,1],[36.75,4]]);
var gradino2 = POLYLINE([[37.125,1],[37.125,4]]);
var gradino3 = POLYLINE([[37.5,1],[37.5,4]]);
var gradino4 = POLYLINE([[37.875,1],[37.875,4]]);
var gradino5 = POLYLINE([[38.25,1],[38.25,4]]);
var gradino6 = POLYLINE([[38.625,1],[38.625,4]]);
var gradino7 = POLYLINE([[39,1],[39,4]]);

var scale = STRUCT([scala, gradino0, gradino1, gradino2, gradino3, gradino4, gradino5, gradino6, gradino7]);

//vetri
var div1 = POLYLINE([[1,17],[9,17]]);
var div2 = POLYLINE([[5,17],[5,18]]);
var div3 = POLYLINE([[5,19],[5,22]]);
var div4 = POLYLINE([[5,20.8],[6,20.8]]);
var div5 = POLYLINE([[6.8,20.8],[9,20.8]]);
var div6 = POLYLINE([[7,21.8],[7,22]]);
var div7 = POLYLINE([[30,13.7],[40,13.7]]);
var div8 = POLYLINE([[31,7.4],[31,13.7],[32,13.7],[32,7.4],[31,7.4]]);
var div9 = POLYLINE([[44.8,6.9],[44.8,14]]);
var div10 = POLYLINE([[30,5],[41.3,5]]);

var vetro = STRUCT([div1, div2, div3, div4, div5, div6, div7, div8, div9, div10]);

//muri
var sep1 = POLYLINE([[6.5,15],[26.5,15]]);
var sep2 = POLYLINE([[25,7.4],[34,7.4]]);
var sep3 = POLYLINE([[37.2,11.5],[42.5,11.5]]);
var sep4 = POLYLINE([[9,16.8],[9,18.5]]);
var sep5 = POLYLINE([[9,20.4],[9,22]]);
var sep6 = POLYLINE([[9,22],[1,22],[1,0],[7.7,0]]);
var sep7 = POLYLINE([[41.3,5],[51,5],[51,16],[37.7,16]]);

var muro = STRUCT([sep1, sep2, sep3, sep4, sep5, sep6, sep7]);

//panchina
var panchina = POLYLINE([[7,14],[7,14.7],[22,14.7],[22,14],[7,14]]);

var pianta = STRUCT([pavimento, piscine, pilastri, scale, vetro, muro, panchina]);
DRAW(pianta);