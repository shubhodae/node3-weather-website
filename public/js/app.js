const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''

    // fetch('/weather?address=' + location).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             messageOne.textContent = data.error
    //         } else {
    //             messageOne.textContent = data.location
    //             messageTwo.textContent = data.forcast
    //         }
    //     }) 
    // })
    messageOne.textContent = 'Kolkata, WB, India'
    messageTwo.textContent = 'Haze. It is currently 73 degrees out. It feels like 77 degrees out.'
})