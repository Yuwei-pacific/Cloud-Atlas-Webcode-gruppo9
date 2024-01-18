const svg = d3.select('#mainsvg')

const myHeight = svg.attr('height');
const myWidth = svg.attr('width');

const pie = d3
  .pie()
  .sort(null)
  .value((d) => d.second);

// 声明圆环函数
const arcPath = d3.arc().innerRadius(75).outerRadius(100);

// 外部圆环函数
const outPath = d3.arc().innerRadius(75).outerRadius(110);

// 1. 绘制饼图
d3.csv('./data/timelineCloudAtlus.csv').then((data => {
  // 声明颜色组
  const colorSet = [
    "#3A1906",
    "#846955",
    "#4F4E3D",
    "#8C7C79",
    "#BFC3C6",
    "#898970"
  ];

  // 声明 d3.pie() 生成器


  // 为数据调用d3.pie()生成器
  const arcData = pie(data);



  // 声明颜色比例尺
  // const color = d3
  //   .scaleOrdinal()
  //   .domain(data.map((d) => d.chapter))
  //   .range(colorSet);

  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.chapter))
    .range(d3.schemeSet3);


  // ------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------sinistra-----------------------------------------------------------------
  svg
    .append("rect")
    .attr("height", myHeight)
    .attr("width", myWidth)
    .attr("fill", "#15181E");

  // 1. primo episodio
  svg
    .append("circle")
    .attr("class", "primoC left")
    .attr("cx", (myWidth / 9) * 1)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")

    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 1)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1849")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "primoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 1)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Adam Ewing")
    .attr("fill", "#F2E8CF");

  // 2. secondo epiodio
  svg
    .append("circle")
    .attr("class", "secondoC left")
    .attr("cx", (myWidth / 9) * 2)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "secondoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 2)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1936")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "secondoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 2)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Robert Frobisher")
    .attr("fill", "#F2E8CF");

  // 3. terzo episodio
  svg
    .append("circle")
    .attr("class", "terzoC left")
    .attr("cx", (myWidth / 9) * 3)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "terzoC left years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 3)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("1973")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "terzoC left name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 3)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Luisa Rey")
    .attr("fill", "#F2E8CF");

  // --------------------------------------------------destra----------------------------------------------------------------

  // 4. quatro episodio
  svg
    .append("circle")
    .attr("class", "quartoC right")
    .attr("cx", (myWidth / 9) * 6)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "quartoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 6)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2012")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "quartoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 6)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Timothy Cavendish")
    .attr("fill", "#F2E8CF");

  // 5. quinto epiodio
  svg
    .append("circle")
    .attr("class", "quintoC right")
    .attr("cx", (myWidth / 9) * 7)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "quintoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 7)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2144")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "quintoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 7)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("SOMNI-452")
    .attr("fill", "#F2E8CF");

  // 6. sesto episodio
  svg
    .append("circle")
    .attr("class", "sestoC right")
    .attr("cx", (myWidth / 9) * 8)
    .attr("cy", myHeight / 2)
    .attr("r", 60)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "sestoC right years")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 8)
    .attr("y", myHeight / 2 - 10)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 30)
    .text("2321")
    .attr("fill", "#F2E8CF");

  svg
    .append("text")
    .attr("class", "sestoC right name")
    .attr("text-anchor", "middle")
    .attr("x", (myWidth / 9) * 8)
    .attr("y", myHeight / 2 + 15)
    .attr("dy", "0.35em") // 垂直偏移，使文本垂直居中
    .attr("font-size", 10)
    .text("Zachry")
    .attr("fill", "#F2E8CF")



  // ------------------------------------------------------------------------------------------------------------------------------


  // ------------------------------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------centro--------------------------------------------------------------------

  // cerchio centro
  // svg
  //   .append("circle")
  //   .attr("cx", myWidth / 2)
  //   .attr("cy", myHeight / 2)
  //   .attr("r", 105)
  //   .attr("fill", "#F2E8CF")

  // svg
  //   .append("circle")
  //   .attr("cx", myWidth / 2)
  //   .attr("cy", myHeight / 2)
  //   .attr("r", 70)
  //   .attr("fill", "#15181E")

  svg
    .append("circle")
    .attr("cx", myWidth / 2)
    .attr("cy", myHeight / 2)
    .attr("r", 105)
    .attr("fill", "none")
    .attr("stroke", "#F2E8CF")

  // 绘制扇形
  svg
    .append("g")
    .selectAll("path")
    .data(arcData)
    .join("path")
    .attr("class", (d) => `chapter-${d.data.chapter}`)
    .attr("transform", `translate(${myWidth / 2},${myHeight / 2})`)
    .attr("d", arcPath)
    .attr("fill", (d) => color(d.data.chapter))
    .attr('opacity', 0.5)
  // .attr("stroke", "#f2e8cf")
  // .attr("stroke-width", 0.1);

  // svg.selectAll(".chapter-1").attr("d", outPath);



  // ------------------------------------------------------------------------------------------------------------------------------
  //start point

  svg.append('path')
    .attr('d', `M${myWidth / 2} 105 V 60 H ${myWidth / 2 + 60}`)
    .attr('fill', 'none')
    .attr('stroke', '#F2E8CF')

  svg.append('text')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2 + 100)
    .attr('y', 60)
    .text('start point')
    .style('font-family', 'Brand')
    .style('font-size', '12px ')
    .attr('fill', '#F2E8CF');

  // ------------------------------------------------------------------------------------------------------------------------------
  // primo
  svg.append('text')
    .attr('class', 'primo-Title')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)  // Adjusted y-coordinate
    .style('font-size', '12px ')
    .style('opacity', 0)  // Adjusted opacity for visibility
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('THE PACIFIC DIARY');

  svg.append('text')
    .attr('class', 'primo-Title')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)  // Adjusted y-coordinate
    .style('font-size', '12px ')
    .style('opacity', 0)  // Adjusted opacity for visibility
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('OF ADAM EWING');


  // secondo
  svg.append('text')
    .attr('class', 'secondo-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('THE LETTERS');

  svg.append('text')
    .attr('class', 'secondo-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('FROM ZEDELGHEM');

  //terzo
  svg.append('text')
    .attr('class', 'terzo-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('HALF LIVES: THE FIRST');

  svg.append('text')
    .attr('class', 'terzo-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('LUISA REY MISTERY');

  //quarto
  svg.append('text')
    .attr('class', 'quarto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('THE GHASTLY OREDEAL OF');

  svg.append('text')
    .attr('class', 'quarto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('TIMOTHY CAVENDISH');

  // quindo
  svg.append('text')
    .attr('class', 'quinto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('THE REVELATION');

  svg.append('text')
    .attr('class', 'quinto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('OF SOMNI-452');

  //sesto
  svg.append('text')
    .attr('class', 'sesto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 - 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('SLOOSHA’S CROSSING');

  svg.append('text')
    .attr('class', 'sesto-Title')
    .attr('text-anchor', 'middle')  // 居中对齐
    .attr('dominant-baseline', 'middle')
    .attr('x', myWidth / 2)
    .attr('y', myHeight / 2 + 10)
    .style('font-size', '12px ')
    .style('opacity', 0)
    .attr('fill', '#F2E8CF')
    .style('font-family', 'Brand')
    .text('AND EVERYTHING AFTER');

  return svg.node();

}))

// ------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', d => {
  if (scrollY >= page[4].offsetTop && scrollY <= page[10].offsetTop) {
    svg.selectAll('.left').attr('transform', 'translate(-30, 0)')
    svg.selectAll('.right').attr('transform', 'translate(30, 0)')
  } else {
    svg.selectAll('.left').attr('transform', 'translate(0, 0)')
    svg.selectAll('.right').attr('transform', 'translate(0, 0)')

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[4].offsetTop && scrollY <= page[5].offsetTop) {
    const circle = document.querySelector('circle.primoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.primoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-1").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.primo-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.primoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.primoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-1").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.primo-Title').style('opacity', 0)

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[5].offsetTop && scrollY <= page[6].offsetTop) {
    const circle = document.querySelector('circle.secondoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.secondoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-2").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.secondo-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.secondoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.secondoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-2").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.secondo-Title').style('opacity', 0)

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[6].offsetTop && scrollY <= page[7].offsetTop) {
    const circle = document.querySelector('circle.terzoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.terzoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-3").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.terzo-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.terzoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.terzoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-3").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.terzo-Title').style('opacity', 0)

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[7].offsetTop && scrollY <= page[8].offsetTop) {
    const circle = document.querySelector('circle.quartoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.quartoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-4").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.quarto-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.quartoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.quartoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-4").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.quarto-Title').style('opacity', 0)

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[8].offsetTop && scrollY <= page[9].offsetTop) {
    const circle = document.querySelector('circle.quintoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.quintoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-5").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.quinto-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.quintoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.quintoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-5").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.quinto-Title').style('opacity', 0)

  }
})

window.addEventListener('scroll', d => {
  if (scrollY >= page[9].offsetTop && scrollY <= page[10].offsetTop) {
    const circle = document.querySelector('circle.sestoC')
    circle.style.fill = '#F2E8CF'

    const text = document.querySelectorAll('text.sestoC')
    // text[0].style.cssText = 'font-family: imfell; font-style: italic;';
    // text[1].style.cssText = 'font-family: imfell; font-style: italic;';
    text[0].style.fill = '#15181E';
    text[1].style.fill = '#15181E';

    svg.selectAll(".chapter-6").attr("d", outPath).attr('opacity', 1);
    svg.selectAll('.sesto-Title').style('opacity', 1)


  } else {
    const circle = document.querySelector('circle.sestoC')
    circle.style.fill = '#15181E'

    const text = document.querySelectorAll('text.sestoC')
    // text[0].style.cssText = 'font-family: helvetica; font-style: normal;';
    // text[1].style.cssText = 'font-family: helvetica; font-style: normal;';
    text[0].style.fill = '#F2E8CF';
    text[1].style.fill = '#F2E8CF';

    svg.selectAll(".chapter-6").attr("d", arcPath).attr('opacity', 0.5);
    svg.selectAll('.sesto-Title').style('opacity', 0)

  }
})

