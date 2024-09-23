document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.vertical-nav');
    const expandButton = document.querySelector('.expand-button');
  
    expandButton.addEventListener('click', () => {
      nav.classList.toggle('expanded');
    });
  });
  