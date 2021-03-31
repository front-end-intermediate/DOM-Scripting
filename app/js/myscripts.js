const root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

const nav = document.querySelector(".main-menu");

const markup = `
<ul>
  <a
  href="#main-menu-toggle"
  id="main-menu-close"
  class="menu-close"
  aria-label="Close main menu"
  >
  <span class="sr-only">Close main menu</span>
  <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  ${navItemsObject
    .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;

nav.innerHTML = markup;

function fetchArticles(section) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
  )
    .then((response) => response.json())
    .then((myJson) => renderStories(myJson));
}

function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section.toLowerCase();
  sectionHead.innerHTML = `<h3 class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);

  stories = data.results.slice(0, limit);
  console.log(" stories ", stories);
}

const logo = document.createElement("li");
const navList = nav.querySelector("nav ul");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
navList.prepend(logo);

const limit = 6;
const categories = navItemsObject.map((item) => item.label);

function getArticlesByCategory(cat) {
  cat.forEach(function (category) {
    fetchArticles(category);
  });
}

getArticlesByCategory(categories);
