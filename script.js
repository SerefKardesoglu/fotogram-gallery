const dialog = document.getElementById("dialog");

let images = document.querySelectorAll(".album-container img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        dialog.showModal()
    })
}