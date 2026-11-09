const dialog = document.getElementById("dialog");

let images = document.querySelectorAll(".album-container img");

const close = document.getElementById("close-btn");

let currentIndex = 0;

const dialogImg = document.getElementById("dialog-img");

const btnLeft = document.getElementById("prev-btn");

const btnRight = document.getElementById("next-btn");

const imageCounter = document.getElementById("image-counter");

let imageTitle = document.getElementById("image-title");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        currentIndex = i;
        updateImageCounter()
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
    updateImageCounter()
    dialogImg.src = images[currentIndex].src;
})

btnRight.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImageCounter()
    dialogImg.src = images[currentIndex].src;
})

function updateImageCounter() {
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    imageTitle.textContent = images[currentIndex].alt;
}



