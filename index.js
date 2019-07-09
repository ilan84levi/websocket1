var socket; // נקודת הקשה של קו התקשורת


function connect() {
    socket = new WebSocket("ws://html5rocks.websocket.org/echo")

    socket.onopen = function () { // what to do on connect
        document.getElementById("myDiv").innerText = "we are connected";
    };

    socket.onerror = function (error) { // what to do on error
        document.getElementById("myDiv").innerText = "error" + error;
    };

    socket.onclose = function () { // what to do on disconnecting
        document.getElementById("myDiv").innerText = "we are disconnected :-(";
    };
// what to do when we get connection with the server
    socket.onmessage = function (event) {
        document.getElementById("myDiv").innerText = event.data;
    };
}

function disconnect() {
socket.close();
}


function send() {
var text = document.getElementById("myText").value;
if(text != ""){
    socket.send(text);
    document.getElementById("myText").value = "";
}
document.getElementById("myText").focus();
}
