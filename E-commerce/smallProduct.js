let mainImg = document.getElementById("main-img");
let smallImg = document.getElementsByClassName("single-img");

changeImage(smallImg[0])
changeImage(smallImg[1])
changeImage(smallImg[2])
changeImage(smallImg[3])

function changeImage(image) {
    image.addEventListener("click",()=>{
        mainImg.src = image.src;
    });
}