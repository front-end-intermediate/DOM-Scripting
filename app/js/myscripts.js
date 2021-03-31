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

console.log(markup);

nav.innerHTML = markup;

const logo = nav.querySelector(".main-menu ul li");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';

fetch(nytUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    renderStories(myJson);
  });

function renderStories(data) {
  data.results.forEach((story) => {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
      <img src="${story.multimedia[0].url}" alt="${story.title}" />
        <div>
          <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
          <p>${story.abstract}</p>
        </div>
        `;
    root.prepend(storyEl);
  });
}
