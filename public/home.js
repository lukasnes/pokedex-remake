let activePage = {
    "home-link": true,
    "dex-link": false
}
let displayPage = {
    "home-link": () => {

    },
    "dex-link": () => {

    }
}

const links = document.querySelectorAll('.sidebar-links')

const toggleActive = evt => {
    for(let page in activePage){
        if(evt){
            let { target } = evt
            while(!target.classList.contains('sidebar-links')){
                target = target.parentNode
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

console.log(links)
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', toggleActive)
}
toggleActive()