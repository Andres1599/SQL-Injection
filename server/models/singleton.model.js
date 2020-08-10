import DataBase from './data.base.js'
export default class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new DataBase();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}