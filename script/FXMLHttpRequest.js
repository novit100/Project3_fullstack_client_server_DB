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
            var temp = JSON.parse(this.data[0]);
            document.getElementById("tPlace").innerText = temp.name;
            document.getElementById("tAddress").innerText = temp.address;
            document.getElementById("tCity").innerText = temp.city;
            document.getElementById("tType").innerText = temp.type;
            document.getElementById("tKashroot").innerText = temp.kashroot;
            document.getElementById("tArea").innerText = temp.area;
            document.getElementById("tExtra").innerText = temp.extra;

            for (var i = 1; i < this.data.length; i++) {
                var temp = JSON.parse(this.data[i]);
                var oTR=document.createElement("TR");
                var T=document.createElement("tPlace");
                T.innerText = temp.name;
                oTR.appendChild(T);
                document.createElement("tAddress").innerText = temp.address;
                document.createElement("tCity").innerText = temp.city;
                document.createElement("tType").innerText = temp.type;
                document.createElement("tKashroot").innerText = temp.kashroot;
                document.createElement("tArea").innerText = temp.area;
                document.createElement("tExtra").innerText = temp.extra;
                var oTBody=document.getElementById("bodyTable");
                oTBody.appendChild(oTR);
            } 
        }


        if (this.method === 'POST') {
            document.getElementById("sucsessAddPlace").innerText = "המיקום התווסף בהצלחה, תודה רבה!"
        }

    }

}