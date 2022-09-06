
function text(yourage){

    var yourage = document.getElementById("text").value;
    
    if(yourage>17)
    {
        document.writeln("you can vote");
    }
    
    else
    {
        document.writeln("you can not vote");
    }
   
}
