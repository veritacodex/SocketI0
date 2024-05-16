function loadHome(){
    const socket = io();
    socket.on('message', function (msg) {
        addText(msg);
    });
}

function addText(text) {
    document.getElementById("logger").value += "\n" + text;
}