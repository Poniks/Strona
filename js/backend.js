let form = document.querySelector('form');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");
    let oReq = new XMLHttpRequest();
    oReq.open("POST", "action.php", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            console.log("Uploaded!")
        } else {
            console.log("Error " + oReq.status + " occurred when trying to upload your file.")
        }
    };
     oReq.send(oData);
}, false);