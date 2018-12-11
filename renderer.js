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
               
           document.getElementById('file-list').innerHTML += `<li id="${resolve(path2) + '/' + file + '//'}" onmousedown="readDir($(this).attr('id'))"><i class="fa fa-folder-open dir"></i> ${file}</li>`;
               }
             
                else {
                  document.getElementById('file-list').innerHTML += `<li><i class="fa fa-file dir"></i> ${file}</li>`;
                      }
           });
        }
    });
}
