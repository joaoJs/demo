const midSection = document.createElement('section')
midSection.className = 'midSection'
midSection.innerHTML = 'midSection'

document.body.appendChild(midSection)

const btn = document.createElement('button')
btn.className = 'btn'
btn.innerHTML = 'click me'

midSection.appendChild(btn)

const rowsWrapper = document.createElement('div')

const rows = `<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>`

btn.addEventListener('click', () => {
    console.log('clicked')
    rowsWrapper.innerHTML = rows
})

export default midSection