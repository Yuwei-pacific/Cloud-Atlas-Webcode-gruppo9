const page = document.querySelectorAll('.scrollSection');
const everyThing = document.querySelector('.everyThing');
const future = document.querySelector('.future');
const textSlider = document.querySelector('.text-slider');
const span = document.querySelectorAll('.text-slider span');
const timelineTitle = document.querySelector('.timelineTitle')
const part1Svg = document.querySelector('.svgContainer');
const videoBox = document.querySelector('.videoBox')
const video = document.getElementById('myVideo');



window.onload = function () {
  window.scrollTo(0, 0);
  part1Svg.classList.remove('visible')
  timelineTitle.classList.remove('visible')
};

// let lastScrollTop = 0;
// const maxScrollDistance = 100; // 设置最大滚动距离

// window.addEventListener('scroll', function () {
//   const currentScrollTop = window.scrollY;

//   // 计算滚动距离
//   const scrollDistance = Math.abs(currentScrollTop - lastScrollTop);

//   // 如果滚动距离超过最大值，则将滚动距离限制为最大值
//   if (scrollDistance > maxScrollDistance) {
//     if (currentScrollTop > lastScrollTop) {
//       // 向下滚动
//       window.scrollTo(0, lastScrollTop + maxScrollDistance);
//     } else {
//       // 向上滚动
//       window.scrollTo(0, lastScrollTop - maxScrollDistance);
//     }
//   }

//   // 更新上次滚动位置
//   lastScrollTop = window.scrollY;
// });


let c = 0
scrollText()
everyThing.classList.remove('visible');
future.classList.remove('visible');
textSlider.classList.remove('visible');


console.log(page);

// // 监听视频播放事件
video.addEventListener("play", function () {
  // 在视频播放时禁止页面滚动
  document.body.style.overflow = "hidden";
});

//暂停视频
setTimeout(function () {
  video.pause();
  console.log(11111);
}, 3400); // 5000毫秒等于5秒


// 添加滚动范围限制逻辑
function stopPageScroll() {
  var scrollTop = window.scrollY;

  if (scrollTop < 1) {
    window.scrollTo(0, 1);
  } else if (scrollTop > 10) {
    window.scrollTo(0, 10);
  }
}


// // 监听视频暂停事件
function stopScroll() {
  // 在视频暂停时允许页面滚动，但限制滚动距离在1-10之间
  document.body.style.overflow = "auto";

  window.addEventListener("scroll", stopPageScroll);
}
video.addEventListener("pause", stopScroll);


// 当页面滚动播放视频
function playVideo() {
  if (window.scrollY > 1) {
    video.play()
  }
}
window.addEventListener('scroll', playVideo)

video.addEventListener("ended", function () {
  // 在视频播放结束后允许页面滚动
  document.body.style.overflow = "auto";
  video.removeEventListener('pause', stopScroll)
  window.removeEventListener('scroll', playVideo)
  window.removeEventListener("scroll", stopPageScroll);
  scrollText()

});







// console.log(document.querySelector('#mainsvg text'));

// text scroll ----------------

function updateOpacity() {
  const scrollY = window.scrollY;

  // console.log(scrollY);
  // Check scroll position for opacity
  everyThing.classList.toggle('visible', scrollY >= page[0].offsetTop && scrollY < page[3].offsetTop - 15);
  future.classList.toggle('visible', scrollY >= page[0].offsetTop && scrollY < page[3].offsetTop - 15);
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
  part1Svg.classList.toggle('visible', scrollY >= page[3].offsetTop)
  timelineTitle.classList.toggle('visible', scrollY >= page[3].offsetTop)
}


function scrollText() {
  updateOpacity();
}



// Attach the updateOpacity function to the scroll event
video.addEventListener("ended", function () {
  window.addEventListener('scroll', updateOpacity);
});



window.addEventListener('scroll', d => {
  const img = document.querySelectorAll('.part2 img')
  const scrollY = window.scrollY;
  // console.log(img);
  // console.log(img[0]);
  // console.log(scrollY);
  // console.log(page[10].offsetTop);
  img[0].classList.toggle('visible', scrollY >= page[10].offsetTop && scrollY <= page[11].offsetTop)
  img[1].classList.toggle('visible', scrollY >= page[11].offsetTop && scrollY <= page[12].offsetTop)
  img[2].classList.toggle('visible', scrollY >= page[12].offsetTop && scrollY <= page[13].offsetTop)
  img[3].classList.toggle('visible', scrollY >= page[13].offsetTop && scrollY <= page[14].offsetTop)
  img[4].classList.toggle('visible', scrollY >= page[14].offsetTop && scrollY <= page[15].offsetTop)
  img[5].classList.toggle('visible', scrollY >= page[15].offsetTop && scrollY <= page[16].offsetTop)
  img[6].classList.toggle('visible', scrollY >= page[16].offsetTop && scrollY <= page[17].offsetTop)
  img[7].classList.toggle('visible', scrollY >= page[17].offsetTop && scrollY <= page[18].offsetTop)
  img[8].classList.toggle('visible', scrollY >= page[18].offsetTop && scrollY <= page[19].offsetTop)
  img[9].classList.toggle('visible', scrollY >= page[19].offsetTop && scrollY <= page[20].offsetTop)
})










