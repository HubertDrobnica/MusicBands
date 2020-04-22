const sections = document.querySelectorAll('section');
const textsAppear = document.querySelectorAll('.note');
const links = document.querySelectorAll('a');
const hamburger = document.querySelector('.fa-bars');
const bands= document.querySelector('.bands')

function scrollDown() {
  for(i=0; i <sections.length; i++) {
    if(sections[i].getBoundingClientRect().top < window.innerHeight * 0.5) {
      sections[i].children[0].classList.add('note-appear');
    }
    if(sections[i].getBoundingClientRect().top > window.innerHeight * 0.5) {
      sections[i].children[0].classList.remove('note-appear');
    }
  }
}
window.addEventListener('scroll', scrollDown);

links.forEach(link => {
  link.addEventListener('click', function(event){
    event.preventDefault()
    link.getAttribute('href');
    window.scrollTo({
      top: document.querySelector(link.getAttribute('href')).offsetTop,
      behavior: "smooth",
    })
  })
})

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  bands.classList.toggle('bands-appear')
})
