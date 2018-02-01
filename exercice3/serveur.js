'use strict';
/* 
on définit un Object litéral qui contient l'ensemble des provinces 
*/
let oProvince = {  "QC" : "Québec",
                   "ON" : "Ontario",
                   "MA" : "Manitoba",
                   "SK" : "Saskashewan"
                   "AL" : "Alberta"
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

console.log(contenu_objet_json(oProvince))
/*
const http = require("http"); 
http.createServer((request, response) =>
{ 
 console.log('branchement sur le port 8888')
 response.writeHead(200, {"Content-Type": "text/html"});
 response.write("Hello World"); 
 response.end(); 
}).listen(3000);*/