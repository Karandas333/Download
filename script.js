let btn = document.querySelector('.btn');
let text = document.querySelector('#text');
let bg = document.querySelector('#bg');

btn.addEventListener("click", function(){
  gsap.to(bg,{
    x:0,
    delay:0.4,
    duration: 3
  })
  gsap.to(text,{
    color:'#fff',
    duration:1.5,
    delay:0.4
  })
})
