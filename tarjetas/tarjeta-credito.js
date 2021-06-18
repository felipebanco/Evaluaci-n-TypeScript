"use strict";
exports.__esModule = true;
var TarjetaCredito = /** @class */ (function () {
    function TarjetaCredito(titular, cvc, fechaVencimiento) {
        this._titular = titular;
        this._cvc = cvc;
        this._fechaVenc = fechaVencimiento;
    }
    return TarjetaCredito;
}());
exports["default"] = TarjetaCredito;
