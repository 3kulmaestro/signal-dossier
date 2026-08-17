const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.querySelector('span').textContent = open ? '−' : '+';
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.querySelector('span').textContent = '+';
}));
const dialog = document.querySelector('#story-dialog');
const title = document.querySelector('#dialog-title');
document.querySelectorAll('[data-story]').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault(); title.textContent = link.dataset.story; dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
