function readBook(){
    var Book = document.getElementById('Book');
    Book.innerHTML = '';
    for(var i = 0; i<linesBooked.length; i++){
        Book.innerHTML+=  `<a class="list-group-item list-group-item-action" style="user-select:none;" ondblclick="editor.setCursor(${linesBooked[i]-1}, 0)">
        Line:&nbsp;&nbsp;&nbsp;
        <span class="badge badge-primary badge-pill">${linesBooked[i]}</span>
        <button type="button" class="close" onclick="deleteBookMark(${linesBooked[i]})">&times;</button>
        <br>
        ${editor.getLine(linesBooked[i]-1).substring(0, 36)}
        </a>`
    }
}
function deleteBookMark(line){
    var index = linesBooked.indexOf(line);
    if (index !== -1) linesBooked.splice(index, 1);
    readBook();
}