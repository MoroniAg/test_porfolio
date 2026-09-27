const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealItems.forEach((item) => observer.observe(item));

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('.social-link').forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-4px) scale(1.02)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0) scale(1)';
  });
});
