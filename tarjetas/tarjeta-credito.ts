abstract class TarjetaCredito {
    protected _titular: string;
    protected _cvc: number;
    protected _fechaVenc: string;

    constructor(titular: string, cvc: number, fechaVencimiento: string, ) {
        this._titular= titular;
        this._cvc= cvc;
        this._fechaVenc= fechaVencimiento;
    }
    abstract verificar(dato?: any, banco? : string): any
    abstract interesYCuota(precio: number, interes: number, cantidadCuotas?: number): any 
}

export default TarjetaCredito; 
