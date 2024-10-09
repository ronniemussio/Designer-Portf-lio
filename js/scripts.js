const links = document.querySelectorAll('.Info--item');
const imgDinamica = document.getElementById('img-dinamica');
const pDinamico = document.getElementById('descripcao-dinamica');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        const img = this.querySelector('img');
        const p = this.querySelector('p');

        imgDinamica.src = img.src;
        pDinamico.innerHTML = p.innerHTML;
    });
}

