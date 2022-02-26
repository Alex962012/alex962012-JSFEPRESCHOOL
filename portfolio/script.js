
  import i18Obj from './translate.js';

   (function (){
    
    const light=document.querySelector('.light')
   
    const lightTheme=document.querySelectorAll('.section')
    const burger=document.querySelector('.hamburger');
    const menu=document.querySelector(".nav");
    const menuClose=document.querySelector('.close');
    const navItem=document.querySelectorAll('.nav-item');
    const portfolioPhotos=document.querySelectorAll(".photo-cont");
    const buttonSection=document.querySelector(".section-button")
    const portfolioBtns=document.querySelectorAll('.button-portfolio')
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    const elemi108 = document.querySelectorAll('[data-i18]');
    const ru=document.querySelector('.white')
    const en=document.querySelector('.gold')
    const lightSection=document.querySelectorAll('.section-title-box')
    const langBtn=document.querySelectorAll('.tran')


    ru.addEventListener('click',()=>{
      elemi108.forEach((key)=>{        
          key.textContent=i18Obj.ru[`${key.dataset.i18}`]
          
      
      })
    })
    en.addEventListener('click',()=>{
      elemi108.forEach((key)=>{        
          key.textContent=i18Obj.en[`${key.dataset.i18}`]
          
      
      })
    })



    function preloadImages() {
    seasons.forEach((name)=>{
      for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${name}/${i}.jpg`;
      }
    })
    }
   preloadImages()
   
    
   
   
   
   
   
    burger.addEventListener('click',()=>{
    menu.classList.add("nav_active"); 
    });
    menuClose.addEventListener('click',()=>{
      menu.classList.remove("nav_active");
  
    });
    navItem[0].addEventListener('click',()=>{
      menu.classList.remove('nav_active')
    })
    navItem[1].addEventListener('click',()=>{
      menu.classList.remove('nav_active')
    })
    navItem[2].addEventListener('click',()=>{
      menu.classList.remove('nav_active')
    })
    navItem[3].addEventListener('click',()=>{
      menu.classList.remove('nav_active')
    })
    navItem[4].addEventListener('click',()=>{
      menu.classList.remove('nav_active')
    })

    // lightTheme.classList.remove('light-theme') 

    light.addEventListener('click',()=>{
      lightTheme.forEach((name)=>{
        name.classList.toggle('light')
        console.log('temnay')
      })
      lightSection.forEach((nameSection)=>{
        nameSection.classList.toggle('light-title')
      
      })
      
    })

  langBtn.forEach((lang)=>
  lang.addEventListener('click',()=>
  {for(let i=0; i<langBtn.length; i++)
    { langBtn[i].classList.remove('active')
    }
    event.target.classList.add('active')
   } )
  )


   portfolioBtns.forEach((bt)=>
   
  bt.addEventListener('click',()=>
  {for(let i=0; i<portfolioBtns.length; i++)
  { portfolioBtns[i].classList.remove('active')
  }
  event.target.classList.add('active')
 }
  )
   )
     
    

 
    portfolioBtns.forEach((btn)=>{
   
      
    btn.addEventListener('click',(changeImage))
    
    function changeImage(event) {

      if(event.target.classList.contains('button-portfolio')) {
          portfolioPhotos.forEach((img,index)=>img.src=`./assets/img/${btn.dataset.year}/${index+1}.jpg`)
          
         }
        //  btn.classList.add('active')
      }}) 
        
    //   }
    // }

  }());

