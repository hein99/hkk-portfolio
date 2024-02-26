// text amount
const textSwapperElement = document.querySelector('#text-amount-swapper');
textSwapperElement.addEventListener('change', (e) => {
  displayTextAmount(Number(e.currentTarget.value));
});
displayTextAmount(1); // for default

function displayTextAmount(amount) {
  const firstParagraph = document.querySelector('#about-me-p-1');
  const secondParagraph = document.querySelector('#about-me-p-2');
  const thirdParagraph = document.querySelector('#about-me-p-3');
  const fourthParagraph = document.querySelector('#about-me-p-4');

  if (amount == 0) {
    firstParagraph.style.display = 'block';
    secondParagraph.style.display = 'none';
    thirdParagraph.style.display = 'none';
    fourthParagraph.style.display = 'none';
  } else if (amount == 1) {
    firstParagraph.style.display = 'block';
    secondParagraph.style.display = 'none';
    thirdParagraph.style.display = 'block';
    fourthParagraph.style.display = 'none';
  } else if (amount == 2) {
    firstParagraph.style.display = 'block';
    secondParagraph.style.display = 'block';
    thirdParagraph.style.display = 'block';
    fourthParagraph.style.display = 'none';
  } else {
    firstParagraph.style.display = 'block';
    secondParagraph.style.display = 'block';
    thirdParagraph.style.display = 'block';
    fourthParagraph.style.display = 'block';
  }
}
