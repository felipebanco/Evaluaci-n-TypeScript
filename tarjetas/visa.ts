import TarjetaCredito from "./tarjeta-credito";

class Visa extends TarjetaCredito {

public calcularIntereses(valor: number, interes: number, cantidadCuotas: number): number{
    let interesTotal : number = (valor * interes) / 100;
    let resultado = interesTotal + valor
    let total: number = resultado / cantidadCuotas
    return total
}



const prueba = new TarjetaCredito('Felipe',258, '12/28', 2345634178966547)
console.log(prueba.calcularPago(12));