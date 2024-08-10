var show=document.getElementById("tolog")
if(localStorage.getItem("users")!=null){
    userList= JSON.parse(localStorage.getItem("users"));  
}
var userName;
if(localStorage.getItem("currentUser")!=null){
    userName= JSON.parse(localStorage.getItem("currentUser"));  
}
show.textContent=userName;
var out= document.getElementById("logout")
out.addEventListener("click",function(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('ViewProduct');
    localStorage.removeItem('index');
    localStorage.removeItem('count');
}
)
var button = document.getElementsByClassName("cat");
for(i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        window.location.href="categories.html"
    })
}
let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
let currentIndexes = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const slideInterval = 4000;
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        indicators[i].classList.toggle('active', i === index);
    });
    currentIndexes = index;
}
function nextSlide() {
    const nextIndex = (currentIndexes + 1) % slides.length;
    showSlide(nextIndex);
}
function startSlider() {
    setInterval(nextSlide, slideInterval);
}
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});
showSlide(currentIndexes);
startSlider();