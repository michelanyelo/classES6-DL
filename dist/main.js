"use strict";

require("core-js/modules/es.parse-float.js");
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// importaciones

document.addEventListener('DOMContentLoaded', function () {
  var formImpuestos = document.getElementById('formImpuestos');
  formImpuestos.addEventListener('submit', function (e) {
    e.preventDefault();

    // captura de datos
    var nombreCliente = document.getElementById('nombre').value;
    var montoBrutoAnual = parseFloat(document.getElementById('impuestos').value);
    var deducciones = parseFloat(document.getElementById('deducciones').value);
    // const de clases
    var impuestos = new _impuesto["default"]();
    var cliente = new _cliente["default"](nombreCliente);

    // invocar los setters para aplicar validaciones
    impuestos.montoBrutoAnual = montoBrutoAnual;
    impuestos.deducciones = deducciones;

    // asignar el objeto impuestos al cliente
    cliente._impuesto = impuestos;
    // método calcular impuesto
    var totalImpuesto = cliente.calcularImpuesto();

    // consola para imprimir resultados}
    // console.log(`Estimado/a ${cliente.nombre}, sus impuestos a pagar son una suma de $${totalImpuesto}`);

    document.getElementById('mostrarResultado').innerHTML = "\n            <h3>Resultado:</h3>\n            <p>Nombre: ".concat(cliente.nombre, "</p>\n            <p>Monto Bruto Anual: ").concat(isNaN(impuestos.montoBrutoAnual) ? "Tipo de dato no numérico" : "$" + impuestos.montoBrutoAnual, "</p>\n            <p>Deducciones: ").concat(isNaN(impuestos.deducciones) ? "Tipo de dato no numérico" : "$" + impuestos.deducciones, "</p>\n            <p>Impuesto neto a pagar: ").concat(isNaN(totalImpuesto) ? "Imposible calcular" : "$" + totalImpuesto, "</p>\n        ");
  });
});