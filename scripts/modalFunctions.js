function fupdate() {
    var fontSize = document.getElementById("fontval").value;
    var fontFace = document.getElementById("fontval2").value;
    editor.getWrapperElement().style.fontSize = fontSize + "px";
    editor.getWrapperElement().style.fontFamily = fontFace;
    localStorage.setItem("face", fontFace);
    localStorage.setItem("size", fontSize);
    saveJSON();
    editor.refresh();
}
function tupdate(){
var theme = document.getElementById("themebtn").value;

editor.setOption("theme", theme);
localStorage.setItem("THEME", theme);
saveJSON();
minimap.setOption("theme", editor.getOption("theme"));
minimap.refresh();
editor.refresh();
}

function uiSave(){
    var nvbrColor = document.getElementById('navBarColor').value;
    var btmbrColor = document.getElementById('btmBarColor').value;
    var nvbrhColor = document.getElementById('navBarhColor').value;
    var btmbrhColor = document.getElementById('btmBarhColor').value

    localStorage.setItem('NavHC', nvbrhColor);
    localStorage.setItem('BtmHC', btmbrhColor);
    localStorage.setItem('NavC', nvbrColor);
    localStorage.setItem('BtmC', btmbrColor);
    saveJSON();

    var navBar = document.getElementsByClassName('navy-main');
    var btmBar = document.getElementById('btm-info');

    var hover1 = document.getElementById('1');
    var hover2 = document.getElementById('2');
    hover1.innerHTML = `.navy-item:hover{ background-color: ${nvbrhColor} }`;
    hover2.innerHTML = `.info-item:hover{ background-color: ${btmbrhColor} }`;

    navBar[0].style.backgroundColor = nvbrColor;
    btmBar.style.backgroundColor = btmbrColor;
}

function reset(){
}

function termSave(){
    localStorage.setItem('term', document.getElementById('termloc').value);
    saveJSON();
}