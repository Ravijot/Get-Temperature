

console.log('Client Side script started')

const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')
const result1 = document.getElementById('result1')


form.addEventListener('submit',(e) => {
    e.preventDefault()    //without it console screen appear for small amount of time
    const city = input.value
    console.log(city)
    result1.textContent = ''
    result.textContent = ''
    fetch('/weather?address=' + city ).then((response) => {
        response.json().then((data) => {
            if (data.error) {
               result.textContent = data.error
            } else {
               
                result1.textContent = 'Temprature of '+ city +' : ' + data.temprature
               
            }
        })
    })
    
})
