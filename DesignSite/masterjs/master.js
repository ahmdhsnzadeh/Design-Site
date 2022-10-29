const count = document.querySelector('.slider-box').children.length
let index = 0
// setInterval(function () {
//     index++
//     for(let i = 0; i < count; i++) {
//         document.querySelectorAll('.slider-box img')[i].style.transform = `translateX(${(i-index) * 110}%)`
//         if(index > count - 1) {
//             index = 0
//         }
//     } 
// }, 1000);
for(let i = 0; i < count; i++) {
    document.querySelectorAll('.slider-box img')[i].style.transform = `translateX(${(i-index) * 110}%)`
    document.querySelector('.slider-nav ').style.transform = `translateX(-${(10/count)}%)`

    let ele = document.createElement('span')
    ele.classList.add('slider-nav-child')
    ele.setAttribute('data-id', i)
    document.querySelector('.slider-nav').appendChild(ele)
    document.querySelectorAll('.slider-nav-child')[i].addEventListener('click', function() {
        if(document.querySelectorAll('.slider-nav-child')[i].getAttribute('data-id') == i) {
            index = i
            for(let j = 0; j < count; j++) {
                document.querySelectorAll('.slider-nav-child')[j].style.background = 'transparent'
                document.querySelectorAll('.slider-box img')[j].style.transform = `translateX(${(j-index) * 110}%)`
            }
            document.querySelectorAll('.slider-nav-child')[i].style.background = '#AAAAAA'
        }

    })
} 



