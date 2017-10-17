const starWars7 = 'Star Wars: El despertar de la Fuerza',
		pgStarWars7 = 13,
		nameAaron = 'Aaron',
		ageAaron = 26,
		nameSan = 'San';

let ageSan = 12

const canWatchSW7 = (name, age, isWithAdult = false) => {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`)
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}. \nAunque su edad es ${age}, se encuentra acompanad@ por un adulto`)
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}. \nTiene ${age} anios y necesita tener ${pgStarWars7}`)
	}
}

canWatchSW7(nameAaron, ageAaron)
canWatchSW7(nameSan, ageSan, true)
ageSan = 18
canWatchSW7(nameSan, ageSan)