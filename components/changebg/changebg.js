//слайдер изменяющий классы у #sliderBg
function changeBg(curNumber){
    curNumber++;
    if(curNumber > 3){
        curNumber = 1;
    }
    if (document.getElementById("sliderBg")) {document.getElementById("sliderBg").setAttribute('class', 'slideBg' + curNumber)};
    setTimeout(function(){changeBg(curNumber)}, 8000);  
}
changeBg(0);