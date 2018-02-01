'use strict';

const querystring = require("querystring");
/* 
on définit un Object litéral qui contient l'ensemble des provinces 
*/
let oProvince = {  "QC" : "Québec",
                   "ON" : "Ontario",
                   "MA" : "Manitoba",
                   "SK" : "Saskashewan",
                   "AL" : "Alberta",
                   "NF" : "Terre-Neuve",
                   "NB" : "Nouveau-Brunswick"
}
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

const contenu_objet_json = (o)=>{
   let trace = '';
   for (let p in o) { 
     trace += p + ': ' + o[p] + '\n'; 
   } 
   return trace;
   }

//console.log(contenu_objet_json(oProvince))
//let sProvince = JSON.stringify(contenu_objet_json(oProvince))
//console.log(contenu_objet_json(sProvince))

const fs = require("fs");
let provinces
let html = "<table>";
/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
fs.readFile('provinces.JSON', 'utf8', function (err, data) {
 if (err) throw err;
 provinces = JSON.parse(data);
for(let i = 0; i <= 6; i++) {
  //console.log(provinces["Acronymes"][i]);
  html += "<tr><td>" + provinces["Acronymes"][i] + "</td><td>" + provinces["Provinces"][i] + "</td></tr>";
}

html += "</table>";
//console.log(html);
 
});
/* «Fin du programme» apparaît avant la lecture du fichier */
//console.log("Fin du programme");



const http = require("http"); 
http.createServer((request, response) =>
{ 
 console.log('branchement sur le port 3000')
 response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
 response.write("<h1>Provinces</h1>"); 
 response.write(html);
 response.end(); 
}).listen(3000);