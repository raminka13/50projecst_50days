const projects = [
  {
    id: 1,
    icon: '🗂',
    name: 'Expanding Cards',
    url: './expanding_cards/index.html',
    description: 'Simple expanding cards with HTML, CSS and JavaScript',
  },
  {
    id: 2,
    icon: '👣',
    name: 'Progress Steps',
    url: './progress-steps/index.html',
    description: 'Simple progress steps with HTML, CSS and JavaScript',
  },
  {
    id: 3,
    icon: '🐶',
    name: 'Rotating Nav Animation',
    url: './rotating-nav-animation/index.html',
    description: 'Simple rotating nav animation with HTML, CSS and JavaScript',
  },
  {
    id: 4,
    icon: '📸',
    name: 'Blurry Loading',
    url: './blurry-loading/index.html',
    description: 'Simple loader animation with HTML, CSS and JavaScript',
  },
  {
    id: 5,
    icon: '📜',
    name: 'Scroll Animation',
    url: './scroll-animation/index.html',
    description: 'Simple scroll animation with HTML, CSS and JavaScript',
  },
  {
    id: 6,
    icon: '📉',
    name: 'Split Landing Page',
    url: './split-landing-page/index.html',
    description: 'Simple split landing page with HTML, CSS and JavaScript',
  },
  {
    id: 7,
    icon: '🌊',
    name: 'Form Input Wave',
    url: './form-input-wave/index.html',
    description: 'Simple form input wave animation with HTML, CSS and JavaScript',
  },
  {
    id: 8,
    icon: '🔊',
    name: 'Sound Board',
    url: './sound-board/index.html',
    description: 'Simple sound board with HTML, CSS and JavaScript',
  },
  {
    id: 9,
    icon: '🃏',
    name: 'Dad Jokes',
    url: './dad-jokes/index.html',
    description: 'Simple dad jokes with HTML, CSS and JavaScript',
  },
  {
    id: 10,
    icon: '⌨️',
    name: 'Event Keycodes',
    url: './event-keycodes/index.html',
    description: 'Simple event keycodes with HTML, CSS and JavaScript',
  },
  {
    id: 11,
    icon: '🧞‍♀️',
    name: 'Magic Hover Effect',
    url: './magic-hover/index.html',
    description: 'Simple magic hover effect with HTML, CSS and JavaScript',
  },
  {
    id: 12,
    icon: '📱',
    name: 'Curtain Nav Menu',
    url: './curtain-menu/index.html',
    description: 'Simple curtain nav menu with HTML, CSS and JavaScript',
  },
  {
    id: 13,
    icon: '🤔',
    name: 'FAQ Collapse',
    url: './faq-collapse/index.html',
    description: 'Simple FAQ collapse with HTML, CSS and JavaScript',
  },
  {
    id: 14,
    icon: '⚡️',
    name: 'Random Choice Picker',
    url: './random-choice-picker/index.html',
    description: 'Simple random choice picker with HTML, CSS and JavaScript',
  },
  {
    id: 15,
    icon: '⏰',
    name: 'Fancy Clock',
    url: './fancy-clock/index.html',
    description: 'Simple fancy clock with HTML, CSS and JavaScript',
  },
  {
    id: 16,
    icon: '🧭',
    name: 'Animated Navigation',
    url: './animated-navigation/index.html',
    description: 'Simple animated navigation with HTML, CSS and JavaScript',
  },
  {
    id: 17,
    icon: '💯',
    name: 'Incrementing Counter',
    url: './incrementing-counter/index.html',
    description: 'Simple incrementing counter with HTML, CSS and JavaScript',
  },
  {
    id: 18,
    icon: '💧',
    name: 'Drink Water',
    url: './drink-water/index.html',
    description: 'Simple drink water with HTML, CSS and JavaScript',
  },
  {
    id: 19,
    icon: '🎬',
    name: 'Movie App',
    url: './movie-app/index.html',
    description: 'Simple movie app with HTML, CSS and JavaScript',
  },
  {
    id: 20,
    icon: '🎴',
    name: 'Gradient Hover Card',
    url: './gradient-card/index.html',
    description: 'Simple gradient hover card with HTML, CSS and JavaScript',
  },
  {
    id: 21,
    icon: '🌁',
    name: 'Background Slider',
    url: './background-slider/index.html',
    description: 'Simple background slider with HTML, CSS and JavaScript',
  },
  {
    id: 22,
    icon: '🫳🏼',
    name: 'Drag N Drop',
    url: './drag-drop/index.html',
    description: 'Simple drag and drop with HTML, Tailwind and JavaScript',
  },
  {
    id: 23,
    icon: '⌚️',
    name: 'Theme Clock',
    url: './theme-clock/index.html',
    description: 'Simple theme clock with HTML, CSS and JavaScript',
  },
];

const container = document.getElementById('container');

projects.forEach((project) => {
  const cardLink = document.createElement('a');
  cardLink.href = project.url;
  cardLink.classList.add('card');
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  const cardImgIcon = document.createElement('h2');
  cardImgIcon.classList.add('card-img-icon');
  cardImgIcon.textContent = project.icon;
  const cardInfoWrapper = document.createElement('div');
  cardInfoWrapper.classList.add('card-info-wrapper');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const cardInfoTitle = document.createElement('div');
  cardInfoTitle.classList.add('card-info-title');
  const cardInfoTitleText = document.createElement('h3');
  cardInfoTitleText.textContent = project.name;
  const cardInfoDescription = document.createElement('h4');
  cardInfoDescription.textContent = project.description;
  container.appendChild(cardLink);
  cardLink.appendChild(cardContent);
  cardContent.appendChild(cardImg);
  cardImg.appendChild(cardImgIcon);
  cardContent.appendChild(cardInfoWrapper);
  cardInfoWrapper.appendChild(cardInfo);
  cardInfo.appendChild(cardInfoTitle);
  cardInfoTitle.appendChild(cardInfoTitleText);
  cardInfoTitle.appendChild(cardInfoDescription);
});

const cards = document.querySelectorAll('.card');

container.addEventListener('mousemove', (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
