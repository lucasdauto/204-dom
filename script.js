let titulo = document.querySelector('h1');
let image = document.querySelector('img');
let emocionalDaAna =  document.querySelector('p');
let corpo = document.querySelector('body');
let botao =  document.querySelector('#triste');
let botaos =  document.querySelector('#feliz');

emocionalDaAna.style.fontSize = "18pt";
corpo.style.backgroundColor = "gray";


image.src = "https://i.ytimg.com/vi/6B9FSLX6O5Q/maxresdefault.jpg";

function darLamim(){
    corpo.style.backgroundColor = "orange";
    image.src = "https://i.ytimg.com/vi/RCFBwSUBqlI/maxresdefault.jpg";
    titulo.innerHTML = "Esse é o meu estilo ninjá";
    emocionalDaAna.innerHTML = "(Musica do protagonista)<br> Esse é o meu estilo ninjá<br>Vou ser Hokage to serto!!!";

}

function tirarLamim(){
    emocionalDaAna.style.fontSize = "18pt";
    corpo.style.backgroundColor = "gray";
    emocionalDaAna.innerHTML = "(Na balança sozinho triste)<br> turuuuuuuuuuuuuuuuuuuuuu tutututuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu tuuuuuuturuuruuuuuuu... ♪♫";
    titulo.innerHTML = "Depressão Naruto";
    image.src = "https://i.ytimg.com/vi/6B9FSLX6O5Q/maxresdefault.jpg";

}


botao.onclick = tirarLamim;
botaos.onclick = darLamim;