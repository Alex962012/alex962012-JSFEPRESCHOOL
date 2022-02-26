    "use strict"
    const memory=document.querySelectorAll('.memory-card')

    let hasFlip=false
    let firstCard
    let secondCard 
    let lockBoard=false
    function flipMemory(){
        if (lockBoard)return;
        this.classList.add('flip')
    
   

    if(!hasFlip){
        hasFlip=true;
        firstCard=this
        return;
    }
    secondCard=this;
    hasFlip=false;
    checkCard()
}
    function checkCard(){
     if(firstCard.dataset.name===secondCard.dataset.name){
      disable()
    
      return
    
    }
    notflipMemory ()
   
}
    function disable(){
        firstCard.removeEventListener('click',flipMemory)
        secondCard.removeEventListener('click',flipMemory)
    }

   function notflipMemory (){
    lockBoard=true;
    console.log(lockBoard)
           setTimeout(() => {
               firstCard.classList.remove('flip');
                 secondCard.classList.remove('flip');
                 lockBoard=false
           },   1500);
               }

    memory.forEach((name)=>{
        name.addEventListener("click",flipMemory)
    })
    function randomaser(){
        memory.forEach((number)=>{
            let random=Math.floor(Math.random()*12)
            number.style.order=random
            console.log(number.style.order)
        })
    }
    randomaser()