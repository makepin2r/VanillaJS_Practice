const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImg(imgNum){
    const image = new Image();
    image.src = `images/bg${imgNum + 1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}

function genRandom(){
    const num = Math.floor(Math.random() * IMG_NUMBER);
    return num;
}

function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}   

init();