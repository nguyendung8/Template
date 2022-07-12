let closeBtn = document.querySelector(".modal-close");
let modal = document.querySelector(".modal");
let buyBtn= document.querySelectorAll(".place-buy-btn");


closeBtn.addEventListener("click", function(){
modal.classList.add("remove");
});

for(let i=0;i<buyBtn.length;i++){
    buyBtn[i].addEventListener("click", function(){
       modal.classList.remove("remove");
    });
}