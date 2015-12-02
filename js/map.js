$(document).ready(function () {
	  window.addEventListener('load', function(){TenerifeMap()}, false); //true means that this request will be ignored if auto is set to off
});

function TenerifeMap(){

var rsr = Raphael('map', '800', '800');
var regions = [];


var Capa_x0020_1 = rsr.set();
Capa_x0020_1.attr({'id': 'Capa_x0020_1','name': 'Capa_x0020_1'});
var _377625336608 = rsr.set();
_377625336608.attr({'id': '_377625336608','parent': 'Capa_x0020_1','name': '_377625336608'});
var _672759287184 = rsr.set();
_672759287184.attr({'id': '_672759287184','parent': 'Capa_x0020_1','name': '_672759287184'});
var _76635586768 = rsr.set();


var la_orotava = rsr.path("M405 270l2 8c-11,4 -12,-1 -15,7 -4,7 -8,4 -17,4 -7,15 -7,10 -4,29 4,28 3,26 1,53 -1,8 -2,8 -5,14 -4,7 -3,6 -12,8 -6,2 -14,6 -16,2l-1 -8c-1,-4 -1,-8 -1,-11 -6,1 -9,5 -17,6 -14,3 -33,7 -47,11 -4,1 -4,3 -5,7 -2,6 -4,11 -7,17 -1,5 -5,11 -7,16 -2,6 4,33 4,41 3,1 6,3 9,4 4,2 5,5 8,6 1,2 19,3 23,2 3,-2 6,-4 8,-6 5,-2 2,-5 6,-8 5,-2 16,-3 22,-6 2,-1 10,-11 12,-13 6,-7 19,-9 25,-17 1,-2 2,-7 3,-10 2,-4 5,-5 5,-9 0,-3 -1,-8 -1,-13 2,-2 6,-4 8,-6l8 -7c12,-13 10,-10 18,-6 2,-3 3,-4 6,-5 8,-7 -3,0 9,-15 2,-3 4,-5 6,-7 3,-5 1,-14 4,-20 1,-1 6,-4 8,-4 3,-2 5,-2 6,-6 4,-16 2,-14 -6,-25 -6,-10 -9,-5 -20,-17 -4,-5 -9,-8 -12,-12l2 -9 -10 5 0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'la_orotava');
la_orotava.data({'id': 'heaven-on-earth', 'region': 'La Orotava', 'poblacion': 'Poblacion: 41.179 (2004)', 'altitud': 'Altitud: 360 m', 
'superficie': 'Superficie: 207,31 km^2', 'codpostal': 'Código Postal: 38315, 38300, 38310, 3813'});

var arico = rsr.path("M382 406c0,3 1,10 1,12 0,3 -4,6 -5,10 -1,3 -1,8 -4,10 -8,11 -20,12 -26,18 -6,8 -8,12 -14,15 1,2 3,6 5,8 3,5 2,4 8,6 7,2 7,6 13,15 12,21 6,17 25,30 3,3 4,3 6,8l9 18c3,4 4,4 9,5 16,4 7,9 25,29 0,0 0,0 1,1 6,-6 3,-10 14,-12 0,-11 0,-10 8,-14 8,-5 1,-11 12,-12 0,-5 4,-8 10,-7 1,-1 2,-1 3,-4 -9,-4 -6,-7 -4,-14 2,-5 1,-3 5,-5 -6,-9 -1,-6 0,-14 0,-3 -1,-5 -1,-8 1,-3 3,-2 4,-6 -2,-4 -6,-5 -10,-7 -6,-3 -4,-5 -7,-11 -2,-1 -11,-4 -13,-5 -2,-3 -9,-14 -12,-17l-10 -10c-7,-5 -19,-18 -26,-24 -4,-3 -7,-6 -11,-9 -3,-3 -6,-6 -9,-9l-6 3 0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'arico');
arico.data({'id': 'heaven-on-earth', 'region': 'Arico', 'poblacion': 'Poblacion: 41.179 (2004)', 'altitud': 'Altitud: 556 m', 
'superficie': 'Superficie: 178,76 km^2', 'codpostal': 'Código Postal: 38580, 38588, 38589, 38592, 38593'});

var granadilla = rsr.path("M315 476c-1,3 -2,10 0,12 4,5 4,1 4,11 0,4 1,10 1,14 0,8 0,7 -3,14 -3,9 10,5 -3,18 -8,7 3,15 5,20 2,11 -4,4 8,22 5,8 0,10 1,26 1,20 -1,11 -4,19 0,2 0,4 0,6 -1,17 4,6 7,24l35 -3c5,0 5,3 9,4 4,-3 0,-3 2,-10 0,-7 2,-5 8,-6 1,-2 1,-4 2,-5 2,-3 3,-2 6,-3 2,-4 2,-7 6,-8 4,-2 1,1 4,-3 6,-9 2,4 9,-13 3,-5 4,-3 10,-4l1 -2c2,-4 -1,3 0,-1 1,-2 1,-6 2,-7 1,-3 5,-4 7,-7 -2,-3 -10,-11 -12,-16 -6,-11 -2,-10 -14,-14 -10,-2 -12,-11 -18,-23 -3,-7 -7,-9 -14,-14 -4,-3 -6,-3 -8,-7l-15 -26c-5,-11 -9,-1 -16,-13 -1,-2 -4,-6 -5,-9l-15 4 0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'granadilla');
granadilla.data({'id': 'heaven-on-earth', 'region': 'Granadilla de Abona', 'poblacion': 'Poblacion: 43608 hab. (2003)', 'altitud': 'Altitud: 640 m', 
'superficie': 'Superficie: 162,45 km^2', 'codpostal': 'Código Postal: 38594, 38595, 38600, 38611, 38612, 38616, 38617, 38618, 38639'});

var guia_isora = rsr.path("M115 457c2,4 4,8 4,12 0,7 -3,9 3,12 6,3 2,6 6,10 3,5 3,6 5,12 15,2 11,18 15,24 7,-2 14,-6 22,-6 28,-4 17,1 44,-12 9,-4 9,-6 17,-12 2,-3 4,-5 7,-7l15 -14c3,-3 1,-2 0,-11 -1,-8 -2,-16 -3,-24 -1,-8 1,-13 6,-21 -8,-1 -16,1 -23,0 -9,-2 -34,-7 -41,-6 -23,3 -16,1 -37,11 -17,7 -15,6 -27,20 -3,2 -4,5 -6,6 -3,3 -4,3 -7,6l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'guia_isora');
guia_isora.data({'id': 'heaven-on-earth', 'region': 'Guia de Isora', 'poblacion': 'Poblacion: ', 'altitud': 'Altitud:  m', 
'superficie': 'Superficie:  km^2', 'codpostal': 'Código Postal: '});

var santacruz = rsr.path("M633 111c-3,8 6,24 3,34 -2,9 -8,2 -11,10 -1,5 -2,11 -4,17 14,15 18,-2 3,44 -1,6 -1,5 -5,8 -6,5 -3,16 -6,21 -1,1 -8,3 -11,3l0 -7c-4,0 -18,-3 -22,-5 0,0 0,1 0,1l-6 9c-2,3 -6,7 -7,10 6,11 9,9 17,10 3,-3 2,-5 6,0 2,2 4,4 7,6 6,-5 5,-4 11,-12 2,-4 9,-8 12,-11 4,-4 7,-11 10,-14 4,-3 13,-4 17,-7 2,-4 2,-9 3,-12 1,-4 3,-7 5,-11 7,-11 5,-8 12,-11 7,-3 -4,-3 8,-3 5,-1 1,-2 8,-4 4,-2 6,-3 11,-4 4,0 4,-1 9,-7 9,-11 6,2 13,-8 3,-3 7,-4 11,-6 10,-5 7,-3 18,-2 2,-5 3,-13 12,-14 0,-3 0,-8 2,-11 3,-2 6,-2 6,-7 -2,-3 -3,-1 -4,-5 -1,-3 1,-6 -2,-7 -4,-5 -6,2 -7,-11 -5,-1 -11,-4 -15,-5 -4,-1 -4,0 -8,2 -4,1 -5,-1 -7,1 -5,3 -6,7 -12,8l-31 10c-5,2 -9,-1 -14,-3 -9,-4 -7,-3 -16,-2 -9,1 -10,-3 -16,-5l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'santacruz');

var lalaguna = rsr.path("M510 157c1,4 5,12 7,14l12 11c4,4 10,7 10,11 1,5 3,16 2,21 3,-2 13,2 17,3 10,3 8,3 14,9 3,2 5,2 8,4 3,2 1,2 7,4 6,1 14,3 19,4l0 5c4,-1 4,-3 4,-8 4,-23 6,-4 12,-25 2,-6 4,-12 6,-18 3,-9 3,-8 -7,-15 -5,-4 -5,-2 -1,-16 4,-17 2,-10 10,-15 5,-3 1,-14 1,-19 -2,-9 -1,-12 -5,-14 -1,-1 -3,-2 -5,-2 -2,3 -1,4 -5,5 -8,1 -6,2 -10,1 -2,-1 -4,-4 -7,-4 -3,0 -4,3 -9,1 -3,-2 -2,-3 -3,-6 -7,3 -6,2 -7,9 -3,14 -1,10 -17,15 -5,1 -2,1 -5,4 -1,0 -4,2 -5,2 -15,6 -16,-3 -26,4 -10,8 -3,4 -7,9 -1,2 -9,6 -10,6l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'lalaguna');

var guimar = rsr.path("M438 354c-1,6 -8,12 -11,17 -2,3 -1,10 -13,16 0,3 4,12 5,14 3,4 35,14 39,19 5,7 2,12 20,19 6,2 9,3 13,6 3,3 5,6 12,8 3,-9 17,-30 19,-35 4,-9 -5,-11 7,-21l14 -15c6,-7 0,-25 -3,-28 -3,1 -5,4 -8,6 -7,6 -12,-6 -38,-4 -14,2 -13,2 -26,-2 -6,-3 -22,-1 -30,0l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'guimar');

var adeje = rsr.path("M150 531l23 40c1,0 3,0 4,0 2,1 1,2 3,3 2,2 0,0 4,4 1,2 0,1 1,2 2,0 2,0 3,2 2,5 -3,2 8,10 13,9 10,10 14,30 8,0 6,1 15,-9 4,-4 18,-17 18,-19 1,-4 -1,-8 0,-12 2,-8 7,-7 5,-19 -1,-13 -2,-11 2,-21 3,-8 7,-21 12,-26 4,-3 3,-3 5,-8 2,-7 4,-14 6,-20 -9,-7 0,-2 -15,-10 -5,2 -31,29 -37,32l-21 10c-9,4 -25,3 -35,6 -5,1 -10,4 -15,5l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'adeje');

var icod_vinos = rsr.path("M225 301c-2,3 -3,6 -6,9 -9,1 -7,-3 -10,-5 -2,5 -1,15 -1,21 -1,8 -7,7 -5,15 6,24 7,43 25,61 16,15 7,9 29,13 7,-11 7,-23 13,-26 3,-1 8,-1 11,-2 5,-2 15,-3 17,-10 2,-7 -3,-14 -5,-20 -4,-9 -5,-9 -11,-15 -6,-6 -4,-8 -7,-19 -2,-6 -3,-4 -6,-7 -2,-2 -8,-13 -11,-16 -2,-5 -2,-5 -8,-6 -1,3 0,3 -3,6 -5,3 -8,3 -15,3 -4,0 -4,-1 -7,-2z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'icod_vinos');

var arona = rsr.path("M210 626l-2 7c-1,4 2,0 12,4 15,4 9,15 13,21 1,2 3,3 3,6 -1,10 -9,20 9,26 9,3 9,0 13,-4 4,-3 4,0 7,-2 3,-1 3,-4 7,-3 4,0 2,3 7,1 6,0 4,0 8,2 3,-4 3,-1 3,-9l1 -38c0,-10 -3,-13 -3,-23 0,-8 1,-18 0,-27 -5,-2 -11,-8 -17,-8 -14,1 -11,-2 -20,-7 -4,10 -4,6 -4,19 0,6 -4,9 -9,15l-18 18c-3,3 -4,2 -10,2l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'arona');
var buenavista_norte = rsr.path("M115 297c-7,2 -5,-1 -11,3 -9,7 -1,4 -7,8 -1,2 -5,1 -8,1 -2,3 -1,4 -4,6 -12,6 -10,0 -14,2 -2,1 -5,3 -7,4 -5,2 -6,-3 -15,1 -5,1 -9,11 -5,12 0,0 1,1 2,1 7,3 18,8 20,16 2,8 0,4 9,12 5,5 5,6 6,14 9,4 7,5 13,13 3,4 3,3 2,9 0,3 1,7 4,7 4,-1 3,-6 8,-8 3,-2 5,-2 6,-3 8,-4 -2,-4 13,-6 0,-3 -2,-7 -3,-11 0,-5 4,-5 6,-9 -2,-2 -8,-8 -9,-10 -4,-6 -4,-39 -3,-45l3 -21c-6,1 -3,1 -6,4l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'buenavista_norte');
var vilaflor = rsr.path("M289 583c0,-11 -3,-7 11,-16 3,-3 6,-4 7,-7 2,-6 1,-9 1,-14l8 -9c-3,-6 -5,-6 -2,-12 3,-7 2,-6 2,-15 0,-3 0,-12 -1,-15 -1,-3 -2,-3 -4,-5 -2,-2 -1,-3 -1,-7 -5,3 -11,8 -17,7 -19,0 -16,-3 -18,5 -10,36 -4,10 -15,35 -3,5 -6,11 -8,17 -2,4 -1,17 1,21 1,1 6,5 7,6 4,2 4,2 10,2 9,-1 12,4 19,7l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'vilaflor');
var realejos = rsr.path("M335 289c-3,8 -9,3 -24,3 -2,6 0,23 3,28l23 45c5,11 3,12 5,27 3,0 10,-3 13,-3 8,-2 6,-2 9,-8 5,-8 4,-17 6,-29 1,-14 0,-18 -3,-30 -1,-12 -5,-18 1,-28 -4,-2 -4,0 -6,-4 -1,-2 -1,-5 -3,-7 -3,1 -3,0 -6,0 -4,2 -6,9 -18,6l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'realejos');
var santiagoteide = rsr.path("M132 393c-3,0 -8,0 -10,1 -3,1 -2,2 -5,4 -7,4 -8,2 -11,9l0 2c4,6 -1,3 6,7 5,2 3,5 5,10 1,9 0,7 -3,13 -1,3 0,9 1,12l21 -20c5,-6 21,-11 28,-15 6,-2 9,-4 16,-5 5,-1 14,-2 19,-1 9,1 29,5 36,5 -5,-1 -45,-22 -50,-24 -8,-4 -16,-9 -24,-14 -6,-3 -5,-3 -14,-4 -8,-2 -3,4 -14,-2 -11,8 0,11 -1,22l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'santiagoteide');
var candelaria = rsr.path("M493 291c-12,7 -16,1 -19,11 4,5 21,15 29,25 1,3 3,6 6,8 3,2 5,3 8,5 10,6 8,6 22,6 0,-4 -3,-15 -1,-19 3,-5 2,5 6,-13 2,-10 2,-9 9,-13 5,-3 8,-4 11,-10 -9,-2 -13,-3 -20,-8 -4,-3 0,-3 -7,-6 -4,-2 -4,-3 -10,-3 -3,1 -9,2 -12,2 -4,-1 -5,-3 -10,-1 -3,1 -7,3 -9,4 -4,4 -2,6 -3,12l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'candelaria');
var fasnia = rsr.path("M390 400c2,1 4,4 6,5l42 39c7,7 2,0 11,11 11,14 6,13 19,17 12,5 2,8 10,13 3,2 6,3 9,4 -3,-4 -2,-5 1,-8 5,-8 11,-15 13,-24 -2,-2 -4,-2 -6,-3 -10,-6 -2,-4 -20,-12 -8,-3 -8,-4 -13,-8 -5,-4 -6,-10 -8,-13l-29 -12c-9,-4 -8,-2 -11,-10 -9,-19 -7,-16 -24,1l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'fasnia');
var sanmiguel = rsr.path("M293 577l-1 40c1,5 2,7 3,12 2,6 -1,41 -1,52 3,-2 4,-5 6,-7 3,-3 3,-3 8,-4 6,-3 12,-6 19,-7 -1,-7 -1,-8 -5,-12 -4,-5 -2,-6 -2,-13 0,-12 2,-7 4,-12 1,-4 0,-11 0,-15 -1,-6 0,-10 0,-15 1,-6 -1,-8 -4,-12 -2,-3 -4,-6 -5,-11 0,-10 0,-6 -3,-13 -2,3 -1,3 -4,5 -1,2 -4,3 -6,4l-7 6c-3,1 -1,0 -2,2l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'sanmiguel');
var elrosario = rsr.path("M530 237c1,5 -2,6 -4,9 -3,4 -16,20 -16,24 9,4 14,-1 22,0 2,0 7,3 9,4 6,3 2,3 6,7 4,2 14,6 19,7 5,0 5,-3 8,-5 3,-3 7,-1 12,-1 1,-1 1,-2 3,-3 2,-2 2,-2 4,-4 -7,-7 -3,-4 -18,-6 -5,-1 -5,-2 -7,-5 -8,-9 -7,-6 1,-18 11,-14 7,-12 0,-18 -1,-1 -4,-4 -7,-5 -2,-2 -15,-5 -18,-6 -4,5 -9,16 -13,19l-1 1 0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'elrosario');
var path_t = rsr.path("M555 195c4,-1 11,-8 14,-10 4,-3 11,-9 15,-10 5,4 1,5 10,1 8,-3 11,-5 16,-15 1,-3 4,-8 4,-11 -4,-6 -21,-10 -30,-12 -19,-6 -17,-3 -25,12 -2,4 -1,3 -5,5 -12,7 -15,6 -16,16 -1,10 -3,11 4,16 3,2 10,7 13,8l0 0z").attr({class: 'fil0',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_t');
var arafo = rsr.path("M439 349c7,0 24,-1 29,0 12,4 10,5 24,3 14,-1 14,-1 25,3 11,3 11,5 19,-3 1,-1 0,0 1,-1 -5,0 -9,0 -13,-2 -17,-11 -16,-7 -25,-20 -4,-6 -18,-15 -24,-21 -6,-5 -5,-3 -6,-6 0,-2 1,0 0,-2 -4,5 -10,2 -14,26 -1,9 -1,7 -8,11 -7,4 -6,3 -8,12l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'arafo');
var tacoronte = rsr.path("M491 197c8,7 12,12 16,23 2,6 3,17 10,29l1 1c11,-11 7,-15 7,-16 2,-6 3,6 6,-13 4,-13 2,-8 6,-11 -2,-22 2,-14 -18,-31 -2,-3 -4,-3 -5,-6 -3,-2 -5,-9 -8,-13 -10,7 -4,12 -8,18 -1,2 -1,1 -2,4 0,2 0,3 -1,5 -2,4 -3,7 -4,10l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'tacoronte');
var path_w = rsr.path("M543 166c-1,5 -2,11 -1,16 4,3 8,6 13,9 7,-3 23,-20 31,-21l2 4c12,-2 18,-12 22,-23 -7,-4 -31,-13 -41,-12 -3,4 -6,15 -10,17l-16 10z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'garachico');
var garachico = rsr.path("M182 312c5,9 1,23 0,32 -2,12 2,21 5,31 3,7 3,6 7,12 2,1 7,8 9,9 2,2 9,4 12,6 5,1 8,4 13,5 -3,-3 -5,-5 -8,-8 -13,-19 -10,-13 -15,-34 -2,-5 -7,-25 -7,-28 1,-8 7,3 6,-27 -3,1 -5,6 -10,5 -6,-1 -7,-5 -12,-3l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'tanque');
var tanque = rsr.path("M157 325c1,8 -1,11 -6,22 -3,5 -10,18 -5,21 5,2 7,0 13,3 3,3 7,5 10,6 5,3 18,11 22,12 -6,-7 -5,-6 -8,-14 -13,-34 1,-38 -4,-58l-7 -1c-3,3 -2,5 -6,6 -3,1 -6,3 -9,3l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'los_silos');
var los_silos = rsr.path("M141 369c2,-9 -6,3 5,-21 2,-5 8,-16 8,-21 -1,-5 -4,-12 -7,-16 -2,-3 -1,-1 -4,-3 -8,-2 -13,-8 -18,-11 -4,8 -4,43 -3,54 2,6 2,5 4,9 3,2 10,11 15,9l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'santa_ursula');
var santa_ursula = rsr.path("M456 310c4,-12 10,-10 16,-17 -3,-4 -3,-5 -7,-9 -5,-4 -5,-2 -7,-10 0,-1 -2,-4 -2,-6 -1,-1 -6,-7 -8,-8 -4,-2 -3,0 -7,0 -6,-5 -2,-10 -12,-12 -4,14 -8,14 -10,19 -3,7 -3,5 8,15 11,10 3,5 16,12 6,4 8,12 13,16l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'laguancha');
var laguancha = rsr.path("M260 294c2,5 10,17 13,20 5,5 4,2 6,11 4,17 3,9 12,20 3,3 4,8 6,11 3,8 9,18 3,26 5,-1 16,-2 20,-4 -7,-15 -16,-29 -20,-41 -3,-12 -3,-10 -11,-19 -2,-3 -3,-4 -3,-8 -1,-7 -5,-10 -6,-14 -1,-4 2,-5 0,-8 -1,-2 -3,0 -8,-1 -5,-1 -4,0 -5,3 -2,4 -3,3 -7,4l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'sanjuanrambla');
var sanjuanrambla = rsr.path("M325 377l10 -6c-1,-5 -26,-49 -27,-54 0,-4 -2,-21 -2,-25 -2,0 -5,1 -8,1 -4,-1 -3,-5 -9,-3 -9,3 -3,7 0,15 3,7 -3,1 6,13 14,18 3,12 16,33l14 26 0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'victoriaacentejo');
var victoriaacentejo = rsr.path("M439 249l3 5c6,1 8,2 13,6 10,11 3,12 13,22 10,10 2,2 8,10l13 -3c0,-15 3,-6 8,-19 -12,-16 -12,-9 -28,-17 -5,-2 -10,-4 -15,-7 -3,-2 -4,-3 -8,-1 -2,1 -5,2 -7,4l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'elsauzal');
var elsauzal = rsr.path("M468 216c2,7 19,14 22,22 2,5 7,9 10,12 3,4 4,10 8,14 7,-10 8,-7 4,-15 -9,-20 -5,-19 -13,-36 -3,-5 -7,-11 -11,-14 -3,3 -9,5 -10,9 -1,2 -1,4 -4,5 -4,1 -4,-1 -6,3l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'matanzaacentejo');
var matanzaacentejo = rsr.path("M458 228l-4 4c1,4 -1,6 -2,9 7,3 21,11 28,13 10,2 8,0 14,7 2,2 3,3 5,5 3,5 1,3 3,6l3 -2c-1,-11 -14,-23 -16,-26 -5,-7 2,-3 -9,-12 -4,-3 -9,-6 -13,-9 -3,5 0,6 -9,5z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'puertocruz');
var puertocruz = rsr.path("M363 277c-1,3 1,5 1,8 2,4 2,4 6,5l2 -5 15 1c3,-12 6,-7 14,-11 0,-5 1,-4 -11,-5 -5,0 -10,0 -15,0 -4,5 -5,5 -12,7l0 0z").attr({class: 'fil1',parent: 'Capa_x0020_1','stroke-width': '0','stroke-opacity': '1','fill': '#000000'}).data('id', 'path_ag');
_76635586768.attr({'id': '_76635586768','parent': 'Capa_x0020_1','name': '_76635586768'});

regions.push(la_orotava);
regions.push(arico);
regions.push(granadilla);
regions.push(guia_isora);
regions.push(santacruz);
regions.push(lalaguna);
regions.push(guimar);
regions.push(adeje);
regions.push(icod_vinos);
regions.push(arona);
regions.push(buenavista_norte);
regions.push(vilaflor);
regions.push(realejos);
regions.push(candelaria);
regions.push(santiagoteide);
regions.push(fasnia);
regions.push(sanmiguel);
regions.push(elrosario);
regions.push(arafo);
regions.push(tacoronte);
regions.push(garachico);
regions.push(tanque);
regions.push(los_silos);
regions.push(santa_ursula);
regions.push(sanjuanrambla);
regions.push(victoriaacentejo);
regions.push(elsauzal);
regions.push(laguancha);
regions.push(matanzaacentejo);
regions.push(puertocruz);

var click = false;
var fotos = [
['http://www.ojodigital.com/foro/attachments/paisajes/51284d1244327054-valle-de-la-orotava-isla-de-tenerife-el-valle-de-la-orotava.jpg','http://esphoto500x500.mnstatic.com/la-orotava_1192111.jpg', 'http://sobrecanarias.com/wp-content/uploads/2008/05/orotava.jpg','http://media-cdn.tripadvisor.com/media/photo-s/01/38/3a/46/la-orotava.jpg','http://www.elplaneador.com/fotos/plan/51041_galeria.jpg'],['http://www.tenerife-canarie.com/wp-content/uploads/2015/03/image23-1024x768.jpg','http://www.andarines.com/canarias/eras/Vista%20General.jpg',
'http://farm8.staticflickr.com/7054/6869633299_da9c61d6a0_b.jpg','http://www.tamayrentacar.com/los-gigantes/wp-content/uploads/2011/08/arico.jpg','http://data-4c21db65c81f6.s3.amazonaws.com/eltiempo/playas/new/images/ply633_imgTF-D-0120.jpg'],
['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Granadilla_BW_1.JPG/300px-Granadilla_BW_1.JPG','http://adondevamoshoytenerife.com/wp-content/uploads/2014/06/MG_4998.jpg','http://costasanmiguel.com/static_media/cms_page_media/ccv_costasanmiguel_com/gallery/SM_82.jpg',['http://caucesur.com/imagenes/San%20Miguel%20de%20Abona.jpg']],
[]
];	

var points = [];
var circle1 = rsr.circle(600,200,15);
var circle2 = rsr.circle(320,440,15);
circle1.attr("fill", 'green');	
circle2.attr("fill", 'green');	
points.push(circle1);
points.push(circle2);

	for (var j = 0; j < points.length; j++) {
		points[j].mousedown(function(e)
		{
			alert("message");
		});
	}

	for (var i = 0; i < regions.length; i++) {
		regions[i].mouseover(function(e)
		{
			document.getElementById('fotos').innerHTML = "";
			this.node.style.opacity = 0.7;
			document.getElementById('region-name').innerHTML = this.data('region');
			document.getElementById('region-poblacion').innerHTML = this.data('poblacion');
			document.getElementById('region-superficie').innerHTML = this.data('superficie');
			document.getElementById('region-altitud').innerHTML = this.data('altitud');
			document.getElementById('region-codpostal').innerHTML = this.data('codpostal');
			if(this.data('region') == 'La Orotava')
			{
				for(var j=0; j<5; j++)
				{
					var x = document.createElement("IMG");
					x.setAttribute("src", fotos[0][j]);
					x.setAttribute("width", "304");
					x.setAttribute("width", "228");
					x.setAttribute("alt", "La Orotava");
					document.getElementById("fotos").appendChild(x);
				
				}				
			}
			else if(this.data('region') == 'Arico')
			{
				for(var j=0; j<5; j++)
				{
					var x = document.createElement("IMG");
					x.setAttribute("src", fotos[1][j]);
					x.setAttribute("width", "304");
					x.setAttribute("width", "228");
					x.setAttribute("alt", "La Orotava");
					document.getElementById("fotos").appendChild(x);
				}				
			}
			else if(this.data('region') == 'Granadilla de Abona')
			{
				for(var j=0; j<4; j++)
				{
					var x = document.createElement("IMG");
					x.setAttribute("src", fotos[2][j]);
					x.setAttribute("width", "304");
					x.setAttribute("width", "228");
					x.setAttribute("alt", "La Orotava");
					document.getElementById("fotos").appendChild(x);
				}				
			}
		});
		regions[i].mousedown(function(e)
		{
			this.node.setAttribute('fill', 'green');
			if(this.data('region') == 'La Orotava')
				window.open('https://es.wikipedia.org/wiki/Arico','Arico', 'width=800,height=800;top = (screen.height-altura)/2')
			else if(this.data('region') == 'Arico')
				window.open('https://es.wikipedia.org/wiki/Arico','Arico', 'width=800,height=800;top = (screen.height-altura)/2')
		});

		regions[i].mouseout(function(e)
		{
			this.node.style.opacity = 1;
			this.node.setAttribute('fill', 'black');	
			if(false)
			document.getElementById('fotos').innerHTML = "";
		});
		regions[i].mouseout(function(e)
		{
			document.getElementById('region-name').innerHTML = "Pase el ratón por encima de algún municipio para más información";
			document.getElementById('region-poblacion').innerHTML = "Pulsando encima de cada uno se abrira una nueva pestaña";
			document.getElementById('region-superficie').innerHTML = "";
			document.getElementById('region-altitud').innerHTML = "";
			document.getElementById('region-codpostal').innerHTML = "";
		});
	}		

};

