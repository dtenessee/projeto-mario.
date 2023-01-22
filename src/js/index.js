const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkdovideo = video.src;
function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",() => {  
    alternarModal();
    video.setAttribute("src", linkdovideo);
});

const x = document.querySelector(".fechar-modal");

x.addEventListener ("click",() => {
    alternarModal();
    video.setAttribute("src", "");
});






