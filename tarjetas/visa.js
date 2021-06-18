"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var tarjeta_credito_1 = require("./tarjeta-credito");
var Visa = /** @class */ (function (_super) {
    __extends(Visa, _super);
    function Visa(titular, cvc, fechaVencimiento) {
        return _super.call(this, titular, cvc, fechaVencimiento) || this;
    }
    //Éste método verifica que los primeros dos dígitos de una tarjeta pertenezcan a Visa
    Visa.prototype.verificar = function (dato) {
        var arrayVisa = [40, 41, 45, 48, 49];
        for (var i in arrayVisa) {
            if (dato == arrayVisa[0]) {
                console.log("El numero ingresado es correcto pertenece a una numeraci\u00F3n de tarjeta Visa ---> " + dato);
            }
            else if (dato == arrayVisa[1]) {
                console.log("El numero ingresado es correcto pertenece a una numeraci\u00F3n de tarjeta Visa ---> " + dato);
            }
            else if (dato == arrayVisa[2]) {
                console.log("El numero ingresado es correcto pertenece a una numeraci\u00F3n de tarjeta Visa ---> " + dato);
            }
            else if (dato == arrayVisa[3]) {
                console.log("El numero ingresado es correcto pertenece a una numeraci\u00F3n de tarjeta Visa ---> " + dato);
            }
            else if (dato == arrayVisa[4]) {
                console.log("El numero ingresado es correcto pertenece a una numeraci\u00F3n de tarjeta Visa ---> " + dato);
            }
            else {
                console.log("El numero no pertenece a ninguna tarjeta Visa");
            }
            break;
        }
    };
    //El método devuelve el monto total y el mensual a pagar cada mes.
    Visa.prototype.interesYCuota = function (precio, interes, cantidadCuotas) {
        var valorInteres = (precio * interes) / 100;
        var preciofinal = valorInteres + precio;
        var montoMensual = preciofinal / cantidadCuotas;
        console.log("El monto total a pagar es de: $" + preciofinal + " y las cuotas son de: $" + montoMensual);
    };
    return Visa;
}(tarjeta_credito_1["default"]));
exports["default"] = Visa;
