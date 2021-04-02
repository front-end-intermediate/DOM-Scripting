const root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

const limit = 6;
const categories = navItemsObject.map((item) => item.label);

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
    .map((story) => `<li><a href="${story.link}">${story.label}</a></li>`)
    .join("")}
</ul>
`;

nav.innerHTML = markup;

const logo = document.createElement("li");
const navList = nav.querySelector("nav ul");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
navList.prepend(logo);

function fetchArticles(section) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
  )
    .then((response) => response.json())
    .then((myJson) => {
      console.log(myJson.results);
      renderStories(myJson);
    });
}

function renderStories(data) {
  data.results.forEach((story) => {
    const storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
      <img 
      src="${
        story.multimedia.length > 0
          ? story.multimedia[1].url
          : "img/no-image.png"
      }" 
      alt="${story.title}" />
        <div>
          <h3><a target="_blank" href="${story.short_url}">${
      story.title
    }</a></h3>
          <p>${story.abstract}</p>
        </div>
        `;
    root.prepend(storyEl);
  });
}

function getArticlesByCategory(cat) {
  cat.forEach(function (category) {
    fetchArticles(category);
  });
}

getArticlesByCategory(categories);
