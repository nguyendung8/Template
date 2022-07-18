let closeBtn = document.querySelector(".close-btn");
        let modal = document.querySelector(".modal");
        let seNd =document.querySelector("#register");

        closeBtn.addEventListener("click", function(){
            modal.classList.add("remove");
        });
        seNd.addEventListener("click", function(){
            modal.classList.remove("remove");
        });
        let closeBtn2 = document.querySelector(".close-btn2");
        let modal2 = document.querySelector(".modal2");
        let sEnd =document.querySelector("#login");

        closeBtn2.addEventListener("click", function(){
            modal2.classList.add("remove2")
        });
        sEnd.addEventListener("click", function(){
            modal2.classList.remove("remove2");
        });