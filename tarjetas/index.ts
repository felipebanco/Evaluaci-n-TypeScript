import Visa from "./visa"
import MasterCard from "./masterCard"


let tarjetaVisa1 = new Visa("Juan Carlos", 752, "05/23")
console.log(tarjetaVisa1.verificar(48))
console.log(tarjetaVisa1.verificar(23))
console.log(tarjetaVisa1.interesYCuota(15000, 23, 6))

let tarjetaMasterCard1 = new MasterCard("Martin Ramirez", 545, "06/24")
console.log(tarjetaMasterCard1.verificar("Galicia"))
console.log(tarjetaMasterCard1.verificar('Nación'))
console.log(tarjetaMasterCard1.interesYCuota(25000, 18, 12))