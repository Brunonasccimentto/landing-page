let show = document.getElementById("show");
let form = document.getElementsByClassName("formulario")[0];
let hide = document.getElementById("hide")


show.addEventListener("click", function(){

    form.style.display = "block"
    show.style.display = "none"
    hide.style.display = "inline-block"
})

hide.addEventListener("click", function(){

    form.style.display = "none"
    show.style.display = "inline-block"
    hide.style.display = "none"

   
})