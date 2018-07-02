$(document).ready(function(){
    $(".mdeditor").append("<div class='mddocs'></div><div class='mdhtml'></div>");
    $(".mdeditor>.mddocs").append(
        "<textarea class='mddocs-val' placeholder='Start markdown writing...' name='mdbody'></textarea>");
    $(".mdeditor>.mdhtml").append("<div class='mdhtml-val'></div>");
    var ds = $(".mdeditor>.mddocs>.mddocs-val");
    var hl = $(".mdeditor>.mdhtml>.mdhtml-val");
    ds.on('input',function(){
        hl.html(marked(ds.val()));
        })  
    })



