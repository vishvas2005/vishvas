function anime(){
  gsap.from(".page2 h1",{
    x:-1700,
     scrollTrigger:{
      trigger:".page2 h1",
      scroller:"body",
      scrub:2,
     }
  })
  gsap.from(".page3 h1",{
    opacity:0,
    duration:2,
     scrollTrigger:{
      trigger:".page3 h1",
      scroller:"body",
     }
  })
  gsap.from(".page3 .buttons ",{
    opacity:0,
    duration:0.3,
     scrollTrigger:{
      trigger:".page3 .buttons",
      scroller:"body",
     }
  })
  gsap.from(".images img",{
    x:-400,
    duration:0.9,
     scrollTrigger:{
      trigger:" .images img",
      scroller:"body",
     }
  })
  gsap.from(".flt img",{
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".flt img",
      scroller:"body",
      scrub:true,
    }
  })
  gsap.from(".work",{
    x:-100,
    scrollTrigger:{
      trigger:".work ",
      scroller:"body",
  
    }
  })
  gsap.from(".page5 video",{
    scale:1.8,
    scrollTrigger:{
      trigger:".page5 video ",
      scroller:"body",
      scrub:true,
    }
  })
  gsap.from(".page6 h1",{
    x:-400,
    duration:0.5,
    scrollTrigger:{
      trigger:".page6 h1 ",
      scroller:"body",
    }
  })
  gsap.from(".page6 p",{
    y:-300,
    duration:0.5,
    scrollTrigger:{
      trigger:".page6 p ",
      scroller:"body",
    }
  })
}



function slider(){
  var butten = document.querySelector(".bkl");
  var slider = document.querySelector(".extra")
  butten.addEventListener('click',function(){
      slider.style.top="0%"
  });
  butten.addEventListener('mouseleave',function(){
    slider.style.top="-100%"
  });
  
}




anime();
slider();
