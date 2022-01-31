

// var depth1Li = document.querySelectorAll('.company-info .depth1 > li ')

// for(let i in depth1Li){
//     depth1Li[i].firstElementChild.addEventListener('click',function(e){
//         e.preventDefault()
//     // this.nextElementSibling.style.display = "block"
//     // var disp =  this.nextElementSibling.style.display
//     //     if(disp !== 'block'){
//     //         this.nextElementSibling.style.display = "block"
//     //     }
//     //     else{
//     //         this.nextElementSibling.style.display = "none"
//     //     }
//     var licname =   depth1Li[i].className
//     if(licname !== "on"){
//         depth1Li[i].className ="on"
//     } else {
//         depth1Li[i].className =""
//     }
// })
// }

// $('.company-info .depth1 >li >a').on('click', function(e){
//     e.preventDefault()
//     $(this).parent().toggleClass('on')
// })

// var lia = $('.company-info .depth1>li>a')
// lia.on('click',function(e){
//     e.preventDefault()
//     $(this).parent().toggleClass('on')
//     $(this).parent().siblings().removeClass('on')
// })

$('.company-info .depth1>li>a').on('click',function(){
    //     $(this).parent().toggleClass('on')
    $(this).next().stop().slideToggle()
    //     $(this).parent().siblings().removeClass('on')
    $(this).parent().siblings().find('.depth2').slideUp()
    return false
})