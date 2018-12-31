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
    }
function showReplace(){
    $('#Replace').modal('show');
    
$('.modal-backdrop').removeClass("modal-backdrop");  
                    }
function showTheme(){
    $('#Theme').modal('show');
    
$('.modal-backdrop').removeClass("modal-backdrop");  
                    }
function showFont(){
    $('#FontSet').modal('show');
    
$('.modal-backdrop').removeClass("modal-backdrop");  
                    }
function showMode(){
     $('#ModeModal').modal('show');
}
function line_col(){
    
    $('#cursorPos').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
}
function newproject(){
    $('#Propath').modal('show');
}
function showUI(){
    $('#UI').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
}
function showHelp(){
    $('#Help').modal('show'); 
}
function showBook(){
    $('#BookModal').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
}