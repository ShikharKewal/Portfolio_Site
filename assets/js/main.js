
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('#nav-list');
if (toggle && list){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    list.classList.toggle('show');
  });
}
