let slides = [".slide01" , ".slide02" , ".slide03" , ".slide04"];

let index = 0;

function next(){
  index++;
  if(index >= slides.length)
    index = 0;

    let slider = document.querySelector(".home-main-slide");
    
    slider.animate({
      transform:[
        'translateX(1100px)',
        'translateX(0px)'
      ]
    },
    {
      duration:500
    });
}

function prev(){
  index--;
  if(index <=0)
    index = slides.length -1;

    let slider = document.querySelector(".home-main-slide");


    slider.animate({
      transform:[
        'translateX(-1100px)',
        'translateX(0px)'
      ]
    },
    {
      duration:500
    });
}
