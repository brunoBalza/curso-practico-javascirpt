// Ahora vamos a ir paso por paso para realizar esta funcion

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

// la funcion debe recibir los 3 lados del triangulo, la cuenta es base

function alturaTriangulo (ladoA, ladoB, ladoBase) {
}

// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.

function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        // ...
    }
}

        // Vemos que un error, esto es porque el calculo que necesitamos hacer, necesita de 2 lados iguals, por ende si el usuario va a dar 2 valores distintos, el mismo le va a dar un error

// La función debe retornar la altura del triángulo.

    // Para calcular la altura de un triángulo isósceles vamos a dividir nuestro triángulo en dos. Así tendremos dos triángulos iguales, uno de sus nuevos lados tendrá la misma longitud que la altura del triángulo original y calculando la longitud de este lado habremos calculado también la altura.

    // si partimos el triangunlo isosceseles por el medio, justo por donde pasa la altura de este, nos van a quedar 2 triangulos rectos, el lado (que va a quedar el mas largo) va a ser la altura del isosceles, por ende el calculo se va a basar en sacar la distancia de este lado del triangulo recto

    // entonces vamos a tener 2 triangulos, uno grande (el isosceles) y otro chiquo (el recto)

// vamos a crear estos 2 triangulos en JS, pero en la funcion con la que estamos trabajando

    // Base del grande divido 2 = Lado B chico
    // Lados del grande = Base del chico
    // Altura del grande = Lado A del chico

function alturaTrianguloIsoscele(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        // ...

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

    // modificamos los parametros de la funcion para decir que el usuarios nos va a pasar los lados del isosceles
    // ¡Muy bien! Ahora solo debemos seguir la fórmula para hallar la longitud de un lado del triángulo a partir de dos de sus lados (esto en el mundo de las matemáticas es lo que conocemos como teorema de Pitágoras)

        // base al cuadrado es igual a la suma de los lados al cuadrado.

        // pero nosotros no necesitamos saber la base, sino lo que necesitamos es uno de los lados, por eso vamos a despejar

        // entonces la formula va a quedar, lado A = a la raiz del labo de B al cuadrado por la base al cuadrado

 function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
            if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
                console.error("Los lados a y b no son iguales");
            } else {
                const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
                const trianguloPequenoLadoBase = trianguloGrandeLadoA;
        
                const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
                const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        
                const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
        
                const trianguloGrandeAltura = trianguloPequenoLadoA;
                return trianguloGrandeAltura;
            }
 }