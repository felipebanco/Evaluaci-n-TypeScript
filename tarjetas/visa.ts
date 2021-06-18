import TarjetaCredito from "./tarjeta-credito"

class Visa extends TarjetaCredito{
    constructor(titular: string, cvc: number, fechaVencimiento: string){
        super(titular, cvc, fechaVencimiento);
    }
    verificar(dato: any):any{
    const arrayVisa : number [] = [40, 41, 45, 48, 49] 
        for (let i in arrayVisa ){
            if ( dato == arrayVisa[0]){
                console.log(`el numero ingresado es correcto peretenece a una tarjeta visa ---> ${dato}`)
            } 
            else if (dato == arrayVisa[1]){
                console.log(`el numero ingresado es correcto peretenece a una tarjeta visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[2]){
                console.log(`el numero ingresado es correcto peretenece a una tarjeta visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[3]){
                console.log(`el numero ingresado es correcto peretenece a una tarjeta visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[4]){
                console.log(`el numero ingresado es correcto peretenece a una tarjeta visa ---> ${dato}`)
            }
            else{
                console.log("el numero no pertenece a una tarjeta visa") 
            }
        break;
        }
    }
    interesYCuota(precio: number, interes: number, cantidadCuotas: number): any{
        let valorInteres: number = (precio * interes) / 100;
        let preciofinal: number = valorInteres + precio;
        let montoMensual: number = preciofinal / cantidadCuotas;
        console.log(`El monto total a pagar es de: $${preciofinal} y las cuotas son de: $${montoMensual}`)
    }
}

export default Visa;