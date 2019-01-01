function FocusMode(focus_Mode){
    if(focus_Mode===false){
        $('.navy-main').hide();
        editor.setSize(window.innerWidth - 110.2, window.innerHeight);
        minimap.setSize(110, window.innerHeight);
        document.getElementById('block').setAttribute("style", "top:0");
        document.getElementById('FileExplorer').setAttribute("style", "display:none");
        document.getElementById('btm-info').style.display = "none";
        $('.panebtn_').hide();
    }else if(focus_Mode = true){
        minimap.setSize(110, window.innerHeight-290);
        editor.setSize(window.innerWidth - 110.2, window.innerHeight - 290);
        $('.navy-main').show();
        document.getElementById('block').removeAttribute("style");
        document.getElementById('FileExplorer').removeAttribute("style");
        document.getElementById('btm-info').style.removeProperty('display')
        $('.panebtn_').show();
    }
}
