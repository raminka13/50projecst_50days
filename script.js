const projects = [
  {
    id: 1,
    name: 'Expanding Cards',
    url: './expanding_cards/index.html',
    description: 'Simple expanding cards with HTML, CSS and JavaScript',
  },
  {
    id: 2,
    name: 'Progress Steps',
    url: './progress-steps/index.html',
    description: 'Simple progress steps with HTML, CSS and JavaScript',
  },
  {
    id: 3,
    name: 'Rotating Nav Animation',
    url: './rotating-nav-animation/index.html',
    description: 'Simple rotating nav animation with HTML, CSS and JavaScript',
  },
];

const container = document.querySelector('.container');

projects.forEach((project) => {
  const card = document.createElement('div');
  const cardNumber = document.createElement('h3');
  const cardTitle = document.createElement('a');
  card.classList.add('card');
  cardNumber.classList.add('card-number');
  cardNumber.textContent = project.id;
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.name;
  cardTitle.href = project.url;
  container.appendChild(card);
  card.appendChild(cardNumber);
  card.appendChild(cardTitle);
});