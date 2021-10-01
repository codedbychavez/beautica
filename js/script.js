var images = [
  "../images/01_slide-1.jpg",
  "../images/02_slide-2.jpg",
  "../images/03_slide-3.jpg",
]

function changeBg(index) {
  document.getElementsByClassName('main')[0].style.backgroundImage = "url("+images[index]+")";

}