document.getElementById('input').addEventListener('change', () => {


  if (document.body.className.indexOf('dark') === -1) {

      document.body.classList.add('dark')
  } else {
      document.body.classList.remove('dark')

  }
})



const header = Document.querySelector("header");

Window.addEventListener ("scroll", function(){
    header.classList.toggle ("stricky", Window.scrollY > 0);
});
