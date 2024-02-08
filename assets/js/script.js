/* //SKU1
var product1 = document.getElementById("PRODUCTO1")
var precio1 = document.getElementById("PRECIO1")
var cantidad1 = document.getElementById("CANTIDAD1")
var total1 = document.getElementById("TOTAL1")

var valorProduct1 = prompt("Ingrese producto N°1")
var valorPrecio1 = parseFloat(prompt(`Ingrese precio de ${valorProduct1}`))
var valorCantidad1 = parseFloat(prompt(`Ingrese cantidad de ${valorProduct1}`))

product1.innerHTML = valorProduct1
precio1.innerHTML = valorPrecio1
cantidad1.innerHTML = valorCantidad1
total1.innerHTML = (valorPrecio1 * valorCantidad1)

//SKU2

var product2 = document.getElementById("PRODUCTO2")
var precio2 = document.getElementById("PRECIO2")
var cantidad2 = document.getElementById("CANTIDAD2")
var total2 = document.getElementById("TOTAL2")

var valorProduct2 = prompt("Ingrese producto N°2")
var valorPrecio2 = parseFloat(prompt(`Ingrese precio de ${valorProduct2}`))
var valorCantidad2 = parseFloat(prompt(`Ingrese cantidad de ${valorProduct2}`))

product2.innerHTML = valorProduct2
precio2.innerHTML = valorPrecio2
cantidad2.innerHTML = valorCantidad2
total2.innerHTML = (valorPrecio2 * valorCantidad2)

//SKU3

var product3 = document.getElementById("PRODUCTO3")
var precio3 = document.getElementById("PRECIO3")
var cantidad3 = document.getElementById("CANTIDAD3")
var total3 = document.getElementById("TOTAL3")

var valorProduct3 = prompt("Ingrese producto N°3")
var valorPrecio3 = parseFloat(prompt(`Ingrese precio de ${valorProduct3}`))
var valorCantidad3 = parseFloat(prompt(`Ingrese cantidad de ${valorProduct3}`))

product3.innerHTML = valorProduct3
precio3.innerHTML = valorPrecio3
cantidad3.innerHTML = valorCantidad3
total3.innerHTML = (valorPrecio3 * valorCantidad3)

//SKU4

var product4 = document.getElementById("PRODUCTO4")
var precio4 = document.getElementById("PRECIO4")
var cantidad4 = document.getElementById("CANTIDAD4")
var total4 = document.getElementById("TOTAL4")

var valorProduct4 = prompt("Ingrese producto N°4")
var valorPrecio4 = parseFloat(prompt(`Ingrese precio de ${valorProduct4}`))
var valorCantidad4 = parseFloat(prompt(`Ingrese cantidad de ${valorProduct4}`))

product4.innerHTML = valorProduct4
precio4.innerHTML = valorPrecio4
cantidad4.innerHTML = valorCantidad4
total4.innerHTML = (valorPrecio4 * valorCantidad4)

//SKU5

var product5 = document.getElementById("PRODUCTO5")
var precio5 = document.getElementById("PRECIO5")
var cantidad5 = document.getElementById("CANTIDAD5")
var total5 = document.getElementById("TOTAL5")

var valorProduct5 = prompt("Ingrese producto N°5")
var valorPrecio5 = parseFloat(prompt(`Ingrese precio de ${valorProduct5}`))
var valorCantidad5 = parseFloat(prompt(`Ingrese cantidad de ${valorProduct5}`))

product5.innerHTML = valorProduct5
precio5.innerHTML = valorPrecio5
cantidad5.innerHTML = valorCantidad5
total5.innerHTML = (valorPrecio5 * valorCantidad5)

var totalBoleta = document.getElementById("TOTALBOLETA")

totalBoleta.innerHTML = ((valorPrecio1 * valorCantidad1) + (valorPrecio2 * valorCantidad2) + (valorPrecio3 * valorCantidad3) + (valorPrecio4 * valorCantidad4) + (valorPrecio5 * valorCantidad5)) */