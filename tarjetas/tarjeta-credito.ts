abstract class TarjetaCredito {
    protected _titular: string;
    protected _cvc: number;
    protected _fechaVenc: string;
    protected _numeros: number

    constructor(t: string, c: number, f: string, n: number) {
        this._titular= t;
        this._cvc= c;
        this._fechaVenc= f;
        this._numeros= n;
    }
    public verificarDigito(numeroVisa: number, numeroMastercard: number, nombreVisa: string, nombreMastercard: string): any{
        const arrayVisa : number [] = [40, 41, 45, 48, 49] 
        const arrayMastercard: number [] = [51, 52, 53, 54, 55]
        for (let i = 0; i<= arrayVisa.length; i++){
            for (let x = 0; i<= arrayMastercard.length; x++){
                if (arrayVisa[i] != numeroVisa || arrayMastercard[x] != numeroMastercard){
                    throw Error();
                }
                else{
                    console.log("Los datos ingresados no corresponden a una tarjeta visa/mastercard")
                }
            }
        }
        try {
            if (nombreVisa == "visa"){
                return `La tarjeta es: ${nombreVisa} numero: ${numeroVisa}`
            }
            else if (nombreMastercard == "mastercard"){
                return `La tarjerta es: ${nombreMastercard} numero: ${numeroVisa}`
            }
        }
        catch(error){
            console.error('La tarjeta ingresada no es visa, ni mastercard')
        }
    }
}


/*
class TarjetaCredito {
    protected _titular: string;
    protected _cvc: number;
    protected _fechaVenc: string;

    constructor(t: string, c: number, f: string) {
        this._titular= t;
        this._cvc= c;
        this._fechaVenc= f;
    }
    public verificarDigito(numeroVisa: number): any{
        const arrayVisa : number [] = [40, 41, 45, 48, 49] 
        for (let i = 0; i<= arrayVisa.length; i++){
            if (arrayVisa[i] === numeroVisa){
                console.log("esta bien")
            }
            else{
                console.log("Los datos ingresados no corresponden a una tarjeta visa")
            }
        return `el numero es ${numeroVisa}`
        }
    }
}

let tarjeta1 = new TarjetaCredito("pepe", 756, "09/25")
console.log(tarjeta1.verificarDigito(50))
*/