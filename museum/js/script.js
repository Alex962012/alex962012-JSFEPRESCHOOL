const prev=document.getElementById('btn_prev'),
      next=document.getElementById('btn_next'),
      slides=document.querySelectorAll('.picture_container'),
      dots=document.querySelectorAll('.dot');
      prevVideo=document.getElementById('btn_prev_video'),
      nextVideo=document.getElementById('btn_next_video'),
      slidesVideo=document.querySelectorAll('.slide'),
      dotsVideo=document.querySelectorAll('.dot_video')
let index=0;
let indexVideo=3;                    
const activeSlide = n =>{
    
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n =>{
    
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const prepareCurrentSlide=ind=>{
    activeSlide(ind);
    activeDot(ind);
}
const nextSlides= () =>{
    if(index==slides.length-1){
        index=0;
        prepareCurrentSlide(index)
        
    }
    else{
        index++;
        prepareCurrentSlide(index)
    }
}
const lastSlides=()=>{
    
    if(index==0){
        index=slides.length-1
        prepareCurrentSlide(index)
    }
    else{
        index--;
        prepareCurrentSlide(index)
    }
}


dots.forEach((item,indexDot)=>{
    item.addEventListener("click",()=>{
        index=indexDot;
        prepareCurrentSlide(index);
    })
})


next.addEventListener('click', nextSlides);
prev.addEventListener('click',lastSlides);
//
//
//Video slider
// const activeSlideVideo = n =>{
    
//     for(slide of slidesVideo){
//         slidesVideo[n-1].classList.remove('active');
//         slidesVideo[n].classList.add('active');
//         slidesVideo[n+2].classList.add('active');
//     }
//     slidesVideo[n].classList.add('active');
//     slidesVideo[n+2].classList.add('active');
     
     
// }
// const activeDotVideo = n =>{
    
//     for(dot of dotsVideo){
//         dot.classList.remove('active');
//     }
//     dotsVideo[n].classList.add('active');
// }
// const prepareCurrentSlideVideo=ind=>{
//     activeSlideVideo(ind);
//     activeDotVideo(ind);
// }
// const nextSlidesVideo= () =>{
//     if(index==slidesVideo.length-1){
//         index=0;
        
//         prepareCurrentSlideVideo(index)
        
//     }
//     else{
//         index++;
//         prepareCurrentSlideVideo(index)
//     }
// }
// const lastSlidesVideo=()=>{
    
//     if(index==0){
//         index=slidesVideo.length
//         prepareCurrentSlideVideo(index)
//     }
//     else{
//         index--;
//         prepareCurrentSlideVideo(index)
//     }
// }


// dotsVideo.forEach((item,indexDot)=>{
//     item.addEventListener("click",()=>{
//         index=indexDot;
//         prepareCurrentSlideVideo(index);
//     })
// })


// nextVideo.addEventListener('click', nextSlidesVideo);
// prevVideo.addEventListener('click',lastSlidesVideo);