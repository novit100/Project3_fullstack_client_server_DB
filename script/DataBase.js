class DB {
    constructor(args) {
        if (args) {
            let { method, key, data, readyState, duration
            } = args

            this.method = method
            this.key = key
            this.data = data
            this.readyState = readyState
            this.duration = duration
            this.responseText="";
        }

    }

    getItem() {

        this.responseText = localStorage.getItem(this.key);
    }

    getAllItems() {
        var record = [];
        for (i = 0; i < localStorage.length; i++) {
            record[i] = localStorage.getItem(key[i]);
        }
        this.responseText = record;
    }

    setItem() {
        localStorage.setItem(this.key, this.data);
    }

    deleteItem() {
        localStorage.removeItem(this.key);
    }

    sendBackToServer() {
        var serverRequest = new Server(this.method, this.key, this.data, this.readyState, this.duration, this.responseText);
        serverRequest.readyState=2;
        serverRequest.sendBackToNetwork();
    }
}