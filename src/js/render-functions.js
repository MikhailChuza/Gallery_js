const gallery = document.querySelector('.gallery');

function generateMarkup(data) {
  const markup = data.hits
    .map(
      item => `
        <li class="gallery-item" data-id="${item.id}">
          <div class="img-container">
            <a class="large-image" href="${item.largeImageURL}">
              <img class="image" src="${item.webformatURL}" alt="${item.tags}">
            </a> 
          </div>
          <ul class="description-list">
            <li class="description-item"><p>Likes</p><p>${item.likes}</p></li>
            <li class="description-item"><p>Views</p><p>${item.views}</p></li>
            <li class="description-item"><p>Comments</p><p>${item.comments}</p></li>
            <li class="description-item"><p>Downloads</p><p>${item.downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export default generateMarkup;