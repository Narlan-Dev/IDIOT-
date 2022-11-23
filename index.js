const buttonMove = document.querySelector('.not')
const buttonNot = document.querySelector('.mainNot')
const buttonYes = document.querySelector('.mainYes')
var title = document.getElementById("title")

function start(){
    buttonMove.addEventListener('mouseover', () =>{
        changePosition(buttonMove)
    })
    buttonNot.addEventListener('mouseover', () =>{
        changeVisibility(buttonNot, true)
        changeVisibility(buttonMove, false)
    })
    buttonYes.addEventListener('click', () =>{
        changeVisibility(buttonNot, false)
        changeVisibility(buttonMove, true)
        title.innerHTML = "EU SABIA HAHAHA!"
        buttonMove.disabled = true
        buttonNot.disabled = true
    })
}
function changePosition(element){
    const positionTop = Math.floor(Math.random()*76)+'%'
    const positionLeft = Math.floor(Math.random()*88)+'%'
    element.style.top = positionTop
    element.style.left = positionLeft
}
function changeVisibility(element, desizion){
    if(desizion){
        element.style.display = 'none'
    }else{
        element.style.display = 'inline-block'
    }
}

start()