//Carrossel
let slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot"); //mostra a imagem
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length } //muda de uma imagem para outra
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //mostrar as imagens de uma em uma
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; //alterar a largura das imagens
  dots[slideIndex - 1].className += " active";
}

//Passar o mouse para mudar a imagem
//Sessão Samrthphones
function mouseEmCima(imagem) {
  imagem.src = "imagem/img5.webp";
}

function mouseFora(imagem) {
  imagem.src = "imagem/img6.jpg";
}


function mouseEmCima1(imagem) {
  imagem.src = "imagem/img73.webp";
}

function mouseFora1(imagem) {
  imagem.src = "imagem/img74.webp";
}


function mouseEmCima2(imagem) {
  imagem.src = "imagem/img7.webp";
}

function mouseFora2(imagem) {
  imagem.src = "imagem/img71.webp";
}


function mouseEmCima3(imagem) {
  imagem.src = "imagem/img8.webp";
}

function mouseFora3(imagem) {
  imagem.src = "imagem/img70.webp";
}


function mouseEmCima4(imagem) {
  imagem.src = "imagem/img9.webp";
}

function mouseFora4(imagem) {
  imagem.src = "imagem/img75.webp";
}

//Função abre imagem em outra aba
function img1() {
  window.open("imagem/img37.webp");
}

function img2() {
  window.open("imagem/img38.webp");
}

function img3() {
  window.open("imagem/img39.webp");
}

function img4() {
  window.open("imagem/img40.webp");
}

function img5() {
  window.open("imagem/img41.webp");
}

 
  
