var lastPos = null, lastQuery = null, marked = [];
function unmark() {
  for (var i = 0; i < marked.length; ++i) marked[i];
  marked.length = 0;
}
function search(string) {
  unmark();                     
  var text = document.getElementById(string).value;
  if (!text) return;
  var cursor = editor.getSearchCursor(text|| editor.getCursor());
  if (!cursor.findNext()) {
    cursor = editor.getSearchCursor(text);
    if (!cursor.findNext()) return;
  }
  editor.setSelection(cursor.from(), cursor.to());
  editor.refresh();
}
function search2(string) {
  unmark();                     
  var text = document.getElementById(string).value;
  if (!text) return;
  if (lastQuery != text) lastPos = null;
  var cursor = editor.getSearchCursor(text, lastPos || editor.getCursor());
  if (!cursor.findNext()) {
    cursor = editor.getSearchCursor(text);
    if (!cursor.findNext()) return;
  }
  editor.setSelection(cursor.from(), cursor.to());
  lastQuery = text; lastPos = cursor.to();

  editor.refresh();
}
function replace() {
  unmark();
  var text = document.getElementById("query2").value,
      replace = document.getElementById("replace").value;
  if (!text) return;
  for (var cursor = editor.getSearchCursor(text); cursor.findNext();)
    editor.replaceRange(replace, cursor.from(), cursor.to());
}
function replace2() {
  unmark();
  var text = document.getElementById("query2").value,
      replace = document.getElementById("replace").value;
  if (!text) return;
    editor.replaceSelection(replace);
}
