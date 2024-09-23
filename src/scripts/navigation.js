// /scripts/navigation.js

document.addEventListener('DOMContentLoaded', () => {
  const expandButton = document.querySelector('.expand-button');
  const verticalNav = document.querySelector('.vertical-nav');

  expandButton.addEventListener('click', () => {
    verticalNav.classList.toggle('expanded');
  });
});