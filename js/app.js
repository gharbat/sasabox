let slides = document.querySelectorAll(".slide-item");
let img = document.querySelectorAll("img");
// let [arrow_right, arrow_left] = document.querySelectorAll(".arrow");



let counter = 0;
let changeSlider = function (slides) {
    if (counter !== slides.length-1) {
        slides[counter].style.display = "none";
        slides[counter + 1].style.display = "block";
        counter++;
    }else {
        slides[counter].style.display = "none";
        slides[0].style.display = "block";
        counter = 0;
    }
}


setInterval(changeSlider(slides), 1000);
setInterval(changeSlider(img), 1000);