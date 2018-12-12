resolve = require('path').resolve;

function readDir(path2) {
    fs.readdir(path2, (err, files) => {
        'use strict';
        document.getElementById('file-list').innerHTML = "";
        if (err) throw  err;
        for (let file of files) {
           fs.stat(path2.slice(0,-1)+file,(err,stats)=>{
               if(err) throw err;
               
               if(stats.isDirectory()){
               
           document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file + '//'}" ondblclick="readDir($(this).attr('id'))"><img src="img/folder.png" height="60px" class="dir"><br>${file}</li>`;
               }
             
                else {
                  document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file }" ondblclick="openthefile($(this).attr('id'))"><i class="fa fa-file dir"></i><br>${file}</li>`;
                      }
           });
        }
    });
}

function openthefile(pathtofile){
    fs.readFile(pathtofile, 'utf-8', (err, data)=>{

        if(err){
            alert(err);
            return;
            }

        editor.setValue(data);
        document.getElementById('fileInfo').innerText = pathtofile.replace(/^.*(\\|\/|\:)/, '');
        var extension = pathtofile.split('.').pop();
        extensionCheck(extension);
        });
        
}