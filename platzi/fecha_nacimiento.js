// 21 de septiembre de 1990
// 21 09 1990

const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]

const nacimiento = new Date(1990, 8, 21)
console.log(nacimiento)

const hoy = new Date()
console.log(hoy)

const tiempo = hoy - nacimiento
console.log(`Tiempo millis = ${tiempo}`)

const tiempoSegundos = tiempo / 1000
console.log(`Tiempo segs = ${tiempoSegundos}`)

const tiempoMin = tiempoSegundos / 60
console.log(`Tiempo mins = ${tiempoMin}`)

const tiempoHoras = tiempoMin / 60
console.log(`Tiempo horas = ${tiempoHoras}`)

const tiempoDias = tiempoHoras / 24
console.log(`Tiempo dias = ${tiempoDias}`)

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(`Dia de mi proximo cumple => ${diasSemana[proximoCumple.getDay()]}`)