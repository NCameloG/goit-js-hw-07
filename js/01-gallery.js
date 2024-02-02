import { galleryItems } from './gallery-items.js';

let currentLightbox = null;

document.addEventListener('DOMContentLoaded', function () {
  console.log(galleryItems);

  function renderGallery() {
    const gallery = document.querySelector('.gallery');

    galleryItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.original}" class="gallery__link">
                        <img src="${item.preview}" class="gallery__image" alt="Gallery Item" data-index="${index}">
                      </a>`;
      gallery.appendChild(li);
    });

    gallery.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.tagName === 'IMG') {
        const index = event.target.getAttribute('data-index');
        const largeImageUrl = galleryItems[index].original;

        currentLightbox = basicLightbox.create(`
          <img src="${largeImageUrl}" alt="Large Image">
        `);

        currentLightbox.show();
      }
    });
  }

  renderGallery();
});

document.addEventListener('keydown', onClose);
function onClose(e) {
  if (e.code === 'Escape' && currentLightbox && currentLightbox.visible()) {
    currentLightbox.close();
  }
}
