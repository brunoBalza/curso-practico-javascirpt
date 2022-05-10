// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El área del cuadrado es " + areaCuadrado + " cm cuadrados");

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTriangulo = (baseTriangulo + alturaTriangulo) / 2;

console.log(
    "los lados del triágulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo 
    + " cm,"
)
// Separar de esta manera se llama IDENTAR

console.log("El perímetro del triágulo mide: " + perimetroTriangulo + " cm")

console.log("El área del triágulo mide: " + areaCuadrado + " cm")

console.groupEnd();

