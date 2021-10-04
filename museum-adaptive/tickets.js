let btnOpen = document.getElementById("btn-open");
let modal = document.getElementById("modal");
let overlay = document.getElementById("modal-overlay");
let btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click",function(){
    modal.classList.add("open");
});

function closeModal(){
    modal.classList.remove("open");
}

overlay.addEventListener("click",closeModal);
btnClose.addEventListener("click",closeModal);

