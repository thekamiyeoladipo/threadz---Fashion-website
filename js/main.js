// Navbar Toggle
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
let navBarToggler = document.querySelector(".navbar-toggler");
let newToggler = document.getElementById("newtoggler");
const myButton = document.getElementById("myBtn");


navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
        // for the toggle
        newToggler.style.display = "none";
        navBarToggler.style.display = "block";
    })
})

// For the toggle, Bruh i don't even know how, but i did it😂
navBarToggler.addEventListener("click", function() {
    navBarToggler.style.display = "none";
    newToggler.style.display = "block";
    
});
newToggler.addEventListener("click", function() {
    navBarToggler.style.display = "block";
    newToggler.style.display = "none";
});


// Back to top button
//when the user scrolls down 20px from the top of the document; show the botton, when the user scrolls back up (20px); remove button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
}

// When the user clicks the button; go back to the top
myButton.addEventListener("click", function() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});
