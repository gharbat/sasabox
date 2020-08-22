function slide(slides, duration) {
    let counter = 0;
    setInterval(function() {
        if (counter !== slides.length - 1) {
            slides[counter].style.display = "none";
            slides[counter + 1].style.display = "block";
            counter++;
        } else {
            slides[counter].style.display = "none";
            slides[0].style.display = "block";
            counter = 0;
        }
    }, duration);
}