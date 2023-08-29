
// Strat Click Up

let Up = document.querySelector('.Up')

onscroll = () =>{
    if(scrollY >= 300){
        Up.style.display = 'block'  
    }else{
        Up.style.display = 'none'  
    }
}

Up.addEventListener("click",()=>{
    scroll({
        top:0,
        left:0,
    })
})

// Start NavBar

let fabars = document.querySelector('.fa-bars')
let List = document.querySelector('.List')

fabars.addEventListener("click",()=>{
    List.classList.toggle("active")
})

// Start Slider

let right = document.querySelector(".fa-chevron-right")
let left = document.querySelector(".fa-chevron-left")
let SliderBottom = document.querySelector(".Slider-Bottom")

right.onclick = function(){
    SliderBottom.scrollBy({
        left:340,
        behavior:'smooth',
    })
}
left.onclick = function(){
    SliderBottom.scrollBy({
        left:-340,
        behavior:'smooth',
    })
}


// Start Hide And Show


let Bottom1 = document.querySelector(".Show-Hide1")
let Bottom2 = document.querySelector(".Show-Hide2")
let Bottom3 = document.querySelector(".Show-Hide3")
let DIS1 = document.querySelector(".DIS1")
let DIS2 = document.querySelector(".DIS2")
let DIS3 = document.querySelector(".DIS3")

Bottom1.addEventListener("click",()=>{
        DIS1.classList.toggle('Hide')
        Bottom1.classList.toggle('Rotate')
})
Bottom2.addEventListener("click",()=>{
        DIS2.classList.toggle('Hide')
        Bottom2.classList.toggle('Rotate')
})
Bottom3.addEventListener("click",()=>{
         DIS3.classList.toggle('Hide')
        Bottom3.classList.toggle('Rotate')
})






















