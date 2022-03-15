const form = document.querySelector('.form')
const input = document.querySelector('.form-input')
const list = document.querySelector('.list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const elLi = document.createElement('li')
    elLi.textContent = input.value
    list.appendChild(elLi)

    input.value = ''
})