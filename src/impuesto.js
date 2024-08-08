class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // getters
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // setters
    set montoBrutoAnual(value) {
        if (typeof (value) === 'number') {
            this._montoBrutoAnual = value;
        } else {
            this._montoBrutoAnual = NaN;
        }
    }

    set deducciones(value) {
        if (typeof (value) === 'number') {
            this._deducciones = value;
        } else {
            this._deducciones = NaN;
        }
    }
}

export default Impuestos;