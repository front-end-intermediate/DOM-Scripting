const nav = document.querySelector('.main');

const markup = `
<ul>
${navItemsObject
  .map(item => `<li><a href="${item.link}">${item.label}</a></li>`)
  .join('')}
</ul>
`;

// console.log(markup);

nav.innerHTML = markup;

// sticky nav
let topOfNav = nav.offsetTop;
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

const logo = nav.querySelector('.main ul li');
logo.classList.add('logo');
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
