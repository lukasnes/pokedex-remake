let activePage = {
    "home-link": true,
    "dex-link": false
}
let displayPage = {
    "home-link": displayHome,
    "dex-link": displayDex
}

const links = document.querySelectorAll('.sidebar-links')
const headerLinks = document.querySelectorAll('.header-links')
const sidebarBtn = document.querySelector('#sidebar-btn')
const sidebar = document.querySelector('#sidebar')
const sidebarNavs = document.querySelectorAll('.sidebar-nav')

const toggleActive = evt => {
    for(let page in activePage){
        if(evt){
            let { target } = evt
            console.log(target)
            if(!target.classList.contains('header-links')){
                while(!target.classList.contains('sidebar-links')){
                    target = target.parentNode
                }
            }
            if(target.classList.contains(page)){
                activePage[page] = true
            } else {
                activePage[page] = false
            }
        }

        if(activePage[page]){
            let toggler = document.querySelector(`.sidebar-links.${page}`).children
            for(let i = 0; i < toggler.length; i++){
                toggler[i].classList.toggle('active')
            }
            displayPage[page]()
        } else {
            let toggler = document.querySelector(`.sidebar-links.${page}`).children
            for(let i = 0; i < toggler.length; i++){
                if(toggler[i].classList.contains('active')){
                    toggler[i].classList.toggle('active')
                }
            }
        }
    }
}

const toggleSidebar = evt => {
    sidebar.classList.toggle('open')
    sidebarBtn.classList.toggle('open')
    main.classList.toggle('open')
    for(let i = 0; i < sidebarNavs.length; i++){
        let description = sidebarNavs[i].children[1]
        description.classList.toggle('open')
    }
}

console.log(links)
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', toggleActive)
}
for(let i = 0; i < headerLinks.length; i++){
    headerLinks[i].addEventListener('click', toggleActive)
}
sidebarBtn.addEventListener('click', toggleSidebar)
toggleActive()