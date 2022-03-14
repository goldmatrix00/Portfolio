let Scrollbar = window.Scrollbar;
const options = {
    "damping":.04,
    "renderByPixels":true,
    "continousScrolling":true,
}
Scrollbar.init(document.querySelector('body'),options);


// ANIMATIONS
TweenMax.from('.text_line_1',1.5,{
    delay:.5,
    left:'-100%',
    opacity:0,
});
TweenMax.from('.text_line_2',1.5,{
    delay:1.5,
    left:'-100%',
    opacity:0,
});
TweenMax.from('.text_line_3',2.2,{
    delay:2.4,
    left:'-100%',
    opacity:0,
});
TweenMax.from('.row-2',2,{
    delay:4.5,
    top:'-10%',
    opacity:0,
});
TweenMax.from('.contact_me',2,{
    delay:2.5,
    opacity:0,
});
TweenMax.from('.scroll_down_elements',2,{
    delay:4.5,
    top:'-10%',
    opacity:0,
});
