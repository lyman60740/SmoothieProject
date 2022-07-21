var imgBlueBowl = document.querySelector('.imgBlueBowl')
var imgGreenBowl = document.querySelector('.imgGreenBowl')
var imgYellowBowl = document.querySelector('.imgYellowBowl')
var blueBowl = document.querySelector('.blueBowl')
var greenBowl = document.querySelector('.greenBowl')
var yellowBowl = document.querySelector('.yellowBowl')
var bowl = document.querySelector('.bowl')

var title = document.querySelector('.title')
var bodyDiv = document.querySelector('.bodyDiv')
var orderNow = document.querySelector('#orderNow')
var blueberry = document.querySelector('.blueberry')
var strawberry = document.querySelector('.strawberry')
var mulberry = document.querySelector('.mulberry')



function spin(a,b){
  c = 1
  a.addEventListener('mouseenter', ()=> {
    
    interval = setInterval(() => {
      c++;
      b.style.transform = "rotate("+ c +"deg)";
      return c
    }, "20")
    return c
 })
 a.addEventListener('click', ()=> {
  b.classList.add("boingClick")
  setTimeout(() =>{
    b.classList.remove("boingClick")
  }, 500)
})
 a.addEventListener('mouseleave', ()=> {
  b.style.transform = "rotate("+ c +"deg)";
  clearInterval(interval);
 });

}

spin(blueBowl,imgBlueBowl)
spin(greenBowl,imgGreenBowl)
spin(yellowBowl,imgYellowBowl)




const yellowOrderBackground = '#FEAC00'
const shadowYellow = 'shadowYellow'
const yellowBody = '#FDF3D8'
var titleYellow = '/assets/titleYellow.png'
const imgNextYellow = '/assets/yellowBowl.svg'
var backgroundFlowerYellow ='/assets/backgroundFlowerYellow.png'


const greenOrderBackground = '#889F34'
const shadowGreen = 'shadowGreen'
var titleGreen = '/assets/titleGreen.png'
const greenBody = '#E2FBC4'
const imgNextGreen = '/assets/greenBowl.svg'
var backgroundFlowerGreen ='/assets/backgroundFlowerGreen.svg'


const blueOrderBackground = '#3168AA'
const shadowBlue = 'shadowBlue'
var titleBlue = '/assets/titleBlue.png'
const blueBody = '#CEDBEB'
const imgNextBlue = '/assets/blueBowl.svg'
var backgroundFlowerBlue = '/assets/backgroundFlowerBlue.svg'

var backgroundFlower = document.querySelector('.backgroundFlower')
var spanAlert = document.querySelector('#spanAlert')
var shadowEffect = document.querySelector('.shadowEffect')





function replace(prev, next, titleReplace, backgroundFlowerReplace, colorBodyDiv, colorOrderBackground, shadowColor, imgNext ){
  prev.addEventListener('click', ()=> {

    bodyDiv.style.background = colorBodyDiv
    orderNow.style.background = colorOrderBackground
    orderNow.className =  shadowColor
    spanAlert.style.background = colorOrderBackground
    spanAlert.className =  shadowColor
    title.classList.add("titleTransition")
    next.classList.add("boingClick")
    shadowEffect.classList.add("boingClick")
  
    setTimeout(() =>{
      title.src = titleReplace
      bowl.src = imgNext
      backgroundFlower.src = backgroundFlowerReplace
    }, 600)
    setTimeout(() =>{
      title.classList.remove("titleTransition")
      next.classList.remove("boingClick")
      shadowEffect.classList.remove("boingClick")
    }, 1200)
    
  
   })
}





replace(yellowBowl, bowl, titleYellow, backgroundFlowerYellow, yellowBody , yellowOrderBackground, shadowYellow, imgNextYellow )
replace(greenBowl, bowl, titleGreen, backgroundFlowerGreen, greenBody , greenOrderBackground, shadowGreen, imgNextGreen, imgGreenBowl )
replace(blueBowl, bowl, titleBlue, backgroundFlowerBlue, blueBody , blueOrderBackground, shadowBlue, imgNextBlue, imgBlueBowl )


const travoltaBox = document.querySelector('.travoltaBox')
const exit = document.querySelector('.exit')
const navA = document.querySelector('.navA')
const navB = document.querySelector('.navB')
const navC = document.querySelector('.navC')
const navD = document.querySelector('.navD')


function alertTravolta(notAvailable){
 
 notAvailable.addEventListener('click', ()=> {
  travoltaBox.classList.add("opacityUp")
  
})
exit.addEventListener('click', ()=> {
  travoltaBox.classList.remove("opacityUp")
})

}

alertTravolta(orderNow)
alertTravolta(navA)
alertTravolta(navB)
alertTravolta(navC)
alertTravolta(navD)


bowl.addEventListener('mouseenter', ()=> {
  shadowEffect.classList.add('scaleEffectUp')
  shadowEffect.classList.remove('scaleEffectDown')
bowl.addEventListener('mouseleave', ()=> {
  shadowEffect.classList.remove('scaleEffect')
  shadowEffect.classList.add('scaleEffectDown')
})
});