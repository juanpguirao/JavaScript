// let suma =0;
// do{
//     let numero = prompt( "Escribe los numeros a sumar o F para terminar");
//     if(Number(numero) == numero){
//         numero = Number(numero);
//         suma = suma + numero;
//         console.log(suma)
//     }    
//     else{
//         if(numero != undefined){
//             console.log("No ingreso formato numerico")}
        
//     }

// }while(numero != )

// let suma =0;
// do{
// let numero = parseInt(prompt("Escribe los numeros a sumar o F para terminar"));
// if(numero != "f"){
//     suma = suma + numero
//     console.log( suma )
// }
// else{ console.log("El resultado final es " + suma)
// }
// }while (parseInt(suma));

let suma =0;
let numero = parseInt(prompt("Escribe los numeros a sumar o F para terminar"));
while ( numero != "F"){
    suma = suma + numero
    console.log( suma )
    numero = parseInt(prompt("Escribe los numeros a sumar o F para terminar"));
}