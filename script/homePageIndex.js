
var data = {};
var data1;
var key;
var time;

function addPlace() {
    data.key = document.forms["myForm"]["name"].value + document.forms["myForm"]["city"].value;
    data.address = document.forms["myForm"]["address"].value;
    data.name = document.forms["myForm"]["name"].value;
    data.city = document.forms["myForm"]["city"].value;
    data.kashroot = document.forms["myForm"]["kashroot"].value;
    data.extra = document.forms["myForm"]["extra"].value;
    data.type = document.forms["myForm"]["type"].value;
    data.area = document.forms["myForm"]["area"].value;
    /* /קיים בדיקה אם המפתח ייחודי*/
    data1 = JSON.stringify(data);

    console.log(data1);
    key = data.key;
    time=new time();

    var newRequest = new FXMLHttpRequest('GET', key, data1, 0, time);
    newRequest.sendWIthNetwork();
}


/**
 readyState-
 Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready */


/**for template */
var pageNow;
var temp;
var clon;

function showContent(area) {
    if (area === 'north' && pageNow != 'north') {
        pageNow = 'north'
        temp = document.getElementById("template_north");
        /*   document.body.removeChild(document.body.lastChild);*/
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (area === 'south' && pageNow != 'south') {
        pageNow = 'south';
        temp = document.getElementById("template_south");
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (area === 'center' && pageNow != 'center') {
        pageNow = 'center';
        temp = document.getElementById("template_center");
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (area === 'jerusalem' && pageNow != 'jerusalem') {
        pageNow = 'jerusalem';
        temp = document.getElementById("template_jerusalem");
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (area === 'addNewPlace' && pageNow != 'addNewPlace') {
        pageNow = 'addNewPlace';
        temp = document.getElementById("template_addPlace");
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}