import TarjetaCredito from "./tarjeta-credito";

class Mastercard extends TarjetaCredito{
    constructor(titular: string, cvc: number, fechaVencimiento: string){
        super(titular, cvc, fechaVencimiento);
    }
    verificar(banco: string ): any{
    const Arraybancos: string [] = ["galicia", "frances", "santander"]
        for (let p in Arraybancos){
            if (banco == Arraybancos[0]){
                console.log(`La tarjeta MasterCard pertenece al banco ingresado: ${banco} `)
            }
            else if (banco == Arraybancos[1]){  
                console.log(`La tarjeta MasterCard pertenece al banco ingresado: ${banco} `)
            }
            else if (banco == Arraybancos[2]){
                console.log(`La tarjeta MasterCard pertenece al banco ingresado: ${banco} `)
            }
            else {
                console.log(`La tarjeta MasterCard no pertenece al banco ingresado`)
            }
        break;
        }
    }
    interesYCuota(precio: number, interes: number, cantidadCuotas: number): any{
        let valorInteres: number = (precio * interes) / 100;
        let preciofinal: number = valorInteres + precio
        console.log(`El valor a pagar es de: $${precio} + $${valorInteres} de interes `)
    }
}

export default Mastercard;