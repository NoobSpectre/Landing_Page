const accordion = document.querySelector('.accordion');
const labels = accordion.querySelectorAll('.label');

// const contentHandler = () => {
//   const contents = accordion.querySelectorAll('.content');

//   contents.forEach(ct => {
//     ct.style.maxHeight = '0px';
//     ct.style.padding = '0px 20px';
//   });
// };

labels.forEach(label => {
  label.addEventListener('click', e => {
    const opener = label.querySelector('span:last-child');
    const content = label.nextElementSibling;
    // contentHandler();

    const classList = opener.classList;
    if (classList.contains('open')) {
      content.style.maxHeight = '0px';
      content.style.padding = '0px 20px';

      classList.remove('open');
    } else {
      classList.add('open');

      content.style.maxHeight = '600px';
      content.style.padding = '30px 20px';
    }
  });
});
