function startGit(location){
    ipcRenderer.send('asynchronous-message', ['start', location]);
}

function makeTree(){

}

function stageFile(git, file){
    git.add(file, (err)=>{
        if(err)console.log(err)
        else{
            refresh(localStorage.getItem('gitDir'));
        }
    });
}

function rmFile(git, file){
    git.rm(file, (err)=>{
        if(err)console.log(err)
        else{
            refresh(localStorage.getItem('gitDir'));
        }
    });
}

function listFilesNotStaged(git){

    document.getElementById('notStagedList').innerHTML = '';

    not_added = [];
    modified  = [];
    renamed   = [];
    staged    = [];

    git.status((err, obj)=>{
        console.log(obj);
    not_added = obj.not_added;
    modified  = obj.modified;
    renamed   = obj.renamed;
    staged    = obj.staged;
    deleted   = obj.deleted;

for(var i=0;i<not_added.length;i++){

    if(!staged.includes(not_added[i])){     
        elem =
        `<li class="list-group-item list-group-item-action stageFile">
            <span>${(not_added[i]).replace(/['"]+/g, '')}</span><br>
            <button class="badge badge-warning badge-pill">+</button>
        </li>`
    document.getElementById('notStagedList').innerHTML += elem;
    }

}

for(var i=0;i<modified.length;i++){

    if(!staged.includes(modified[i])){     
        elem =
        `<li class="list-group-item list-group-item-action stageFile">
            <span>${(modified[i]).replace(/['"]+/g, '')}</span><br>
            <button class="badge badge-info badge-pill">M</button>
        </li>`
    document.getElementById('notStagedList').innerHTML += elem;
    }

}

for(var i=0;i<renamed.length;i++){

    if(!staged.includes(renamed[i])){     
        elem =
        `<li class="list-group-item list-group-item-action stageFile">
            <span>${(renamed[i]).replace(/['"]+/g, '')}</span><br>
            <button class="badge badge-dark badge-pill">R</button>
        </li>`
    document.getElementById('notStagedList').innerHTML += elem;
    }

}

for(var i=0;i<deleted.length;i++){
    
        elem =
        `<li class="list-group-item list-group-item-action deleteFile">
            <span>${(deleted[i]).replace(/['"]+/g, '')}</span><br>
            <button class="badge badge-danger badge-pill">-</button>
        </li>`
    document.getElementById('notStagedList').innerHTML += elem;

}

for(var i=0;i<document.getElementsByClassName('stageFile').length;i++){
        let name = document.getElementsByClassName('stageFile').item(i).children[0].innerText;
        document.getElementsByClassName('stageFile').item(i).addEventListener('dblclick', ()=>{
            stageFile(git,name);
        })
}

});
}

function changeBranchName(git){
    git.status((err, obj)=>{
        document.getElementById('repoBranch').innerText = obj.current;
    });
}

function Init(path){

}

function checkTitle(){
    title = document.getElementById('commitTitle').value;

    if(title !=''){
        $('#commitBtn').removeAttr('disabled');
    }else{
        $('#commitBtn').attr('disabled', 'disabled');
    }

}

function commit(git){
    title = document.getElementById('commitTitle').value;
    message = document.getElementById('commitMessage').value;

    git.commit([title, message], (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Successfully Done');
            document.getElementById('commitTitle').value= '';
            document.getElementById('commitMessage').value = '';
            refresh(localStorage.getItem('gitDir'));
        }
    });

}