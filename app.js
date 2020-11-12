const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const images = document.querySelector('.images');
const text = document.querySelector('.text')
let auto = false;
let counter = 0;
let slideShow;
//const img = [m-1.jpg, m-2.jpg, m-3.jpg, m-4.jpg, m-5.jpg, m-6.jpg]

const imgsArray = ['img/m0.jpg', 'img/m1.jpg', 'img/m2.jpg', 'img/m3.jpg', 'img/m4.jpg', 
'img/m5.jpg', 'img/m6.jpg', 'img/m7.jpg', 'img/m8.jpg', 'img/m9.jpg']


next.addEventListener('click', () => {
      nextSlide()
      if(auto){
          clearInterval(slideShow);
          slideShow = setInterval(nextSlide, 3000);
      }
        
     })


const nextSlide = () => {
    images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})
    if(counter === imgsArray.length-1){
        counter = -1;

    }
    
    counter++;

    images.style.backgroundImage = `url(img/m${counter}.jpg)`
    text.innerText = 'WELCOME'
   
}    
prev.addEventListener('click', () => {
    prevSlide()
    if(auto) {
        clearInterval(slideShow);
         slideShow = setInterval(nextSlide, 3000);
    }
   })


const prevSlide = () => {
  images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})
  if(counter === 0){
      counter = imgsArray.length;

  }
  
  counter--;

  images.style.backgroundImage = `url(img/m${counter}.jpg)`
  text.innerText = 'WELCOME'
 
}    

if(auto){
    slideShow = setInterval(nextSlide, 3000)
        
    
   
}


// next.addEventListener('click', () => {
//     nextSlide()
//     if(auto) {
//         clearInterval(slideShow);
//         slideShow = setInterval(nextSlide, 3000);
//     }
// })
 
// const nextSlide = () => {
//     images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})

//     if(counter === 9){
//         counter = -1;
//     }
//     counter++;

//     images.style.backgroundImage = `url(img/m-${counter}.jpg)`
//     text.innerText = 'WELCOME'
   
    
// }

// prev.addEventListener('click', () => {
//     prevSlide()
//     if(auto) {
//         clearInterval(slideShow);
//         slideShow = setInterval(nextSlide, 3000);
//     }
// })

// const prevSlide = () => {
//     images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})
//     if(counter === 0){
//         counter = 10;
//     }
//     counter--;

//     images.style.backgroundImage = `url(img/m-${counter}.jpg)`
//     text.innerText = 'WELCOME'
// }


// if(auto) {
//     slideShow = setInterval(nextSlide, 3000);
// }



