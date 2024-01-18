
const page = document.querySelectorAll('.scrollSection');
const everyThing = document.querySelector('.everyThing');
const future = document.querySelector('.future');
const textSlider = document.querySelector('.text-slider');
const span = document.querySelectorAll('.text-slider span');
const part1Svg = document.querySelector('.svgContainer');

// console.log(document.querySelector('#mainsvg text'));

// text scroll ----------------

function updateOpacity() {
  const scrollY = window.scrollY;

  // Check scroll position for opacity
  everyThing.classList.toggle('visible', scrollY >= page[0].offsetTop && scrollY < page[3].offsetTop - 15);
  future.classList.toggle('visible', scrollY >= page[0].offsetTop);
  textSlider.classList.toggle('visible', scrollY >= page[0].offsetTop && scrollY < page[3].offsetTop - 15);

  // Check scroll position for text animation
  function scrollText() {
    for (let i = 0; i < span.length; i++) {
      span[i].style.left = `${50 + i * 100 - c * 100}%`;
    }
  }
  let c = 0;
  scrollText()
  if (scrollY >= page[1].offsetTop && scrollY <= page[2].offsetTop) {
    c = 1
    scrollText()
  }
  if (scrollY >= page[2].offsetTop && scrollY <= page[3].offsetTop) {
    c = 2
    scrollText()
    // console.log(c);
  }


  // Check scroll position for part1Svg
  part1Svg.classList.toggle('visible', scrollY >= page[3].offsetTop);
}


function scrollText() {
  updateOpacity();
}

// Attach the updateOpacity function to the scroll event
window.addEventListener('scroll', updateOpacity);










