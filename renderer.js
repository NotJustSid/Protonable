resolve = require('path').resolve;
var path = require('path');
const trash = require('trash');

// var firstRun = true;

function readDir(path2) {

    localStorage.setItem('prevDir', resolve(path.dirname(path2)) + '//');
    localStorage.setItem('currentDir', path2 + '//');

    fs.readdir(path2, (err, files) => {
        'use strict';
        document.getElementById('file-list').innerHTML = "";
        if (err) throw  err;
        if(!files.length){
            document.getElementById('file-list').innerHTML = '<div id="EmptyDir">Directory Empty</div>'
        }else{
        for (let file of files) {
           fs.stat(resolve(path2)+'/'+file,(err,stats)=>{
               if(err) throw err;
            
               if(stats.isDirectory()){
               
           document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file + '//'}" ondblclick="readDir($(this).attr('id'))" class="explorerFolder"><img src="img/folder.png" height="60px"><br><span>${file}</span></li>`;
               }
             
                else {
                  document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file }" ondblclick="openthefile($(this).attr('id'))" class="explorerFile"><img src="img/file.png" height="60px"><br><span>${file}<span></li>`;
                      }
           });
        }
    }
    });
    
    //Sort Entities not lexicographically though.
    list = document.getElementById('file-list');
    entity = list.getElementsByTagName('SPAN');
    vals = [];
    for(var i=0;i<entity.length;i++){
        vals.push(entity[i]);
    }
    vals.sort();
}

function openthefile(PathToTheFile){
    fs.readFile(PathToTheFile, 'utf-8', (err, data)=>{

        if(err){
            alert(err);
            return;
            }

        editor.setValue(data);
        localStorage.setItem('lastFile', PathToTheFile);
        saveJSON();
        document.getElementById('fileInfo').innerText = path.basename(PathToTheFile);
        readDir(path.dirname(PathToTheFile));
        var extension = path.extname(PathToTheFile);
        extensionCheck(extension);
        });
        
}

function goback(){
    readDir(localStorage.getItem('prevDir'));
}

function deleteFileOrFolder(PathToTheFile){
    dialog.showMessageBox({
        type: 'none',
        icon: 'img/question-info.png',
        buttons: ['Yes', 'No'],
        message: 'Are you sure you want to delete the file/folder?',
    }, resp => {
        if (resp === 0) {
            (async () => {
                await trash(PathToTheFile);
                readDir(localStorage.getItem('currentDir'));
            })();
        }else{
            
        }
    });
}

function explorerNewFile(PathtoCreateIn){
    document.getElementById('file-list').innerHTML+=`<li id="temp" class="explorerFile"><img src="img/file.png" height="60px"><br><span><input id="fileinput" onBlur="document.getElementById('temp').remove()" type="text"></span></li>`;
    document.getElementById('fileinput').focus();
    document.getElementById("fileinput").addEventListener("keydown", function(e) {
        if (e.keyCode == 13) { 
            fs.appendFile(localStorage.getItem('currentDir')+document.getElementById('fileinput').value, '', (err)=>{
                if(err)
                console.log(err);
                else{
                    openthefile(localStorage.getItem('currentDir')+document.getElementById('fileinput').value);
                    readDir(localStorage.getItem('currentDir'));
                }
            });
        }
    }, false);
}

function explorerNewFolder(){
    document.getElementById('file-list').innerHTML+=`<li id="temp" class="explorerFolder"><img src="img/folder.png" height="60px"><br><span><input id="fileinput" onBlur="document.getElementById('temp').remove()" type="text"></span></li>`;
    document.getElementById('fileinput').focus();
    document.getElementById("fileinput").addEventListener("keydown", function(e) {
        if (e.keyCode == 13) { 
            fs.mkdir(localStorage.getItem('currentDir')+document.getElementById('fileinput').value, (err)=>{
                if(err)
                console.log(err);
                else{
                    readDir(localStorage.getItem('currentDir')+document.getElementById('fileinput').value);
                }
            });
        }
    }, false);
}
// function whatimg(filename){
//     extension = filename.split('.').pop();
//     if(extension === 'html' || extension === 'htm'){
//         return 'img/files/html.png'
//     }else if(extension === 'css'){
//         return 'img/files/css.png'
//     }
// }