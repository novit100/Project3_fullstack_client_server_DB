class DB {
    constructor(method, key, data, readyState, duration) {
            this.method = method
            this.key = key
            this.data = data
            this.readyState = readyState
            this.duration = duration

    }

    getItem() {
        this.data = localStorage.getItem(this.key);
        sendBackToServer();
    }

    getAllItems() {
        var record = [];
        for (i = 0; i < localStorage.length; i++) {
            record[i] = localStorage.getItem(key[i]);
        }
        this.data = record;
        sendBackToServer();
    }

    getAllItemsAreas() {
        var record = [];
        var data= JSON.parse(this.data);
        var area=data["area"];
        for (i = 0; i < localStorage.length; i++) {
            if(JSON.parse(localStorage.getItem(i)).area===area){
                record[i] = localStorage.getItem(key[i]);
            }
        }
        console.log(record);
        this.data = record;
        sendBackToServer();
    }

    setItem() {
        localStorage.setItem(this.key, this.data);
        sendBackToServer();
    }

    deleteItem() {
        localStorage.removeItem(this.key);
        sendBackToServer();
    }

    sendBackToServer() {
        var serverRequest = new Server(this.method, this.key, this.data, this.readyState, this.duration, this.responseText);
        serverRequest.readyState=2;
        serverRequest.sendBackToNetwork();
    }
}