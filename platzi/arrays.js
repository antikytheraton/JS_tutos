function suma(...numeros) {
    // let acum = 0
    // for (let i = 0; i < numeros.length; i++) {
    //     acum += numeros[i]
    // }
    // return acum
    return numeros.reduce(function(acum, numero) {
        acum += numero
        return acum
    }, 0)
}

function dobles(...numeros) {
    const resultado = []
    for(let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2)
    }
    return resultado
}

console.log(suma(4, 8, 12, 8976, 7))
console.log(dobles(4, 8, 12, 8976, 7))