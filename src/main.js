// importaciones
import Impuestos from "./impuesto.js";
import Cliente from "./cliente.js";

document.addEventListener('DOMContentLoaded', () => {
    const formImpuestos = document.getElementById('formImpuestos');

    formImpuestos.addEventListener('submit', (e) => {
        e.preventDefault();

        // captura de datos
        const nombreCliente = document.getElementById('nombre').value;
        const montoBrutoAnual = parseFloat(document.getElementById('impuestos').value);
        const deducciones = parseFloat(document.getElementById('deducciones').value);
        // const de clases
        const impuestos = new Impuestos();
        const cliente = new Cliente(nombreCliente);

        // invocar los setters para aplicar validaciones
        impuestos.montoBrutoAnual = montoBrutoAnual;
        impuestos.deducciones = deducciones;

        // asignar el objeto impuestos al cliente
        cliente._impuesto = impuestos;
        // método calcular impuesto
        const totalImpuesto = cliente.calcularImpuesto();

        // consola para imprimir resultados}
        // console.log(`Estimado/a ${cliente.nombre}, sus impuestos a pagar son una suma de $${totalImpuesto}`);

        document.getElementById('mostrarResultado').innerHTML = `
            <h3>Resultado:</h3>
            <p>Nombre: ${cliente.nombre}</p>
            <p>Monto Bruto Anual: ${isNaN(impuestos.montoBrutoAnual) ? "Tipo de dato no numérico" : "$" + impuestos.montoBrutoAnual}</p>
            <p>Deducciones: ${isNaN(impuestos.deducciones) ? "Tipo de dato no numérico" : "$" + impuestos.deducciones}</p>
            <p>Impuesto neto a pagar: ${isNaN(totalImpuesto) ? "Imposible calcular" : "$" + totalImpuesto}</p>
        `;
    });
})





