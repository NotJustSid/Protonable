//Save localStorage data to config.json
function saveJSON(){
    //Default DATA if not Defined.
    data = {
    Fsize: '28',
    Fface: 'Consolas',
    Theme: 'material',
    NavHC: '#16cac1',
    NavC: '#146cf8',
    BtmHC: '#242424',
    BtmC: '#146cf8'
    };
    if(!store.has('data')){
        store.set('data', data);
    }
        if(localStorage.getItem('size')!==undefined){
            store.set('data.Fsize', localStorage.getItem('size'));
        }
        if(localStorage.getItem('lastFile')!==undefined){
           store.set('data.LastFile', localStorage.getItem('lastFile')); 
        }
        if(localStorage.getItem('face')!==undefined){
            store.set('data.Fface', localStorage.getItem('face'));
        }
        if(localStorage.getItem('THEME')!==undefined){
            store.set('data.Theme', localStorage.getItem('THEME'));
        }
        if(localStorage.getItem('NavHC')!==undefined){
            store.set('data.NavHC',localStorage.getItem('NavHC'));
        }
        if(localStorage.getItem('NavC')!==undefined){
            store.set('data.NavC', localStorage.getItem('NavC'));
        }
        if(localStorage.getItem('BtmHC')!==undefined){
            store.set('data.BtmHC',localStorage.getItem('BtmHC'));
        }
        if(localStorage.getItem('BtmC')!==undefined){
            store.set('data.BtmC', localStorage.getItem('BtmC'));
        }
        if(localStorage.getItem('term')!==undefined){
            store.set('data.Term', localStorage.getItem('term'));
        }
    }
    
//load data from config.json
function loadFromJSON(){
    size    = store.get('data').Fsize;
    face    = store.get('data').Fface;
    theme   = store.get('data').Theme;
    NavHC   = store.get('data').NavHC;
    BtmHC   = store.get('data').BtmHC;
    NavC    = store.get('data').NavC;
    BtmC    = store.get('data').BtmC;
    LastFile= store.get('data').LastFile;
    Term    = store.get('data').Term;
    hover1  = document.getElementById('1');
    hover2  = document.getElementById('2');
    
    if(size){
        editor.getWrapperElement().style.fontSize = size + "px";
        localStorage.setItem('size', size);
    }
    else{
        editor.getWrapperElement().style.fontSize = 28 + "px";
        localStorage.setItem('size', '28');
    }
    if(face){
        editor.getWrapperElement().style.fontFamily = face;
        localStorage.setItem('face', face);
    }
    else{
        editor.getWrapperElement().style.fontFamily = 'Consolas';
        localStorage.setItem('face', 'Consolas');
    }
    if(theme){
        editor.setOption("theme", theme);
        localStorage.setItem('THEME', theme);
    }
    else{
        editor.setOption("theme", 'material');
        localStorage.setItem('THEME', 'material');
    }
    if(NavHC){
        hover1.innerHTML = `.navy-item:hover{ background-color: ${NavHC} }`;
        localStorage.setItem('NavHC', NavHC);
    }
    else{
        hover1.innerHTML = ".navy-item:hover{ background-color: #16cac1 }";
        localStorage.setItem('NavHC', '#16cac1');
    }
    if(NavC){
        document.getElementsByClassName('navy-main')[0].style.backgroundColor = NavC;
        localStorage.setItem('NavC', NavC);
    }
    else{
        document.getElementsByClassName('navy-main')[0].style.backgroundColor = "#146cf8";
        localStorage.setItem('NavC', '#146cf8');
    }
    if(BtmHC){
        hover2.innerHTML = `.info-item:hover{ background-color: ${BtmHC} }`;
        localStorage.setItem('BtmHC', BtmHC);
    }
    else{
        hover1.innerHTML = ".info-item:hover{ background-color: #242424 }"
        localStorage.setItem('BtmHC', '#242424')
    }
    if(BtmC){
        document.getElementById('btm-info').style.backgroundColor = BtmC;
        localStorage.setItem('BtmC', BtmC);
    }
    else{
        document.getElementById('btm-info').style.backgroundColor = "#146cf8";
        localStorage.setItem('BtmC', '#146cf8');
    }
    if(LastFile){
        localStorage.setItem('lastFile', LastFile);
    }
    if(Term){
        localStorage.setItem('lastFile', Term);
    }
    }
    