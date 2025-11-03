/*var age = 10;
if(age > 65 ){
  console.log("Vous tirez vos revenues de votre pension.");
}
else if(age <= 65 && age >= 18){
  console.log("Chaque mois vous recevez un salaire de 2000€.");
}
else{
    console.log("La valeur de la variable age n'est pas numérique");
}*/

/*for(var i = 0; i < 5; i++){
  console.log("Iteration number : " + i);
  console.log('Counting completed!')
}*/


/*for (var i = 1; i < 4; i++) {
    if(i === 1 ){
        console.log("Medaille d'or");
    }
    else if(i === 2 ){
        console.log("Medaille d'argent");
    }
    else if(i === 3 ){
        console.log("Medaille de bronze");
    }
    else
        console.log("le numero n'ai pas valide");
}*/

/*  */

/* function sommeArray(arr){
    var somme = 0;
    for(var i = 0; i < arr.length; i++){
        somme += arr[i];
    }
    return somme;
}*/

function letterfinder(word, match){
    for(var i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log("Found the " + match + " at " + i);
        }
        else{
            console.log("---No match found at " + i);
        }
      }
    }
letterfinder("test","t");