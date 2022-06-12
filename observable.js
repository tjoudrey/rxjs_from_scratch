// Reference: https://netbasal.com/javascript-observables-under-the-hood-2423f760584

export class Observable {
    constructor(emitter){
       this._emitter = emitter
    }

    subscribe(next, error = {}, complete = {}){
        if (typeof next === "function") {
            return this._emitter({
                next, 
                error: error,
                complete: complete
            })
        }
        else {
            return this._emitter(next)
        }
    }
}