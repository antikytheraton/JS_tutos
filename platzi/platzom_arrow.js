const platzom = str => {
	let translation = str

	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	translation = translation.toLowerCase().endsWith("ar") ? translation.slice(0, -2) : translation

	// Si la palabra inicia con Z, se le anade "pe" al final
	translation = translation.toLowerCase().startsWith("z") ? `${translation}pe` : translation

	// Si la palabra traducida tiene 10 o mas letras,
	// se debe partir a la mitad y unir con un guion medio
	const length = translation.length
	const half = Math.round(length / 2)
	translation = length >= 10 ? `${translation.slice(0, half)}-${translation.slice(half)}` : translation

	// Si la palabra original es un palindromo,
	// ninguna regla anterior se cuenta y se devuelve
	// la misma palabra intercalando mayusculas y minusculas
	const reverse = str => str.toLowerCase().split('').reverse().join('')
	const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')
	translation = str == reverse(str) ? minMay(str) : translation


	return translation
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS