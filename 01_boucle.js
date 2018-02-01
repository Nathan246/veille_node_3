'use strict';

let elm;

let unTableau = ['Québec', 'Ontario', 'Manitoba', 'Saskatshewan'];

console.log("////////////////////////////// Première boucle forEach")

unTableau.forEach((elm,i)=>{
	console.log(i + ' ' + elm)
})

unTableau.push('Alberta')
unTableau.push('Vancouver')
unTableau.push('Nouveau-Brunswick')

console.log("////////////////////////////// Deuxième boucle forEach")

unTableau.forEach((elm,i)=>{
	console.log(i + ' ' + elm)
})

/* l'approche ES6 */

console.log("////////////////////////////// Boucle for of")

let i=0;

for (elm of unTableau){

console.log(elm + ' ' + i++)

}