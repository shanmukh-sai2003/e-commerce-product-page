const lightBox = document.querySelector(".lightbox");
const preview = document.querySelector(".preview");
const image = document.querySelector(".item-preview .image .product");
var prevLightBox = document.getElementById("one-lightbox");
let slidePosition = 0;

preview.addEventListener("click", (e) => {
    lightBox.style.display = "block";
    //switch case to select which image is clicked
    const tem = "images/image-product-";
    switch(preview.getAttribute('src')) {
        case tem + "1.jpg":
            slidePosition = 0;
            prevLightBox = document.getElementById("one-lightbox");
            prevLightBox.classList.add('clicked');
            image.setAttribute('src', tem + '1.jpg');
            break;
        case tem + '2.jpg':
            slidePosition = 1;
            prevLightBox = document.getElementById("two-lighbox");
            prevLightBox.classList.add('clicked');
            image.setAttribute('src', tem + "2.jpg");
            break;
        case tem + '3.jpg':
            slidePosition = 2;
            prevLightBox = document.getElementById('three-lightbox');
            prevLightBox.classList.add('clicked');
            image.setAttribute('src', tem + '3.jpg');
            break;
        case tem + '4.jpg':
            slidePosition = 3;
            prevLightBox = document.getElementById("four-lightbox");
            prevLightBox.classList.add('clicked');
            image.setAttribute("src", tem + '4.jpg');
            break;
    }
});

//image selction by clicking on thumbnail images
const thumbnailsLightbox = document.querySelectorAll(".item-preview .thumbnail-image");

for(let img of thumbnailsLightbox) {
    img.addEventListener("click", (e) => {
        const tem = "images/image-product-";
        prevLightBox.classList.toggle("clicked");  //to remove the click animation from the previosuly clicked thumbnail
        e.target.classList.toggle("clicked");
        prevLightBox = e.target;
        //to select the proper image corresponding to the thumbnail clicked
        switch(e.target.id) {
            case "one-lightbox":
                image.setAttribute("src", tem + "1.jpg");
                break;
            case "two-lightbox":
                image.setAttribute("src", tem + "2.jpg");
                break;
            case "three-lightbox":
                image.setAttribute('src', tem + '3.jpg');
                break;
            case "four-lightbox":
                image.setAttribute('src', tem + '4.jpg');
                break;
        }
    });
}

//slide buttons
const pushRight = document.querySelector(".item-preview .pushright");
const pushLeft = document.querySelector(".item-preview .pushleft");

pushRight.addEventListener("click", () => {
    slidePosition = (slidePosition + 1) % 4;
    const tem = "images/image-product-";
    image.setAttribute("src", tem + `${slidePosition + 1}.jpg`);
    prevLightBox.classList.toggle("clicked");
    thumbnailsLightbox[slidePosition].classList.toggle("clicked");
    prevLightBox = thumbnailsLightbox[slidePosition];
});

pushLeft.addEventListener("click", () => {
    if(slidePosition == 0) {
        slidePosition = 3;
    } else {
        slidePosition--;
    }
    const tem = "images/image-product-";
    image.setAttribute("src", tem + `${slidePosition + 1}.jpg`);
    prevLightBox.classList.toggle("clicked");
    thumbnailsLightbox[slidePosition].classList.toggle("clicked");
    prevLightBox = thumbnailsLightbox[slidePosition];
});

//close button
const closeButton = document.querySelector(".item-preview .close");
closeButton.addEventListener('click', () => {
    lightBox.style.display = "none";
});

