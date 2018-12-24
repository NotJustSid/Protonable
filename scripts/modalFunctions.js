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
