const fs = require('fs');

function readDir(path2) {
    fs.readdir(path2, (err, files) => {
        'use strict';
        if (err) throw  err;
        for (let file of files) {
           fs.stat(path2.slice(0,-1)+file,(err,stats)=>{
               if(err) throw err;
               
               if(stats.isDirectory()){
               
           document.getElementById('file-list').innerHTML += `<li><i class="fa fa-folder-open dir"></i> ${file}</li>`;
               }
             
                else {
                  document.getElementById('file-list').innerHTML += `<li><i class="fa fa-file dir"></i> ${file}</li>`;
                      }
           });
        }
    });
}

(function (){
readDir('.');
})();