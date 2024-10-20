export class Negociacao {
  
    constructor(
        private _data:Date,
        private _quantidade:number, 
        private _valor:number) {
    }

    /**Programação defensiva
     * Para evitar utilizar uma função do objeto Date
     */
    get data():Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get quantidade():number {
        return this._quantidade;
    }

    get valor():number {
        return this._valor;
    }

    get volume():number {
        return this._quantidade * this._valor;
    }
}