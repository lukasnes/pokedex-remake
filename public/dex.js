const displayDex = () => {
    pages.forEach(page => {
        if(page === "dex"){
            main.classList.add(page)
        } else {
            main.classList.remove(page)
        }
    })

    main.innerHTML = ``
}