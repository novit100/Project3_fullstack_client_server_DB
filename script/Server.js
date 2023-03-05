class Server {
    constructor(method, key, data, readyState, duration) {
        this.method = method
        this.key = key
        this.data = data
        this.readyState = readyState
        this.duration = duration

    }

    open() {
        var dbRequest = new DB(this.method, this.key, this.data, this.readyState, this.duration);
        dbRequest.readyState = 1;
        console.log("server get: "+" key: "+this.key);

        if (this.method === 'GET') {
            dbRequest.getItem();
        }

        if (this.method === 'GETall') {
            dbRequest.getAllItems();
        }

        if (this.method === "POST") {
            dbRequest.setItem();
        }

        if (this.method === 'PUT') {
            dbRequest.setItem();
        }
        if (this.method === 'DELETE') {
            dbRequest.deleteItem();
        }
    }

    sendBackToNetwork() {
        var netRequest = new Network(this.method, this.key, this.data, this.readyState, this.duration, this.responseText);
        netRequest.readyState = 3;
        netRequest.sendBackToFxmlHttp();
    }
}