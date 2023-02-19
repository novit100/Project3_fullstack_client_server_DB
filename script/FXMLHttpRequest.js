class FXMLHttpRequest {

    constructor(method, key, data, readyState, duration) {
        this.method = method
        this.key = key
        this.data = data
        this.readyState = readyState
        this.status = 0;
        this.duration = duration

    }

    sendWIthNetwork() {
        var netRequest = new Network(this.method, this.key, this.data, this.readyState, this.duration);
        netRequest.sendToServer();
    }

    onload() {
        this.readyState = 4;
        const d = new Date()
        let timeNow = d.getTime();
        this.duration = timeNow - this.duration;

        if (this.method === 'GET') {

        }

        if (this.method === 'GETall') {

        }

        if (this.method === 'POST') {
            document.getElementById("sucsessAddPlace").innerText = "המיקום התווסף בהצלחה, תודה רבה!"
        }

    }

}