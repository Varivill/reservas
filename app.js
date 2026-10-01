// Galería de confianza: agrega o quita nombres de archivo aquí
var FOTOS = ['c1','c2','c3','c4','c5','c6','t1','t2','t3','t4','t5'];
var grid = document.getElementById('grid'), lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg');
FOTOS.forEach(function (n) {
  var i = document.createElement('img');
  i.src = 'img/' + n + '.jpg'; i.loading = 'lazy'; i.alt = 'Prueba de confianza';
  i.onclick = function () { lbimg.src = i.src; lb.classList.add('on'); };
  grid.appendChild(i);
});
lb.onclick = function () { lb.classList.remove('on'); };
