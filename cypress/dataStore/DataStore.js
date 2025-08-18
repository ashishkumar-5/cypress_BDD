class DataStore {
    constructor() {
        this.dataMap = {};
    }

    store(key, value, updateIfExists = false) {
        if (!this.dataMap.hasOwnProperty(key)) {
            this.dataMap[key] = value;
        } else if (updateIfExists) {
            this.update(key, value);
        }
    }

    get(key) {
        return this.dataMap.hasOwnProperty(key) ? this.dataMap[key] : null;
    }

    remove(key) {
        if (this.dataMap.hasOwnProperty(key)) {
            delete this.dataMap[key];
        }
    }

    update(key, value) {
        this.dataMap[key] = value;
    }

    contains(key) {
        return this.dataMap.hasOwnProperty(key);
    }

    clearAll() {
        this.dataMap = {};
    }
}

const dataStore = new DataStore();
export default dataStore;
