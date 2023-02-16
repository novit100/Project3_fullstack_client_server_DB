class FXMLHttpRequest {

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
        this.sendWIthNetwork()
    }

    sendWIthNetwork() {
        var netRequest = new Network(this.method, this.key, this.data, this.readyState, this.duration);
        netRequest.sendToServer();
    }

    onload(){

    }

}