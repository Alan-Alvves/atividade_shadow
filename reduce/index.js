//Somando com forEach
const array = [5, 7, 3.5, 9, 10, 8, 4, 2, 6, 6.5, 5.5];
var total = 0;

array.forEach(element=> {   
       total += element;
       console.log(total)
})

//Somando com reduce

const arr = [5, 7, 3.5, 9, 10, 8, 4, 2, 6, 6.5, 5.5];

const soma = arr.reduce((a, e) => a + e)

console.log(`${soma} soma feita pelo reduce`)

/* A somatorio feita pelo forEach mostra cada resultado anterio ate chegar no fim
   ja pelo reduce mostra o resultado final de uma fez, a não que de console.log no
   "a, e" que dai mostraria a soma de um por um
*/