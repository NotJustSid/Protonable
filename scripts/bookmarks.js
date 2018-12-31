function readBook(){
    var Book = document.getElementById('Book');
    Book.innerHTML = '';
    for(var i = 0; i<linesBooked.length; i++){
        Book.innerHTML+=  `<a class="list-group-item list-group-item-action" style="user-select:none;" ondblclick="editor.setCursor(${linesBooked[i]-1}, 0)">
        Line:&nbsp;&nbsp;&nbsp;
        <span class="badge badge-primary badge-pill">${linesBooked[i]}</span><br>
        ${editor.getLine(linesBooked[i]-1).substring(0, 36)}
        </a>`
    }
}
