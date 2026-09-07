//-------------------------Area apresentação automatica de slides----------//
let count = 1;
document.getElementById("Radio1").checked = true;
 
//funçãozinha pra passar os slides
function nextImage(){
    count++
    if(count>4){
        count = 1;
    }

    document.getElementById("Radio"+count).checked = true;
}

setInterval(function(){
    nextImage();
}, 5000)

