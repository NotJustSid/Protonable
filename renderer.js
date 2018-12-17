resolve = require('path').resolve;
var path = require('path');

// var firstRun = true;

function readDir(path2) {

    localStorage.setItem('prevDir', resolve(path.dirname(path2)) + '//');
    
    // if(firstRun === true){
    // localStorage.setItem('mainDir', resolve(path.dirname(path2)));
    // firstRun = false;
    // }

    fs.readdir(path2, (err, files) => {
        'use strict';
        document.getElementById('file-list').innerHTML = "";
        if (err) throw  err;
        for (let file of files) {
           fs.stat(resolve(path2)+'/'+file,(err,stats)=>{
               if(err) throw err;
               
               if(stats.isDirectory()){
               
           document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file + '//'}" ondblclick="readDir($(this).attr('id'))"><img src="img/folder.png" height="60px" class="dir"><br><span>${file}</span></li>`;
               }
             
                else {
                  document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file }" ondblclick="openthefile($(this).attr('id'))"><img src="img/file.png" height="60px"><br><span>${file}<span></li>`;
                      }
           });
        }
    });
}

function openthefile(PathToTheFile){
    fs.readFile(PathToTheFile, 'utf-8', (err, data)=>{

        if(err){
            alert(err);
            return;
            }

        editor.setValue(data);
        localStorage.setItem('lastFile', PathToTheFile);
        document.getElementById('fileInfo').innerText = path.basename(PathToTheFile);
        readDir(path.dirname(PathToTheFile));
        var extension = path.extname(PathToTheFile);
        extensionCheck(extension);
        });
        
}

function goback(){
    readDir(localStorage.getItem('prevDir'));
}

// function whatimg(filename){
//     extension = filename.split('.').pop();
//     if(extension === 'html' || extension === 'htm'){
//         return 'img/files/html.png'
//     }else if(extension === 'css'){
//         return 'img/files/css.png'
//     }
// }