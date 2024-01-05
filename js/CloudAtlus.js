
(function () {
  const span = document.querySelectorAll('.text-slider span')
  const container = document.querySelector('.text-slider')

  for (let i = 0; i < span.length; i++) {
    span[i].style.left = `${50 + i * 100}%`
  }

  let c = 0

  container.addEventListener('click', function () {
    c++
    c === 3 ? c = 0 : c = c
    for (let i = 0; i < span.length; i++) {
      span[i].style.left = `${50 + i * 100 - c * 100}%`
    }
  })
})();