(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
   
})();



// function fun(){
//     const btn = document.getElementsByClassName("prop-img");
// const show = document.getElementsByClassName(".hidden-txt");
//     btn.addEventListener('click', function(){
        
//         show.style.display = show.style.display!== 'none' ? 'none' : 'block';
// });
// }
// fun();