var btn = document.getElementById('btn');
var form = document.getElementById('form');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var data = new FormData(form);
    // data.append('customField', 'extra data');
    var req = new XMLHttpRequest();
    req.open("POST", "api/v1/file", true);
    req.onload = function(oEvent) {
        if (req.status == 200) {
            console.log('Uploaded');
        } else {
            console.log(req.status);
        }
    };
    console.log(data)
    req.send(data);
});