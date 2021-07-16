let ket = document.querySelectorAll('.description');
let span = document.querySelectorAll('span');
ket[0].style.display = 'block';

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', func);
}

function func() {
  let tuy = 0;
  for (let i = 0; i < span.length; i++) {
    span[i].classList.remove('activa');
    ket[i].style.display = 'none';
  }
  this.classList.add('activa');
  for (let i = 0; i < span.length; i++) {
    if (span[i].classList.contains('activa')) {
      tuy = i;
      break;
    }
  }
  ket[tuy].style.display = 'block';
  console.dir(tuy);
}