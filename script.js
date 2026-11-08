const dialog = document.getElementById("dialog");

let images = document.querySelectorAll(".album-container img");

const close = document.getElementById("close-btn");

let currentIndex = 0;

const dialogImg = document.getElementById("dialog-img");

const btnLeft = document.getElementById("prev-btn");

const btnRight = document.getElementById("next-btn");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        currentIndex = i;
        dialogImg.src = images[i].src;
        dialog.showModal()
    })
}

close.addEventListener('click', function () {
    dialog.close()
})

dialog.addEventListener('click', function (e) {
    if (e.target === dialog) {
        dialog.close()
    }
})

btnLeft.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    dialogImg.src = images[currentIndex].src;
})



