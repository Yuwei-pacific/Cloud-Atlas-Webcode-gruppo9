const page = document.querySelectorAll('.scrollSection');
const sections = Array.from(page);
const everyThing = document.querySelector('.everyThing');
const future = document.querySelector('.future');
const textSlider = document.querySelector('.text-slider');
const span = document.querySelectorAll('.text-slider span');
const timelineTitle = document.querySelector('.timelineTitle')
const part1Svg = document.querySelector('.svgContainer');
const videoBox = document.querySelector('.videoBox')
const video = document.getElementById('myVideo');
const timeLineSpiega = document.querySelector('.timeLine-Spiega')
const part2Images = document.querySelectorAll('.part2 img');
const btnNuvola = document.querySelector('#nuvolaButton');

let sectionTops = [];
let latestScrollY = 0;
let ticking = false;
let scrollEffectsEnabled = false;
let textIndex = 0;

function cacheSectionTops() {
  sectionTops = sections.map((section) => section.offsetTop);
}

function getSectionTop(index) {
  return sectionTops[index] ?? 0;
}



window.onload = function () {
  window.scrollTo(0, 0);
  part1Svg.classList.remove('visible')
  timelineTitle.classList.remove('visible')
  timeLineSpiega.classList.remove('visible')
  cacheSectionTops();
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
}, 3800); // 5000毫秒等于5秒


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
  scrollEffectsEnabled = true;
  handleScroll();

});







// console.log(document.querySelector('#mainsvg text'));

// text scroll ----------------

function updateOpacity(scrollY) {

  // console.log(scrollY);
  // Check scroll position for opacity
  const section0 = getSectionTop(0);
  const section1 = getSectionTop(1);
  const section2 = getSectionTop(2);
  const section3 = getSectionTop(3);
  const section10 = getSectionTop(10);

  everyThing.classList.toggle('visible', scrollY >= section0 && scrollY < section3 - 15);
  future.classList.toggle('visible', scrollY >= section0 && scrollY < section3 - 15);
  textSlider.classList.toggle('visible', scrollY >= section0 && scrollY < section3 - 15);

  // Check scroll position for text animation
  if (scrollY >= section2 && scrollY <= section3) {
    textIndex = 2;
  } else if (scrollY >= section1 && scrollY <= section2) {
    textIndex = 1;
  } else {
    textIndex = 0;
  }
  for (let i = 0; i < span.length; i++) {
    span[i].style.left = `${50 + i * 100 - textIndex * 100}%`;
  }


  // Check scroll position for part1Svg
  part1Svg.classList.toggle('visible', scrollY >= section3 && scrollY <= section10 + 200)
  timelineTitle.classList.toggle('visible', scrollY >= section3 && scrollY <= section10 + 200)
  timeLineSpiega.classList.toggle('visible', scrollY >= section3 && scrollY <= section10 + 100)
}

function updatePart2(scrollY) {
  if (scrollY >= getSectionTop(3)) {
    videoBox.style.opacity = 0
  } else {
    videoBox.style.opacity = 1
  }

  if (btnNuvola) {
    btnNuvola.classList.toggle('visible', scrollY >= getSectionTop(11) + 700 && scrollY <= getSectionTop(12) - 710)
  }

  if (!part2Images.length) {
    return;
  }

  let activeIndex = -1;
  if (scrollY >= getSectionTop(13) - 600 && scrollY <= getSectionTop(14)) {
    activeIndex = 0;
  } else if (scrollY >= getSectionTop(14) && scrollY <= getSectionTop(15)) {
    activeIndex = 1;
  } else if (scrollY >= getSectionTop(15) && scrollY <= getSectionTop(16)) {
    activeIndex = 2;
  } else if (scrollY >= getSectionTop(16) && scrollY <= getSectionTop(17)) {
    activeIndex = 3;
  } else if (scrollY >= getSectionTop(17) && scrollY <= getSectionTop(18)) {
    activeIndex = 4;
  } else if (scrollY >= getSectionTop(18) && scrollY <= getSectionTop(19)) {
    activeIndex = 5;
  } else if (scrollY >= getSectionTop(19) && scrollY <= getSectionTop(20)) {
    activeIndex = 6;
  } else if (scrollY >= getSectionTop(20) && scrollY <= getSectionTop(21)) {
    activeIndex = 7;
  } else if (scrollY >= getSectionTop(21) && scrollY <= getSectionTop(22)) {
    activeIndex = 8;
  } else if (scrollY >= getSectionTop(22) && scrollY <= getSectionTop(23)) {
    activeIndex = 9;
  }

  for (let i = 0; i < part2Images.length; i++) {
    part2Images[i].classList.toggle('visible', i === activeIndex);
  }
}

function handleScroll() {
  if (!scrollEffectsEnabled) {
    return;
  }

  updateOpacity(latestScrollY);
  updatePart2(latestScrollY);
}

function onScroll() {
  latestScrollY = window.scrollY;

  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      handleScroll();
    });
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', () => {
  cacheSectionTops();
  handleScroll();
});

// ------------------

document.addEventListener('DOMContentLoaded', function () {
  // 获取图片元素
  const image1 = document.querySelector('.senzatesto');
  const image2 = document.querySelector('.contesto');

  if (btnNuvola) {
    btnNuvola.addEventListener('click', (d) => {
      console.log(12312312312);
      d.preventDefault()
      image1.classList.toggle('visible');
      image2.classList.toggle('visible');
    })
  }
})













