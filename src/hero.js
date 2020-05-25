const hero = document.createElement('section')
hero.className = 'hero'
hero.innerHTML = 'hero'

const cellphoneImg = document.createElement('img')
cellphoneImg.src = './img/comece-agora.gif'

hero.appendChild(cellphoneImg)

document.body.appendChild(hero)