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

                var oTR = document.createElement("TR");
                oTR.id = i;
                var T;

                T = document.createElement("TD");
                T.innerText = temp.name;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.address;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.city;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.type;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.kashroot;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.area;
                oTR.appendChild(T);
                T = document.createElement("TD");
                T.innerText = temp.extra;
                oTR.appendChild(T);
                T = document.createElement("TD");
                //T.id="22";
                T.innerHTML = '<button id="'+i+'" onclick="deleteRow('+i+')"></button>';
                //   button2.id="button"+i;
                //  this.addEvent(button2);
                // button2.innerText="מחיקה";
                // T.appendChild(button2);
                oTR.appendChild(T);

                var oTBody = document.getElementById("bodyTable");
                oTBody.appendChild(oTR);
            }
        }


        if (this.method === 'POST') {
            document.getElementById("sucsessAddPlace").innerText = "המיקום התווסף בהצלחה, תודה רבה!"
        }

        if (this.method === 'DELETE') {
            //top.location.reload()
        }
    }

    // addEvent(button2) {
    //     button2.addEventListener("click", deleteRow(button2.id));
    //    }

}