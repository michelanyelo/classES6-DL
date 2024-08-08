class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    // getters
    get nombre() {
        return this._nombre;
    }

    // setters
    set nombre(value) {
        if (typeof (value) === 'string') {
            this._nombre = value;
        } else {
            console.log("El nombre debe ser de tipo string");
        }
    }

    // método calcular impuesto
    calcularImpuesto() {
        if (this._impuesto) {
            return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
        } else {
            console.log("Impuesto no definido correctamente");
            return "Imposible de calcular";
        }
    }
}

export default Cliente;