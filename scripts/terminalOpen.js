function showTerminal(){
    var child_process = require('child_process');
    if(localStorage.getItem('path')===null || localStorage.getItem('path')=== undefined){
        if(localStorage.getItem('lastFile')!==undefined && localStorage.getItem('lastFile')!==null){
        child_process.exec("start cmd.exe /K cd /D" + path.dirname(localStorage.getItem('lastFile')));
        }
        else{
            child_process.exec("start cmd.exe");
        }
    }
    else{
    child_process.exec("start cmd.exe /K cd /D" + path.dirname(localStorage.getItem('path')));
    }
}