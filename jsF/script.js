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

