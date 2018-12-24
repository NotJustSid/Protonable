//showFind - Find Modal
//showReplace - Replace Modal
//showTheme - Theme Editor Modal
//showFont - Font Editor Modal
//showMode - Change Mode Modal
//line_col - Goto Modal
//newproject - Create New Project Folder Modal

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
    
$('.modal-backdrop').removeClass("modal-backdrop");  
}
function line_col(){
    
    $('#cursorPos').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");  
}
function newproject(){
    $('#Propath').modal('show');
}
