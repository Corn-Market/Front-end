
window.addEventListener("load", function () {

  let slides = document.querySelectorAll(".swiper .swiper-wrap .swiper-slide");
  let contents = [];  //배열
  slides.forEach(function (slide, index) {
    contents[index] = slide.innerHTML;
    //alert(contents[index]);
  });
  
  let index = 0;
  function nextSlide() {
    index++;
    if (index >= contents.length)
      index = 0;

    let swiper = document.querySelector(".swiper .swiper-wrap");
    //alert(siper-wrap);
    swiper.innerHTML = contents[index];

    //애니메이션 효과 
    swiper.animate({
      transform: [
        'translateX(100%)',    //시작
        'translateX(0px)'      //도착
      ]
    },
      {
        duration: 1000               // 위의효과가 1초간 지속되도록
      });
  }

  setInterval(nextSlide, 3000);

});
