//comece com as linhas abaixo comentadas
import '../node_modules/bootstrap-4-grid/css/grid.css'
// import _ from 'lodash'
const getLodash = () => import('lodash')
// import '../node_modules/bootstrap-4-grid/css/grid.min.css'
// import '../node_modules/popper.js/dist/popper.js'
//comece com a linha abaixo comentada
// import '../node_modules/popper.js/dist/popper.min.js'
// import $ from 'jQuery'
import './styles/main.css'
import './styles/nav.css'
import nav from './nav'
import './styles/hero.css'
import hero from './hero'
// import phoneUrl from './img/comece-agora.gif'
//comece com essa linha comentada
import phoneUrl from './img/comece-agora.webm'
import './styles/section.css'
import midSection from './section'
import './styles/carousel.css'
import carousel from './carousel'
import carouselBgUrl from './img/bg-about-carreiras.png'
import carouselBgUrlWebp from './img/webp/bg-about-carreiras.webp'
import './styles/simulator.css'
import './simulator'
import './styles/video.css'
import videoSection from './video'
// import regerinaUrl from './img/regerina.gif'
//comece com a linha abaixo comentada
import regerinaUrl from './img/regerina.webm'
import './styles/anotherCarousel.css'
import anotherCarousel from './anotherCarousel'
import andersonUrl from './img/foto-anderson.png'
import andersonUrlWebp from './img/webp/foto-anderson.webp'
import './styles/timeInvest.css'
import './timeInvest'
import './styles/popProds.css'
import './popProds'
import './styles/footer.css'
import footer from './footer'
import bigImgUrl from './img/bg_salaovivo.png'
import bigImgUrlWebp from './img/webp/bg_salaovivo.webp'


import makeImage from './scripts/makeImage'
import makeVideo from './scripts/makeVideo'
import makeButton from './scripts/makeButton'
import makeRows from './scripts/makeRows'

console.log('indexIsWorking')

// const phoneGif = makeImage(phoneUrl)
// hero.appendChild(phoneGif)
//comentar linha abaixo no início
const phoneVid = makeVideo(phoneUrl)
hero.innerHTML = phoneVid

// const carouselBg = makeImage(carouselBgUrl)
const carouselBg = makeImage(carouselBgUrl, carouselBgUrlWebp)
carousel.innerHTML = carouselBg

// const regerinaGif = makeImage(regerinaUrl)
// videoSection.appendChild(regerinaGif)
//comentar linha abaixo no início
const regerinaVid = makeVideo(regerinaUrl)
videoSection.innerHTML = regerinaVid

// const andyImg = makeImage(andersonUrl)
const andyImg = makeImage(andersonUrl, andersonUrlWebp)
anotherCarousel.innerHTML = andyImg

// const bigFooterImg = makeImage(bigImgUrl)
const bigFooterImg = makeImage(bigImgUrl, bigImgUrlWebp)
footer.innerHTML = bigFooterImg

const btn = makeButton('showRows')
midSection.appendChild(btn)

const rowsWrapper = makeRows()

const numbers = [1,2,3,4,5,6]

// btn.addEventListener('click', () => {
//     getLodash().then(l => {
//         midSection.innerHTML = ""
//         midSection.appendChild(btn)
//         midSection.appendChild(rowsWrapper)
//         const shuffled = l.shuffle(numbers)
//         shuffled.forEach(n => {
//         const newBtn = document.createElement('button')
//         newBtn.innerHTML = n
//         midSection.appendChild(newBtn)
//     })
//     })
// })


