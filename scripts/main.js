// scripts.js

document.addEventListener('DOMContentLoaded', function() {

  const data = [
  {
    id: 1,
    image: 'images/image1.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 2,
    image: 'images/image2.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 3,
    image: 'images/image3.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 4,
    image: 'images/image4.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 5,
    image: 'images/image5.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 6,
    image: 'images/image6.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 7,
    image: 'images/image7.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 8,
    image: 'images/image8.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
  {
    id: 9,
    image: 'images/image9.jpg',
    currentDate: {
      likes: 128,
      comments: 31,
    },
    otherDate: {
      likes: 67,
      comments: 22,
    },
    uploadDate:new Date('2016-04-11')
  },
]

  const tabTitles = document.getElementById('tab-titles');
  const tabRows = document.getElementById('tab-rows');
  const rowsCards = document.getElementById('rows-cards');
  const titlesCards = document.getElementById('titles-cards');

  function renderRowsCards() {
    rowsCards.innerHTML = data.map(item => `
      <div class="rowcard">
        <img src="${item.image}" alt="Image" class="rowcard__image">
        <div class="rowcard__info">

          <div class="rowcard__info-wrapper">
            <p class="rowcard__info-title">Today</p>
            <div class="rowcard__info-datawrapper">
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/heart.svg' alt="likes" />
                <span class="info-text">${item.currentDate.likes}</span>
              </div>
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/comment.svg' alt="likes" />
                <span class="info-text">${item.currentDate.comments}</span>
              </div>
            </div>
          </div>

          <div class="rowcard__info-wrapper">
            <p class="rowcard__info-title">9-08-2016</p>
            <div class="rowcard__info-datawrapper">
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/heart.svg' alt="likes" />
                <span class="info-text">${item.otherDate.likes}</span>
              </div>
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/comment.svg' alt="likes" />
                <span class="info-text">${item.otherDate.comments}</span>
              </div>
            </div>
          </div>

          <div class="rowcard__info-wrapper">
            <p class="rowcard__info-title">Image upload</p>
            <p class="rowcard__info-text">9-08-2016</p>
          </div>

        </div>
      </div>
    `).join('');
  }

  function renderTitlesCards() {
    titlesCards.innerHTML = data.map(item => `
      <div class="titlescard">
        <img src="${item.image}" alt="Image" class="titlescard__image">
        <div class="titlescard__wrapper">
        <div class="titlescard__info">

          <div class="titlescard__info-wrapper grow">
            <p class="titlescard__info-title">Today</p>
            <div class="titlescard__info-datawrapper">
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/heart.svg' alt="likes" />
                <span class="info-text">${item.currentDate.likes}</span>
              </div>
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/comment.svg' alt="likes" />
                <span class="info-text">${item.currentDate.comments}</span>
              </div>
            </div>
          </div>

          <div class="titlescard__info-wrapper">
            <p class="titlescard__info-title">9-08-2016</p>
            <div class="titlescard__info-datawrapper">
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/heart.svg' alt="likes" />
                <span class="info-text">${item.otherDate.likes}</span>
              </div>
              <div class="rowcard__info-likes">
                <img class="info-icon" src='images/comment.svg' alt="likes" />
                <span class="info-text">${item.otherDate.comments}</span>
              </div>
            </div>
          </div>
        </div>

          <div class="titlescard__upload-wrapper">
            <p class="titlescard__upload-title">Image upload</p>
            <p class="titlescard__upload-text">9-08-2016</p>
          </div>

        </div>
      </div>
    `).join('');
  }

  function setActiveTab(tab) {
    if (tab === 'rows') {
      tabRows.classList.add('content__tab--active');
      tabTitles.classList.remove('content__tab--active');
      rowsCards.style.display = 'flex';
      titlesCards.style.display = 'none';
    } else {
      tabTitles.classList.add('content__tab--active');
      tabRows.classList.remove('content__tab--active');
      titlesCards.style.display = 'grid';
      rowsCards.style.display = 'none';
    }
  }

  tabRows.addEventListener('click', () => setActiveTab('rows'));
  tabTitles.addEventListener('click', () => setActiveTab('titles'));

  // Initial render
  renderRowsCards();
  renderTitlesCards();
  setActiveTab('rows');
});
