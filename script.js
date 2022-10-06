

const header = Document.querySelector("header");

Window.addEventListener ("scroll", function(){
    header.classList.toggle ("stricky", Window.scrollY > 0);
});
