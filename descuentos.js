// Lo primero que debemos hacer es definir nuestras variables, 

// const precioOriginal = 650;
// const descuento = 15;




// cuando hacemos un console.log, dentro de este tmb podemos poner objetos esto lo hacemos con llaves y dentro de estas podemos poner lo que queramos
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function calcularPrecioConDescuento (precio , descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento; 
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
//     return precioConDescuento;
//   }
  
//   function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;
  
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//   }