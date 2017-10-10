var cardNumber = prompt("INGRESE SU NUMERO DE TARJETA"); // se crea la variable donde se almacena el numero d la tarj
var array = []; // pasar los elementos de la tarjeta a un array
for (i= 0; i < cardNumber.length; i++){
array.push(cardNumber[i]);
}

 for (j=0; j < array.length; j++) {//invertir los elementos del array
   var item = array.pop();
   array.splice(j,0,item);
 }
 var newArray = []; //variable donde se almacenara los numeros de uno en uno //6767298470561259
 for (k= 0; k < array.length; k++){
   newArray.push(parseInt(array[k]));  // newArray [9, 5, 2, 1, 6, 5, 0, 7, 4, 8, 9, 2, 7, 6, 7, 6]
 }
 // separando numeros pares de impares

 var pair = []; // numeros pares multiplicados x 2 [10, 2, 10, 14, 16, 4, 12, 12]
 var impair = 0; // numeros impares // 47
 for (m = 0; m < newArray.length; m++ ) {
 if ([m + 1] % 2 == 0){
   pair.push((newArray[m])*2);
 }
 else if ([m +1] % 2 !== 0){
   impair += newArray[m];
 }
}
//separando los numeros pares = o mayores que 10

var smallNumbers = 0; // numeros menores que 10
var bigNumbers = [];  // numeros mayores que 10
for (p = 0; p < pair.length; p++ ){
  if (pair[p] <= 9) {
    smallNumbers += (pair[p]);
  }
  else { bigNumbers.push(pair[p]);//[ 16, 12 ]
  }
}
var joinedNumbers = bigNumbers.join("");//1612
var numberSeparated = joinedNumbers.split("");//[ '1', '6', '1', '2' ]


var arrayNumbers = [];
for (q = 0; q < numberSeparated.length; q++){ // parseando numeros para sumarlos // [ 1, 6, 1, 2 ]
 arrayNumbers.push(parseInt(numberSeparated[q]));
 }

 var sumOfLarge = 0;
 for (r= 0; r < arrayNumbers.length; r++){
   sumOfLarge += (arrayNumbers[r]);
 }

 var count = impair + smallNumbers + sumOfLarge


 var isValidCard = function (cardNumber) {

   if (count % 10 !== 0){
 return document.write("TU TARJETA DE CREDITO ES INVALIDA");
 }
    else if (cardNumber !== "" && count % 10 === 0) {
   return document.write("TU TARJETA DE CREDITO ES VALIDA");
    }
   else {
     return document.write("INGRESE SU NUMERO DE TARJETA CORRECTO");
   }
 };
isValidCard(cardNumber);

 // 6767298470561259
