chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "wimax"){
        port.onMessage.addListener(function(msg) {
		document.getElementById('status').innerHTML = msg.status;
		document.getElementById('sig').innerHTML = msg.signal;
		document.getElementById('ul-val').innerHTML = msg['ul-val'];
		document.getElementById('dl-val').innerHTML = msg['dl-val'];
        });
    }
});