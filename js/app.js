let slides = document.querySelectorAll(".slide-item");
let img = document.querySelectorAll(".img-slide");
// let [arrow_right, arrow_left] = document.querySelectorAll(".arrow");


slide(slides, 2000);
slide(img, 1000);

///////////

let cards = document.querySelectorAll(".card") // 1 2 3
for (let i =0 ; i< cards.length; i++){
        cards[i].onmouseover = function () {
            for (let j= 0; j< cards.length; j++) cards[j].classList.remove("active");
            cards[i].classList.add("active");
    }
}


let btn = document.querySelectorAll(".select-button");
let [first , second , therd]= document.getElementsByClassName("feature-box")

for (let i = 0 ; i < btn.length ; i++){
    btn[i].onclick = function(){

        let f =document.getElementsByClassName("feature-box")
        for(let c=0 ; c <f.length ; c++ ){
            f[c].style.display="none";
        }
        switch (i) {
            case 0:
                first.style.display="flex"; break;
            case 1:
                second.style.display="flex"; break;
            case 2:
                therd.style.display="flex";
        }
        for (let j = 0 ; j < btn.length ; j++) btn[j].classList.remove("active-button");
        btn[i].classList.add("active-button");
    }
}

