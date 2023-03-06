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
        this.sendBackToServer();
    }

    getAllItems() {
        var record = [];
        var temp = JSON.parse(this.data);
        var j = 0;
        for (var i=0; i<localStorage.length; i++) {
            if (localStorage.key(i)!= "formData" && localStorage.key(i)!= "currentUser") {
                if (JSON.parse(localStorage.getItem(localStorage.key(i))).type == temp.type && JSON.parse(localStorage.getItem(localStorage.key(i))).area == temp.area) {
                    record[j] = localStorage.getItem(localStorage.key(i));
                    j++;
                }
            }
        }
        this.data = record;
        this.sendBackToServer();
    }

    getAllItemsAreas() {
        var record = [];
        var data = JSON.parse(this.data);
        var area = data["area"];
        for (i = 0; i < localStorage.length; i++) {
            if (JSON.parse(localStorage.getItem(i)).area === area) {
                record[i] = localStorage.getItem(key[i]);
            }
        }
        this.data = record;
        this.sendBackToServer();
    }

    setItem() {
        localStorage.setItem(this.key, this.data);
        this.sendBackToServer();
    }

    deleteItem() {
        localStorage.removeItem(this.key);
        this.sendBackToServer();
    }

    sendBackToServer() {
        var serverRequest = new Server(this.method, this.key, this.data, this.readyState, this.duration, this.responseText);
        serverRequest.readyState = 2;
        serverRequest.sendBackToNetwork();
    }
}