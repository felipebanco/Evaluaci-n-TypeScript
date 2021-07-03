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
var Mastercard = /** @class */ (function (_super) {
    __extends(Mastercard, _super);
    function Mastercard(titular, cvc, fechaVencimiento) {
        return _super.call(this, titular, cvc, fechaVencimiento) || this;
    }
    //Él metodo verifica que la tarjeta perteneza a uno de los siguientes Bancos.
    Mastercard.prototype.verificar = function (banco) {
        var Arraybancos = ["Galicia", "Francés", "Santander"];
        for (var p in Arraybancos) {
            if (banco == Arraybancos[0]) {
                console.log("La tarjeta MasterCard pertenece al banco: " + banco + " ");
            }
            else if (banco == Arraybancos[1]) {
                console.log("La tarjeta MasterCard pertenece al banco: " + banco + " ");
            }
            else if (banco == Arraybancos[2]) {
                console.log("La tarjeta MasterCard pertenece al banco: " + banco + " ");
            }
            else {
                console.log("La tarjeta MasterCard no pertenece al banco ingresado");
            }
            break;
        }
    };
    //El método devuelve el monto y el interés total.
    Mastercard.prototype.interesYCuota = function (precio, interes) {
        var valorInteres = (precio * interes) / 100;
        var preciofinal = valorInteres + precio;
        console.log("El valor a pagar es de: $" + precio + " + $" + valorInteres + " de interes = " + preciofinal + " ");
    };
    return Mastercard;
}(tarjeta_credito_1["default"]));
exports["default"] = Mastercard;
