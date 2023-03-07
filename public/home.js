const pages = ['home','dex']
const main = document.querySelector('section')

const displayHome = () => {
    pages.forEach(page => {
        if(page === "home"){
            main.classList.add(page)
        } else {
            main.classList.remove(page)
        }
    })

    main.innerHTML = `
        <div class='home-title-box'>
            <h1 class='home-title'>Welcome to the team building Pokedex app!</h1>
        </div>
        <div class='video'>
            <iframe class='poke-intro' src='https://www.youtube.com/embed/rg6CiPI6h2g' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `
}