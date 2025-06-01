const temples = [
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl: "images/accra-ghana-temple.webp"    
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "images/manti-temple.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "images/payson-utah-temple.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "images/yigo_guam_temple_2.webp"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "images/washington_dc_temple.webp"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "images/lima-peru-temple.webp"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "images/mexico-city.webp"
    },
    {
      templeName: "Aba Nigeria", 
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "images/aba-nigeria-temple.webp"
    },
    {
      templeName: "Copenhagen Denmark",
      location: "Copenhagen, Denmark",
      dedicated: "2004, May, 23",
      area: 25000,
      imageUrl: "images/copenhagen-denmark-temple.webp"
    },
    {
      templeName: "Lagos Nigeria",
      location: "Lagos, Nigeria",
      dedicated: "2025, May, 10",
      area: 19800,
      imageUrl: "images/lagos-nigeria-temple.webp"
    }
  ];

const cards = document.querySelector("#templeCards");

function clearCards() {
  cards.innerHTML = ""; // Clear previous cards
}

function displayTemples(filteredTemples) {
  clearCards();

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = temple.location;

    const dedicated = document.createElement("p");
    dedicated.textContent = temple.dedicated;

    const area = document.createElement("p");
    area.textContent = `${temple.area} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `Image of ${temple.templeName}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400");
    image.setAttribute("height", "250");

    card.append(name, location, dedicated, area, image);
    cards.appendChild(card);
  });
}

// Initial display of temple cards
displayTemples(temples);

// Filter function
function filterTemples(filter) {
  let filtered = [];

  switch (filter) {
    case "old":
      filtered = temples.filter((t) => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
      break;
    case "new":
      filtered = temples.filter((t) => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
      });
      break;
    case "large":
      filtered = temples.filter((t) => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter((t) => t.area < 10000);
      break;
    case "home":
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Event listeners on nav buttons
document.querySelectorAll(".navigation a").forEach((a) => {
  a.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    filterTemples(filter);
  });
});



  // Hamburger menu toggle
  const btn = document.querySelector('#menu');
  const nav = document.querySelector('.navigation');
  
  btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
  
    btn.textContent = expanded ? '☰' : '✖';
    btn.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });
  
