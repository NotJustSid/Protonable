function plotCommitOverview(git) {
    git.log((err, obj)=>{
        if(!err){
            let list = obj.all;
            for(var i=0;i<list.length;i++){
            elem = 
        `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start commitsList">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 innerMessage">${list[i].message}</h5>
              <small class="text-muted">
                ${list[i].author_name}on${list[i].date.substring(0, list[i].date.length-15)}
              </small>
            </div>
            <small class="text-muted">
            ${list[i].hash}
            </small>
          </a>`
          document.getElementById('Overview-Commit').innerHTML += elem;
            }
        }
    });
}