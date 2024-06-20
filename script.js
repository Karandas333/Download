let btn = document.querySelector('.btn');
let text = document.querySelector('#text');
let bg = document.querySelector('#bg');

btn.addEventListener("click", function(){
  
  gsap.from(bg,{
    x:'-100%',
    delay:0.4,
    duration: 3
  })
  gsap.to(text,{
    color:'#fff',
    duration:2,
    delay:0.4
  })
})
