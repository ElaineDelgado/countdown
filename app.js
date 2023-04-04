const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')


const bPartyDay = new Date('July  15 2023 19:00:00')

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = bPartyDay - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference/1000/60/60) % 24
    const minutes = Math.floor(difference/1000/60) % 60
    const seconds = Math.floor(difference/1000) % 60

    daysContainer.textContent = days < 10 ? '0' + days : days
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    
    // console.log({ days, hours, minutes, seconds })
}

setInterval(() => {
    updateCountdown()
}, 1000 )