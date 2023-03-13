let img = document.getElementById("main-img");
    let arrImg = ['url(/_assets/main-img1.png)', 'url(/_assets/main-img2.png)', 'url(/_assets/main-img3.png)', 'url(/_assets/main-img4.png)'];
    setInterval(function () {
        let i = Math.floor(Math.random() * 3);
        img.style.backgroundImage = arrImg[i];

    }, 2000);

    let ch = document.getElementById("changeIMG");
    function changeBlack() {
        ch.src = "/_assets/image-black.png";
    }
    function changeYellow() {
        ch.src = "/_assets/image-yellow.png";
    }
    function changeGray() {
        ch.src = "/_assets/image-gray.png";
    }
    function changeRed() {
        ch.src = "/_assets/image-red.png";
    }
    function changeWhite() {
        ch.src = "/_assets/image-white.png";
    }

var id = 0;
var arr = ["/_assets/sec61.png","/_assets/sec62.png","/_assets/sec63.png","/_assets/sec64.png","/_assets/sec65.png","/_assets/sec66.png"];
var imgs = document.getElementById("sec3-img");

function Pre(){
    id--;
    if(id < 0){
        id = arr.length -1;
    } 
    imgs.src = arr[id];
}
function Next(){
    id++;
    if(id > arr.length -1){
        id = 0;
    } 
    imgs.src = arr[id];
}


var arrL = ["/_assets/image40.png","/_assets/image41.png","/_assets/image42.png","/_assets/image43.png","/_assets/image44.png","/_assets/image45.png"];
var img0 = document.querySelector(".sec4-img0");
var img1 = document.querySelector(".sec4-img1");
var img2 = document.querySelector(".sec4-img2");
var img3 = document.querySelector(".sec4-img3");
var img4 = document.querySelector(".sec4-img4");
var img5 = document.querySelector(".sec4-img5");


var a = 0;
img0.src = arrL[0];
img1.src = arrL[1];
img2.src = arrL[2];
img3.src = arrL[3];
img4.src = arrL[4];
img5.src = arrL[5];
function Pree(){
    
    a--;
    
    if(a < 0){
        a = arrL.length -1;
    } 
    let tmp = img0.src;
    img0.src = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = tmp;
    
}
function Nextt(){

    a++;

    if(a > arrL.length -1){
        a = 0;
    } 
    let tmp = img0.src;
    img0.src = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = tmp;
}
