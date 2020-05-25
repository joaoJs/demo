const makeRows = () => {    
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
    rowsWrapper.innerHTML = rows
    return rowsWrapper
}

export default makeRows