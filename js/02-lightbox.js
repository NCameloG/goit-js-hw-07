import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(galleryItems);

  galleryContainer.innerHTML = galleryMarkup;

  function createGalleryMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`;
      })
      .join('');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
});
