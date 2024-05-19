let index=0;
function changeColour(){
    colour=["red","blue","Yellow","green","Salmon","Aqua","Magenta","Pink","Black"];
    document.getElementsByTagName("body")[0].style.background=colour[index++];
    if(index > colour.length-1){
        index=0;
    }
}