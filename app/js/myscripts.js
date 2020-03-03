// variables
var root = document.querySelector('.site-wrap');
const nytapi = 'uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
const limit = 6;
const categories = navItemsObject.map(item => item.label);
const nav = document.querySelector('.main-menu');

// navigation
function renderNav() {
  const markup = `
  <a
  href="#main-menu-toggle"
  id="main-menu-close"
  class="menu-close"
  aria-label="Close main menu"
>
  <span class="sr-only">Close main menu</span>
  <span class="fa fa-close" aria-hidden="true"></span>
</a>
  <ul>
    ${navItemsObject
      .map(item => `<li><a href="${item.link}">${item.label}</a></li>`)
      .join('')}
  </ul>
  `;
  nav.innerHTML = markup;

  const logo = document.createElement('li');
  const navList = nav.querySelector('nav ul');
  logo.classList.add('logo');
  logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
  navList.prepend(logo);
}

// articles
function getArticlesByCategory(cat) {
  cat.forEach(function(category, index) {
    fetchArticles(category, index);
  });
}

function fetchArticles(section) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`,
  )
    .then(response => response.json())
    .then(myJson => renderStories(myJson));
}

function renderStories(data) {
  localStorage.setItem('articles', root.innerHTML);
  var sectionHead = document.createElement('div');
  sectionHead.id = data.section.toLowerCase();
  sectionHead.classList.add('try-scroll');
  // = 'try-scroll-margin-top';
  sectionHead.innerHTML = `<h3 class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);

  stories = data.results.slice(0, limit);

  stories.forEach(story => {
    console.log(story);
    storyEl = document.createElement('div');
    storyEl.className = 'entry';
    storyEl.innerHTML = `
    <img src="${
      story.multimedia.length > 0 ? story.multimedia[1].url : 'img/no-image.png'
    }" />
    <div>
      <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
      <p>${story.abstract}</p>
    </div>
    `;
    sectionHead.append(storyEl);
  });
}

// getArticlesByCategory(categories);

// let saved = localStorage.getItem('articles');
// if (saved) {
//   root.innerHTML = saved;
// } else {
getArticlesByCategory(categories);
// }

renderNav();
