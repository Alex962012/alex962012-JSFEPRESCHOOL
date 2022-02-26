
const canvas=document.querySelector('.canvas');
const ctx=canvas.getContext('2d')
const bird=new Image();
const background=new Image();
const columnUp=new Image();
const columnDown=new Image();
bird.src='./assets/png.png'
background.src="./assets/background.png"
columnUp.src='./assets/colomnup.png'
columnDown.src='./assets/colomndown.png'
const c=90;
const over=new Audio()
over.src="./assets/game-over.mp3"
const jumpMusic=new Audio()
jumpMusic.src='./assets/jump.mp3'
const colomnBird=new Audio()
colomnBird.src='./assets/colomn.mp3'



let posY=160;
let posX=10;
let grav=1;

let score=0;
let block=[]





var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
console.log(n) 


block[0]={
    x:canvas.width,
    y:0
}


function total(){
    localStorage.removeItem("on_load_counter")
    let pre = document.createElement('pre');
    pre.className = "pre";
    pre.style.width="300px"
    
    pre.style.margin = "100px 80px"
    pre.style.display.flex="flex"
    pre.style.flexWrap="wrap"
    let arr=[]
    let keys = Object.keys(localStorage);
for(let key of keys) {
    arr=arr+" "+(`${key}:  ${localStorage.getItem(key)}\n`);   
      }
      let b="SCORE \n"
      arr=b.concat(arr)
      console.log(arr)
      pre.innerHTML = arr;
      document.body.append(pre);
    //   canvas.style.display="none"
}

function buttonTry(){
    let again = document.createElement('button');
    again.innerHTML = "TRY";
    again.className = "button";
    again.style.margin="300px 100px "
    document.body.append(again);
    again.addEventListener('click',()=>{
        replay()
        localStorage.clear();
    })  
}
function birdUp(){
    posY-=30
    soundJump()
    
}
function soundJump(){
   jumpMusic.play() ;
}
function soundColomn(){
    colomnBird.play()
}

function replay(){
    location.reload()
}
function reset_counter() {
    localStorage.removeItem('on_load_counter');
}
let namePlayer=prompt("Please press your name")
function draw (){
    
document.addEventListener('keydown',birdUp)
    ctx.drawImage(background,0,0);
    for( let i=0; i<block.length; i++){
    ctx.drawImage(columnUp,block[i].x, block[i].y);
    ctx.drawImage(columnDown,block[i].x,block[i].y+columnUp.height+c);
    ctx.drawImage(bird,posX,posY);
        block[i].x--
    
    if (block[i].x==150){
        block.push({
            x:canvas.width,
            y:Math.floor(Math.random()*(columnUp.height-columnDown.height))
        })}
    if( posX+bird.width>=block[i].x&&(posX<=block[i].x+columnUp.width&&(posY<=block[i].y+columnUp.height||posY+bird.height>=block[i].y+columnUp.height+c))){
    
    
        
        localStorage.setItem("on_load_counter", n);
        localStorage.setItem(`${namePlayer}`,score)
        
        over.play()
        
        setTimeout(replay, 1200);
    }
    if(block[i].x==20){
        score++
       
        soundColomn()
    }
   
    
    }

    posY+=grav
    ctx.fillStyle="#000";
    ctx.fillText('Score '+score,10,canvas.height-10);
    if(n>2){
        reset_counter()
    }
    if (n==2){
        total()
        buttonTry()
              
  
    return
    }

    requestAnimationFrame(draw)
}
columnDown.onload=draw


