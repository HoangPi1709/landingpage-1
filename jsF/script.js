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


let arrL = ["/_assets/image40.png","/_assets/image41.png","/_assets/image42.png","/_assets/image43.png","/_assets/image44.png","/_assets/image45.png"];
function reverseArr(arrL, left, right){
    while (left <= right ) {
        let tmp = arrL[left];
        arrL[left] = arrL[right];
        arrL[right] = tmp;
        left++;
        right--;
    }
}
function rotationArr(arrL, k, n){

    reverseArr(arrL, 0, k-1);
    reverseArr(arrL, k, n-1);
    reverseArr(arrL, 0, n-1);
}

var a = 0;
var img0 = document.getElementsByClassName("img0");
var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
rotationArr(arr, a, arrL.length);
function Pree(){
    rotationArr(arr, a, arrL.length);
    a--;
    if(a < 0){
        a = arrL.length -1;
    } 
    
    img0.src = arrL[0];
    img1.src = arrL[1];
    img2.src = arrL[2];
}
function Nextt(){
    rotationArr(arr, a, arrL.length);
    a++;
    if(a > arrL.length -1){
        a = 0;
    } 
    
    img0.src = arrL[0];
    img1.src = arrL[1];
    img2.src = arrL[2];
}



