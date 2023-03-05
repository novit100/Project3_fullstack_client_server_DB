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
            var temp = JSON.parse(this.data);
            document.getElementById("tPlace").innerText = temp.name;
            document.getElementById("tAddress").innerText = temp.address;
            document.getElementById("tCity").innerText = temp.city;
            document.getElementById("tType").innerText = temp.type;
            document.getElementById("tKashroot").innerText = temp.kashroot;
            document.getElementById("tArea").innerText = temp.area;
            document.getElementById("tExtra").innerText = temp.extra;
        }

        if (this.method === 'GETall') {
            for (var i = 0; i < this.data.length; i++) {
                document.getElementById("tPlace").innerText = data[i].name;
                document.getElementById("tAddress").innerText = data[i].address;
                document.getElementById("tCity").innerText = data[i].city;
                document.getElementById("tType").innerText = data[i].type;
                document.getElementById("tKashroot").innerText = data[i].kashroot;
                document.getElementById("tArea").innerText = data[i].area;
                document.getElementById("tExtra").innerText = data[i].extra;
            }
        }

        if (this.method === 'POST') {
            document.getElementById("sucsessAddPlace").innerText = "המיקום התווסף בהצלחה, תודה רבה!"
        }

    }

}