class Network {
    constructor(args) {
        if (args) {
            let { method, key, data, readyState, duration
            } = args

            this.method = method
            this.key = key
            this.data = data
            this.readyState = readyState
            this.duration = duration
        }
        this.sendToServer()
    }

    sendToServer() {
        var serverRequest = new Server(this.method, this.key, this.data, this.readyState, this.duration);
        serverRequest.open();
    }

    sendBackToFxmlHttp() {
        var newRequest = new FXMLHttpRequest(this.method, this.key, this.data, this.readyState, this.duration, this.responseText);
        newRequest.onload();
    }
}