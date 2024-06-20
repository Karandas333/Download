let btn = document.querySelector('.btn');
let text = document.querySelector('#text');
let bg = document.querySelector('#bg');
let err = document.querySelector('h1');

btn.addEventListener("click", function(){
  err.innerText = 'Downloading....';
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
