// cuadrado
console.group('cuadrado')

const ladocuadrado = 5;
const perimetrocuadrado = ladocuadrado * 4;
const areacuadrado = ladocuadrado * ladocuadrado;

function calculartiangulo (lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.log({
    ladocuadrado,
    perimetrocuadrado,
    areacuadrado
})

console.groupEnd('cuadrado')
// traingulo

console.group('triangulo')

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5.5 ;

const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
const areatriangulo = (basetriangulo * alturatriangulo) / 2;

function calculartiangulo (lado1,lado2,base,altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log(
    {
        ladotriangulo1,
        ladotriangulo2,
        basetriangulo,
        alturatriangulo,
        perimetrotriangulo,
        areatriangulo
    }
)

console.groupEnd('triangulo')