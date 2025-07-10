const images = [
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'nature', caption: 'Forest' },
  { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80', category: 'animals', caption: 'Dog' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'cities', caption: 'City' },
  { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'nature', caption: 'Mountain' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'cities', caption: 'Skyline' },
  { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80', category: 'animals', caption: 'Cat' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'nature', caption: 'River' },
  { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', category: 'nature', caption: 'Lake' }
];
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeModal = document.getElementById('closeModal');

function renderGallery(filter) {
  gallery.innerHTML = '';
  images.filter(img => filter === 'all' || img.category === filter)
    .forEach(img => {
      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.caption;
      image.addEventListener('click', () => openModal(img));
      gallery.appendChild(image);
    });
}
function openModal(img) {
  modal.style.display = 'flex';
  modalImg.src = img.src;
  caption.textContent = img.caption;
}
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => renderGallery(btn.dataset.filter));
});
renderGallery('all');
