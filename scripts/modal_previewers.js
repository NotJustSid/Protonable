//showFind - Find Modal
//showReplace - Replace Modal
//showTheme - Theme Editor Modal
//showFont - Font Editor Modal
//showMode - Change Mode Modal
//line_col - Goto Modal
//newproject - Create New Project Folder Modal
//UI - UI Settings
//showTerminalChanger - Terminal Location Saver Modal

function showFind(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#Find').modal('show'); 
    $('.modal-backdrop').removeClass("modal-backdrop"); 
    $('#Find').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
     
    }
function showReplace(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-560;
    $('#Replace').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#Replace').draggable({
    handle: ".modal-header",
    containment: [0,0,WidthDrag,HeightDrag],
    start: function(event, ui){
    $(ui.helper).css('width', `${ $(event.target).width() }px`);
    }
 });
    }
function showTheme(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-760;
    $('#Theme').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#Theme').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
                    }
function showFont(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#FontSet').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#FontSet').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
                    }
function showMode(){
     $('#ModeModal').modal('show');
}
function line_col(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#cursorPos').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#cursorPos').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });  
}
function newproject(){
    $('#Propath').modal('show');
}
function showUI(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#UI').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#UI').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
}
function showHelp(){
    $('#Help').modal('show'); 
}
function showBook(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#BookModal').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#BookModal').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
}
function showTerminalChanger(){
   var WidthDrag  = window.innerWidth;
   var HeightDrag = window.innerHeight-360;
    $('#TerminalLoc').modal('show'); 
    $('.modal-backdrop').removeClass("modal-backdrop"); 
    $('#TerminalLoc').draggable({
        handle: ".modal-header",
        containment: [0,0,WidthDrag,HeightDrag],
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
     
    }