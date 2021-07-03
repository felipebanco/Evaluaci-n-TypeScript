import TarjetaCredito from "./tarjeta-credito";

class Mastercard extends TarjetaCredito{
    constructor(titular: string, cvc: number, fechaVencimiento: string){
        super(titular, cvc, fechaVencimiento);
    }
    //Él metodo verifica que la tarjeta perteneza a uno de los siguientes Bancos.
    verificar(banco: string ): any{
    const Arraybancos: string [] = ["Galicia", "Francés", "Santander"]
        for (let p in Arraybancos){
            if (banco == Arraybancos[0]){
                console.log(`La tarjeta MasterCard pertenece al banco: ${banco} `)
            }
            else if (banco == Arraybancos[1]){  
                console.log(`La tarjeta MasterCard pertenece al banco: ${banco} `)
            }
            else if (banco == Arraybancos[2]){
                console.log(`La tarjeta MasterCard pertenece al banco: ${banco} `)
            }
            else {
                console.log(`La tarjeta MasterCard no pertenece al banco ingresado`)
            }
        break;
        }
    }
    //El método devuelve el monto y el interés total.
    interesYCuota(precio: number, interes: number): any{
        let valorInteres: number = (precio * interes) / 100;
        let preciofinal: number = valorInteres + precio
        console.log(`El valor a pagar es de: $${precio} + $${valorInteres} de interes = ${preciofinal} `)
    }
}

export default Mastercard;