function hamburg(){
  const navbar = document.querySelection("dropdown")
  navbar.style.transform = "translateY(0ps)"
}

function hamburg(){
  const navbar = document.querySelection("cancel")
  navbar.style.transform = "translateY(-500ps)"
}

const texts = [
   "WEB DEVELOPER",
   "PROGRAMMER",
   "VOICE ACTOR",
]

const speed = 100;
const textElements = document.querySelection(".typewriter.text")

let textindex = 0;
let characterindex = 0;

function typewriter(){
  if(characterindex<texts[textindex].length){
  textElements.innerHTML += texts[textIndex].charAt(characterindex);
  characterindex++;
  setTimeout(typeWriter, speed);
  }
  else{
    setTimeout(erase, 100)
  }
}

function eraseText(){
  if(textElements.innerHTML.length>0){
  textElements.HTML = textElements.HTML.slice(0,-1);
  setTimeout(eraseText, 50);
  }
  else{
    textindex = (textindex + 1)%texts.length;
    characterindex = 0;
    setTimeout(typeWriter, 500)
  }

window.onload = typeWriter
}