import './styles/main.css'
import './styles/nav.css'
import nav from './nav'
import './styles/hero.css'
import hero from './hero'
import phoneGifUrl from './img/comece-agora.gif'
import './styles/section.css'
import midSection from './section'
import './styles/carousel.css'
import carousel from './carousel'
import carouselBgUrl from './img/bg-about-carreiras.jpg'
import './styles/simulator.css'
import './simulator'
import './styles/video.css'
import videoSection from './video'
import regerinaUrl from './img/regerina.gif'
import './styles/anotherCarousel.css'
import anotherCarousel from './anotherCarousel'
import andersonUrl from './img/foto-anderson.png'
import './styles/timeInvest.css'
import './timeInvest'
import './styles/popProds.css'
import './popProds'
import './styles/footer.css'
import footer from './footer'
import bigImgUrl from './img/bg_salaovivo.png'

import makeImage from './scripts/makeImage'

console.log('indexIsWorking')

const phoneGif = makeImage(phoneGifUrl)
hero.appendChild(phoneGif)

const carouselBg = makeImage(carouselBgUrl)
carousel.appendChild(carouselBg)

const regerinaGif = makeImage(regerinaUrl)
videoSection.appendChild(regerinaGif)

const andyPng = makeImage(andersonUrl)
anotherCarousel.appendChild(andyPng)

const bigFooterImg = makeImage(bigImgUrl)
footer.appendChild(bigFooterImg)



