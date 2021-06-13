
class TarjetaCredito {
    protected _titular: string;
    protected _cvc: string;
    protected _fechaVenc: string;
    protected _numeros: number

    constructor(t: string, c: string, f: string, n: number) {
        this._titular= t;
        this._cvc= c;
        this._fechaVenc= f ;
        this._numeros= n
    }
}

export default TarjetaCredito;