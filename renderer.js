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
        if (e.keyCode == 13 && document.getElementById('fileinput').value.trim() !== '') { 
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
        if (e.keyCode == 13 && document.getElementById('fileinput').value.trim() !== '') { 
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

var full = false;
function maxFileView(){
    
    if(full === false){
    document.getElementById('goback').style.bottom = "46em";
    document.getElementById('fileSearcher').parentElement.style.bottom = "46em";
    document.getElementById('block').style.display = "none";
    document.getElementById('Mini').style.display = "none";
    document.getElementById('fileViewer').style.height = "82.2vh";
    document.getElementById('file-list').style.height = "82.2vh";
    document.getElementById('file-list').style.whiteSpace = "unset";
    document.getElementById('3').innerHTML = "#file-list>li{margin-right: 40px}"
    full = true;
    }
    else{
    document.getElementById('goback').style.bottom = "110px";
    document.getElementById('fileSearcher').parentElement.style.bottom = "110px";
    document.getElementById('block').style.display = null;
    document.getElementById('Mini').style.display = null;
    document.getElementById('fileViewer').style.height = "125px";
    document.getElementById('file-list').style.height = null;
    document.getElementById('file-list').style.whiteSpace = "nowrap";
    document.getElementById('3').innerHTML = "#file-list>li{margin-right: 80px}";
    document.getElementById('maxFileView').style.height = null;
    document.getElementById('maxFileView').style.width = null;
    full = false;
    }
}

function chooseDir(){
    dialog.showOpenDialog({ properties: ['openDirectory'] }, (path)=>{
        fs.exists(path[0], (exists)=>{
            if(exists){
                document.getElementById('dirSearcher').innerText = path[0];
                readDir(path[0]);
            }
        });
    });
}
// function whatimg(filename){
//     extension = filename.split('.').pop();
//     if(extension === 'html' || extension === 'htm'){
//         return 'img/files/html.png'
//     }else if(extension === 'css'){
//         return 'img/files/css.png'
//     }
// }