let numberOfItems = 0;
const itemQuantityButtons = document.querySelectorAll(".itemselector .button");
const incrementButton = itemQuantityButtons[1];
const decrementButton = itemQuantityButtons[0];
const itemsCount = document.querySelector(".itemselector .items-count");
const addToCart = document.querySelector(".addtocart");
const cartDiv = document.querySelector("li div");

incrementButton.addEventListener('click', () => {
    numberOfItems++;
    itemsCount.innerHTML = numberOfItems;
});

decrementButton.addEventListener('click', () => {
    if(numberOfItems > 0) {
        numberOfItems--;
    }
    itemsCount.innerHTML = numberOfItems;
});

addToCart.addEventListener('click', () => {
    const itemsDot = document.createElement("span");
    itemsDot.className = "notifi";
    itemsDot.innerText = numberOfItems;
    cartDiv.appendChild(itemsDot);
});

const cart = document.querySelector(".img-cart");
cart.addEventListener("click", () => {
    const dialogBox = document.querySelector(".dialog");
    const emptyDialog = document.querySelector(".dialog .empty-dialog");
    const itemDialog = document.querySelector(".dialog .item");
    if(numberOfItems > 0) {
        emptyDialog.style.display = 'none';
        itemDialog.style.display = 'block';
        document.querySelector(".dialog .dialog-details p").innerHTML = `Fall Limited Edition Sneakers<br>$125.00 x ${numberOfItems} <span>$${numberOfItems * 125.00}</span>`;
        dialogBox.classList.toggle("hidden");
    } else {
        itemDialog.style.display = 'none';
        emptyDialog.style.display = 'block';
        dialogBox.classList.toggle("hidden");
    }
});

var prev = document.getElementById("one");
const mainImage = document.querySelector(".preview");
const thumbnails = document.querySelectorAll(".thumbnail");
for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', (e) => {
        const tem = "images/image-product-";
        prev.classList.toggle("thumbnail-clicked");
        e.target.classList.toggle("thumbnail-clicked");
        let thumbnailId = e.target.getAttribute("id");
        switch(thumbnailId) {
            case "one":
                mainImage.setAttribute("src", tem + "1.jpg");
                break;
            case "two":
                mainImage.setAttribute("src", tem + "2.jpg");
                break;
            case "three":
                mainImage.setAttribute("src", tem + "3.jpg");
                break;
            case "four":
                mainImage.setAttribute("src", tem + "4.jpg");
        }
        prev = e.target;
    });
}
