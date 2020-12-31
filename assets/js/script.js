

const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('.front .wrapper header nav ul')


navBurger.addEventListener('click', () => {
    navContent.classList.toggle('active')

})

const navList = document.querySelectorAll('.front .wrapper header nav ul li')

navList.forEach(li => {
    li.addEventListener('click', () => {
        navContent.classList.remove('active')
    })
})

// Tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})


const tabsTwo = document.querySelectorAll('[data-tab-target-two]')
const tabContentsTwo = document.querySelectorAll('[data-tab-content-two]')

tabsTwo.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTargetTwo)
        tabContentsTwo.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        tabsTwo.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})