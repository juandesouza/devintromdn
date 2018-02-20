let monImage = document.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-logo-small2.png') {
      monImage.setAttribute ('src','images/mozillaold2.png');
    } else if (maSrc === 'images/mozillaold2.png') {
    	monImage.setAttribute('src', 'images/firefox.png');
    } else if (maSrc === 'images/firefox.png') {
    	monImage.setAttribute('src', 'images/firefoxnight.png');
    } else {
      monImage.setAttribute ('src','images/firefox-logo-small2.png');
    }
}

monImage.onmouseover = () => {
	monImage.style.cursor = 'pointer';
}

let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function definirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla is cool, ' + monNom;
}

if(!localStorage.getItem('nom') || localStorage.getItem('nom') === null) {
  definirNomUtilisateur();
} else {
  let nomEnregistre = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla is cool, ' + nomEnregistre;
}

monBouton.addEventListener('click', definirNomUtilisateur);

