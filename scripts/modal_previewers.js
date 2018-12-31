//showFind - Find Modal
//showReplace - Replace Modal
//showTheme - Theme Editor Modal
//showFont - Font Editor Modal
//showMode - Change Mode Modal
//line_col - Goto Modal
//newproject - Create New Project Folder Modal
//UI - UI Settings
function showFind(){
    $('#Find').modal('show'); 
    $('.modal-backdrop').removeClass("modal-backdrop"); 
    $('#Find').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });

    }
function showReplace(){
    $('#Replace').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#Replace').draggable({
    handle: ".modal-header",
    start: function(event, ui){
    $(ui.helper).css('width', `${ $(event.target).width() }px`);
    }
 });
    }
function showTheme(){
    $('#Theme').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#Theme').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
                    }
function showFont(){
    $('#FontSet').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
    $('#FontSet').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
                    }
function showMode(){
     $('#ModeModal').modal('show');
}
function line_col(){
    
    $('#cursorPos').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#cursorPos').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });  
}
function newproject(){
    $('#Propath').modal('show');
}
function showUI(){
    $('#UI').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#UI').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
}
function showHelp(){
    $('#Help').modal('show'); 
}
function showBook(){
    $('#BookModal').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
    $('#BookModal').draggable({
        handle: ".modal-header",
        start: function(event, ui){
           $(ui.helper).css('width', `${ $(event.target).width() }px`);
        }
     });
}