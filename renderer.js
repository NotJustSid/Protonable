var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');

document.getElementById("newbtn").onclick() = () => {
    dialog.showSaveDialog((filename) => {

        if(filename === undefined){
            alert("Not Created");
            return;
        }

        var content = editor.getValue;

        fs.write(filename, content, (err) => {
            if(err) console.log(err);
            alert("Saved Successfully");
        })

    });
}