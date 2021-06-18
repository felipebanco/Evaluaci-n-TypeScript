import Visa from "./visa"
import MasterCard from "./masterCard"


let tarjetaVisa1 = new Visa("pepe", 752, "1564")
console.log(tarjetaVisa1.verificar(48))
console.log(tarjetaVisa1.interesYCuota(15000, 23, 6))

let tarjetaMasterCard1 = new MasterCard("juan", 545, "15666")
console.log(tarjetaMasterCard1.verificar("galicia"))
console.log(tarjetaMasterCard1.interesYCuota(25000, 18, 12))