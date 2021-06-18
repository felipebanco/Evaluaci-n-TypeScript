import TarjetaCredito from "./tarjeta-credito"

class Visa extends TarjetaCredito{
    constructor(titular: string, cvc: number, fechaVencimiento: string){
        super(titular, cvc, fechaVencimiento);
    }
    //Éste método verifica que los primeros dos dígitos de una tarjeta pertenezcan a Visa
    verificar(dato: any):any{
    const arrayVisa : number [] = [40, 41, 45, 48, 49] 
        for (let i in arrayVisa ){
            if ( dato == arrayVisa[0]){
                console.log(`El numero ingresado es correcto pertenece a una numeración de tarjeta Visa ---> ${dato}`)
            } 
            else if (dato == arrayVisa[1]){
                console.log(`El numero ingresado es correcto pertenece a una numeración de tarjeta Visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[2]){
                console.log(`El numero ingresado es correcto pertenece a una numeración de tarjeta Visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[3]){
                console.log(`El numero ingresado es correcto pertenece a una numeración de tarjeta Visa ---> ${dato}`)
            }
            else if (dato == arrayVisa[4]){
                console.log(`El numero ingresado es correcto pertenece a una numeración de tarjeta Visa ---> ${dato}`)
            }
            else{
                console.log("El numero no pertenece a ninguna tarjeta Visa") 
            }
        break;
        }
    }
    //El método devuelve el monto total y el mensual a pagar cada mes.
    interesYCuota(precio: number, interes: number, cantidadCuotas: number): any{
        let valorInteres: number = (precio * interes) / 100;
        let preciofinal: number = valorInteres + precio;
        let montoMensual: number = preciofinal / cantidadCuotas;
        console.log(`El monto total a pagar es de: $${preciofinal} y las cuotas son de: $${montoMensual}`)
    }
}

export default Visa;