document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let currentIndex = 0;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev', 'next');
      if (i === currentIndex) {
        card.classList.add('active');
      } else if (i === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add('prev');
      } else if (i === (currentIndex + 1) % cards.length) {
        card.classList.add('next');
      }
    });
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  updateCarousel();
});
