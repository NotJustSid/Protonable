function fupdate() {
    var fontSize = document.getElementById("fontval").value;
    var fontFace = document.getElementById("fontval2").value;
    editor.getWrapperElement().style.fontSize = fontSize + "px";
    editor.getWrapperElement().style.fontFamily = fontFace;
    localStorage.setItem("face", fontFace);
    localStorage.setItem("size", fontSize);
    editor.refresh();
}
function tupdate(){
var theme = document.getElementById("themebtn").value;

editor.setOption("theme", theme);
localStorage.setItem("THEME", theme);
minimap.setOption("theme", editor.getOption("theme"));
minimap.refresh();
editor.refresh();
}
var navDefColor = '#146cf8';
var btmDefColor = navDefColor;
var fontDef = 'Consolas';
var fontSDef = '22px';

function uiSave(){
    var nvbrColor = document.getElementById('navBarColor').value;
    var btmbrColor = document.getElementById('btmBarColor').value;
    var nvbrhColor = document.getElementById('navBarhColor').value;
    var btmbrhColor = document.getElementById('btmBarhColor').value

    localStorage.setItem('NavHC', nvbrhColor);
    localStorage.setItem('BtmHC', btmbrhColor);
    localStorage.setItem('NavC', nvbrColor);
    localStorage.setItem('BtmC', btmbrColor);

    var navBar = document.getElementsByClassName('navy-main');
    var btmBar = document.getElementById('btm-info');

    var css1 = `<style>.navy-item:hover{ background-color: ${nvbrhColor} }</style>`;
    var css2 = `<style>.info-item:hover{ background-color: ${btmbrhColor} }</style>`;

    $('head').append(css1);
    $('head').append(css2);

    navBar[0].style.backgroundColor = nvbrColor;
    btmBar.style.backgroundColor = btmbrColor;
}

function reset(){

}