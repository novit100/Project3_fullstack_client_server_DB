
var data = {};
var data1;
var key;

function addPlace() {
    data.key = document.forms["myForm"]["name"].value + document.forms["myForm"]["address"].value + document.forms["myForm"]["city"].value;
    data.address = document.forms["myForm"]["address"].value;
    data.name = document.forms["myForm"]["name"].value;
    data.city = document.forms["myForm"]["city"].value;
    data.kashroot = document.forms["myForm"]["kashroot"].value;
    data.extra = document.forms["myForm"]["extra"].value;
    data.type = document.forms["myForm"]["type"].value;
    data.area = document.forms["myForm"]["area"].value;
    /* /קיים בדיקה אם המפתח ייחודי*/
    data1 = JSON.stringify(data);

    key = data.key;
    const d = new Date()
    let time = d.getTime();

    var newRequest = new FXMLHttpRequest("POST", key, data1, 0, time);
    newRequest.sendWIthNetwork();
}

function getPlace() {
    key = document.forms["GetForm"]["nameGet"].value + document.forms["GetForm"]["addressGet"].value + document.forms["GetForm"]["cityGet"].value;

    const d = new Date()
    let time = d.getTime();
    console.log(data1);
    var newRequest = new FXMLHttpRequest('GET', key, data1, 0, time);
    newRequest.sendWIthNetwork();
}

function getAllPlaces() {
    data.type = document.forms["GetAllForm"]["typeGetAll"].value;
    data.area = document.forms["GetAllForm"]["areaGetAll"].value;
    data1 = JSON.stringify(data);
    const d = new Date()
    let time = d.getTime();
    var newRequest = new FXMLHttpRequest('GETall', key, data1, 0, time);
    newRequest.sendWIthNetwork();
}

function deleteRow(id) {
  /*  key = document.forms["GetForm"]["nameGet"].value + document.forms["GetForm"]["addressGet"].value + document.forms["GetForm"]["cityGet"].value;

    const d = new Date()
    let time = d.getTime();
    console.log(data1);
    var newRequest = new FXMLHttpRequest('DELETE', key, data1, 0, time);
    newRequest.sendWIthNetwork();
*/
var tr = checkbox.parentNode.parentNode.parentNode; 

    var temp = tr.children;
    var key = temp[0].innerHTML + temp[1].innerHTML + temp[2].innerHTML;
    console.log("row in table: " + key);
    document.getElementById("tableGET").deleteRow(tr.id);

    const d = new Date()
    let time = d.getTime();
    var newRequest = new FXMLHttpRequest('DELETE', key, data1, 0, time);
    newRequest.sendWIthNetwork();

}


/*    function deleteRow(id) {
    var selectedRows = getCheckedBoxes();

    selectedRows.forEach(function (currentValue) {
        deleteRowByCheckboxId(currentValue.id);
    });

}

function deleteRowByCheckboxId(CheckboxId) {
    var checkbox = document.getElementById(CheckboxId);
    var tr = checkbox.parentNode.parentNode.parentNode; 
    console.log(tr.id);
    console.log(CheckboxId);
    var temp = tr.children;
    var key = temp[0].innerHTML + temp[1].innerHTML + temp[2].innerHTML;
    console.log("row in table: " + key);
    document.getElementById("tableGET").deleteRow(tr.id);

    const d = new Date()
    let time = d.getTime();
    var newRequest = new FXMLHttpRequest('DELETE', key, data1, 0, time);
    newRequest.sendWIthNetwork();
}

function getCheckedBoxes() {
    var inputs = document.getElementsByTagName("input");
    var checkboxesChecked = [];

    for (var i = 0; i < inputs.length; i++) {
        // And stick the checked ones onto an array...
        if (inputs[i].checked) {
            checkboxesChecked.push(inputs[i]);
        }
    }
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}
*/

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

function showContent(buttonID) {
    if (buttonID === 'north' && pageNow != 'north') {
        pageNow = 'north';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_north");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (buttonID === 'south' && pageNow != 'south') {
        pageNow = 'south';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_south");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (buttonID === 'center' && pageNow != 'center') {
        pageNow = 'center';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_center");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (buttonID === 'jerusalem' && pageNow != 'jerusalem') {
        pageNow = 'jerusalem';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_jerusalem");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    if (buttonID === 'addNewPlace' && pageNow != 'addNewPlace') {
        pageNow = 'addNewPlace';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_addPlace");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }

    if (buttonID === 'sign-out' && pageNow != 'sign-out') {
        pageNow = 'sign-out';
        document.getElementById("home_div").className = "hide";
        temp = document.getElementById("template_sign_in");
        document.body.removeChild(document.body.lastElementChild);
        clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }

    if (buttonID === 'home-page' && pageNow != 'home-page') {
        pageNow = 'home-page';
        document.body.removeChild(document.body.lastElementChild);
        document.getElementsByClassName("hide").className = "home_div_class";
    }
}