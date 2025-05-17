// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('show');
// 	hamButton.classList.toggle('show');
// });



  const btn  = document.querySelector('#menu');
  const nav  = document.querySelector('.navigation');

  btn.addEventListener('click', () => {
    nav.classList.toggle('show');

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);

    // swap ☰ ↔ X
    btn.textContent = expanded ? '☰' : '✖';
    btn.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });

