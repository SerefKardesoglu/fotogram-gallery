const dialog = document.getElementById("dialog");

let images = document.querySelectorAll(".album-container img");

const close = document.getElementById("close-btn");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        dialog.showModal()
    })
}

close.addEventListener('click', function(){
dialog.close()
})

