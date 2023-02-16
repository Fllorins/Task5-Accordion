document.querySelectorAll('.accordion-item__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion-item--active')) {
      parent.classList.remove('accordion-item--active');
    } else {
      document.querySelectorAll('.accordion-item').forEach((child) => {
        child.classList.remove('accordion-item--active');
      });
      parent.classList.add('accordion-item--active');
    }

    let content = item.nextElementSibling;
    if (content.style.maxHeight) {
      document
        .querySelectorAll('.accordion-item__content')
        .forEach((item) => (item.style.maxHeight = null));
    } else {
      document
        .querySelectorAll('.accordion-item__content')
        .forEach((item) => (item.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
