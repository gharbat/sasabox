let slides = document.querySelectorAll(".slide-item");
let [arrow_right, arrow_left] = document.querySelectorAll(".arrow");



let counter = 0;
let changeSlider = function () {
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


setInterval(changeSlider, 1000)