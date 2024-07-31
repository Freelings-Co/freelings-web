
const btnToggleOn = document.querySelector('.btn-toggle-on')
const btnCloseToggle = document.querySelector('.btn-toggle-close')
const toggleOn = document.querySelector('.toggle-on')

function showMenuToggle() {
    btnToggleOn.style.opacity = '0'
    toggleOn.style.display = 'flex'

    setTimeout(() => {
        toggleOn.classList.add('active')
    }, 10)
}

function closeMenuToggle() {
    btnToggleOn.style.opacity = '1'
    toggleOn.classList.remove('active')

    setTimeout(() => {
        toggleOn.style.display = 'none'
    }, 300) // 300ms é o tempo da nossa transição CSS
}


const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementsVisibility = document.querySelectorAll('.hidden')
elementsVisibility.forEach((element) => {
    myObserver.observe(element)
})

function scrollToElement(elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {

        elements[instance].scrollIntoView({ behavior: 'smooth' })
    } else {
        return
    }
}

const navHome = document.getElementById('nav-home')
const navServices = document.getElementById('nav-services')
const navPortfolio = document.getElementById('nav-portfolio')
const navProcess = document.getElementById('nav-process')
const navAboutUs = document.getElementById('nav-about-us')
const btnHeroWork = document.querySelector('#show-work')

const homeToggle = document.querySelector('#home-toggle')
const servicesToggle = document.querySelector('#services-toggle')
const portfolioToggle = document.querySelector('#portfolio-toggle')
const processToggle = document.querySelector('#process-toggle')
const aboutUsToggle = document.getElementById('about-us-toggle')



navHome.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('header')
})

homeToggle.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('header')
    closeMenuToggle()
})
navServices.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#services')
})

servicesToggle.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#services')
    closeMenuToggle()
})

navPortfolio.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#portfolio')
})

portfolioToggle.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#portfolio')
    closeMenuToggle()
})

navProcess.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#process')
})

processToggle.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#process')
    closeMenuToggle()
})

navAboutUs.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#about')
})

aboutUsToggle.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#about')
    closeMenuToggle()
})

btnHeroWork.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('#services')
})