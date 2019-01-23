function showTerminal(){
    var child_process = require('child_process');

    loadFromJSON();

if(!fs.existsSync(localStorage.getItem('term'))){

    if(localStorage.getItem('currentDir')===null || localStorage.getItem('currentDir')=== undefined){

        if(localStorage.getItem('prevDir')!==undefined && localStorage.getItem('prevDir')!==null){

        child_process.exec("start cmd.exe /K cd /D" + localStorage.getItem('prevDir'));

        }
        else{
            child_process.exec("start cmd.exe");
            }
    }
    else{
    child_process.exec("start cmd.exe /K cd /D" + localStorage.getItem('currentDir'));
    }
}
else{
    child_process.exec("start " + localStorage.getItem('term'));  
    }
}