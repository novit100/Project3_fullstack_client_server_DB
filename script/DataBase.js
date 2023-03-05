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
        //console.log("db get: "+this.data+" key: "+this.key);
        this.sendBackToServer();
    }

    getAllItems() {
        var record = [];
        var temp = JSON.parse(this.data);
        var j = 0;
        for (var i=0; i<localStorage.length; i++) {
            if (localStorage.key(i)!= "formData" && localStorage.key(i)!= "currentUser") {
console.log(JSON.parse(localStorage.getItem(localStorage.key(i))).type);
                if (JSON.parse(localStorage.getItem(localStorage.key(i))).type == temp.type && JSON.parse(localStorage.getItem(localStorage.key(i))).area == temp.area) {
                    record[j] = localStorage.getItem(localStorage.key(i));
                    j++;
                }
            }
        }
        this.data = record;
        console.log(record[0]);
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
        console.log("db: " + this.data);
        serverRequest.readyState = 2;
        serverRequest.sendBackToNetwork();
    }
}