const picture = document.querySelector('.limit-img')
const dislike = document.querySelector('.dislikeButton')
const like = document.querySelector('.likeButton')
const slider = document.querySelector('.inner-content')
const getCatsNames = document.querySelector('.getCatsNames')
const getCatsInfo = document.querySelector('.category-img-secondBox')
const getCatsImg = document.querySelector('.slider-category-img')
const range = document.querySelector('.range_bar')
const innerGallery = document.querySelector('.inner-gallery')
const getBreed = document.querySelector('.getBreed')
const resetButton = document.querySelector('.reset-button')
const sliderPoints = document.getElementsByClassName('slider-points')

const tabs = document.getElementsByClassName('tab-buttons')
let slideZone = 430;
slider.style.transform = `translate(0px)`
for (let i = 0; i < tabs.length; i++) {
    tabs[0].addEventListener('click', () => {
        slider.style.transform = `translate(0px)`
        slider.style.transition = `all 0.7s`
        range.style.left = `0px`
        range.style.transition = 'all 0.7s'
        range.style.width = `${tabs[0].clientWidth}px`
    })
    tabs[1].addEventListener('click', () => {
        slider.style.transform = `translate(-${slideZone}px)`
        slider.style.transition = `all 0.7s`
        range.style.left = tabs[1].clientWidth + 'px'
        range.style.transition = 'all 0.7s'
        range.style.width = `${tabs[1].clientWidth}px`
    })
    tabs[2].addEventListener('click', () => {
        slider.style.transform = `translate(-${slideZone + slideZone}px)`
        slider.style.transition = `all 0.7s`
        range.style.left = tabs[2].clientWidth + 'px'
        range.style.transition = 'all 0.7s'
        range.style.width = `${tabs[2].clientWidth}px`
    })
    tabs[3].addEventListener('click', () => {
        slider.style.transform = `translate(-${slideZone + slideZone + slideZone}px)`
        slider.style.transition = `all 0.7s`
        range.style.left = tabs[2].clientWidth + tabs[2].clientWidth + 'px'
        range.style.transition = 'all 0.7s'
        range.style.width = `${tabs[3].clientWidth}px`

    })
    tabs[4].addEventListener('click', () => {
        slider.style.transform = `translate(-${slideZone + slideZone + slideZone + slideZone}px)`
        slider.style.transition = `all 0.7s`
        range.style.left = tabs[4].clientWidth + tabs[3].clientWidth + tabs[2].clientWidth + tabs[1].clientWidth + 'px'
        range.style.transition = 'all 0.7s'
        range.style.width = `${tabs[4].clientWidth}px`
    })
}

const catsObj = {}

const catsArr = []

const catsAPI = () => {
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_TlHTsqA8h8aQGMU99mThMhaeaxF26CbUYgZkkRK8FNpgHtFp55SWy3HgbsfqXT30')
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                picture.innerHTML = `<img src=${el.url} alt="" class="img-value">`
            })
        })
}

catsAPI()

const breedsAPI = () => {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                let catsOptions = new Option(`${el.name}`, `${el.id}`)
                let breedsOptions = new Option(`${el.name}`, `${el.id}`)
                getCatsNames.append(catsOptions)
                getBreed.append(breedsOptions)
            })
        })
}

breedsAPI()

const catInfo = {}

const getBreeds = () => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?name=${breedsValue}&api_key=live_TlHTsqA8h8aQGMU99mThMhaeaxF26CbUYgZkkRK8FNpgHtFp55SWy3HgbsfqXT30`)
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                console.log(catInfo)
                console.log(data)
                catInfo.id = el.id
                catInfo.name = el.name
                catInfo.descr = el.description
                catInfo.temp = el.temperament
                catInfo.origin = el.origin
                catInfo.imperialWght = el.weight.imperial
                catInfo.metricWght = el.weight.metric
                catInfo.life = el.life_span
                catInfo.wikiUrl = el.wikipedia_url
                getCatsInfo.innerHTML = `
                                          <div class="category-info">
                                            <p class="category-cat-name">${el.name}</p>
                                            <p class="category-cat-id">id: ${el.id}</p>
                                            <p class="category-cat-descr">${el.description}</p>
                                            <p class="category-cat-advent">${el.temperament}</p>
                                            <span>-&#45;&#45;</span>
                                            <p class="category-cat-birthPlace">${el.origin}</p>
                                            <p class="category-cat-weight">${el.weight.imperial} kg / ${el.weight.metric} kg</p>
                                            <p class="category-cat-avglife">${el.life_span} average life span</p>
                                            <div class="category-wiki">
                                              <a href=${el.wikipedia_url} target="_blank" class="category-cat-wiki">WIKIPERDIA</a>
                                           </div>
                                          </div>`
            })
        })
}

const sliderImages = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?name=${breedsValue}&limit=5&breed_ids=${breedsValue}&api_key=live_TlHTsqA8h8aQGMU99mThMhaeaxF26CbUYgZkkRK8FNpgHtFp55SWy3HgbsfqXT30`)
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                const sliderCards = document.querySelector('.slider-category-img')
                getCatsImg.innerHTML += `<img src=${el.url} alt="" class="slider-card-img">`
                for (let i = 0; i < sliderPoints.length; i++) {
                    let sliderCardsWidth = 360;
                    sliderPoints[0].addEventListener('click', () => {
                        sliderCards.style.transform = `translate(0px)`
                        sliderCards.style.transition = `all 0.7s`
                    })
                    sliderPoints[1].addEventListener('click', () => {
                        sliderCards.style.transform = `translate(-${sliderCardsWidth}px)`
                        sliderCards.style.transition = `all 0.7s`
                    })
                    sliderPoints[2].addEventListener('click', () => {
                        sliderCards.style.transform = `translate(-${sliderCardsWidth + sliderCardsWidth}px)`
                        sliderCards.style.transition = `all 0.7s`
                    })
                    sliderPoints[3].addEventListener('click', () => {
                        sliderCards.style.transform = `translate(-${sliderCardsWidth + sliderCardsWidth + sliderCardsWidth}px)`
                        sliderCards.style.transition = `all 0.7s`
                    })
                    sliderPoints[4].addEventListener('click', () => {
                        sliderCards.style.transform = `translate(-${sliderCardsWidth + sliderCardsWidth + sliderCardsWidth + sliderCardsWidth}px)`
                        sliderCards.style.transition = `all 0.7s`
                    })
                }
            })
        })
}

let breedsValue;

const catsBreeds = (option) => {
    breedsValue = option.value
    getCatsInfo.innerHTML = ''
    getCatsImg.innerHTML = ''
    getBreeds()
    sliderImages()
}


const favButton = document.querySelector('.favButton')
favButton.addEventListener('click', () => {
    const getFav = document.querySelector('.likes-img-box')
    const image = document.querySelector('.img-value')
    const favCard = document.createElement('div')
    favCard.classList.add('card-img')
    favCard.innerHTML = `
        <img src=${image.src} class="likes-img">
        <div class="hover-div"></div> 
        <button class="delete-fav-img">UN-FAV-IT</button>`
    getFav.append(favCard)
    const delBtn = document.querySelectorAll('.delete-fav-img')
    delBtn.forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.remove()
        })
    })
    document.querySelector('.special-descr').remove()
})


dislike.addEventListener('click', () => {
    catsAPI()
})

like.addEventListener('click', () => {
    catsAPI()
})

const getGallery = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${pageCount}&breed_ids=${filterBreed}&order=${filterOrder}&api_key=live_TlHTsqA8h8aQGMU99mThMhaeaxF26CbUYgZkkRK8FNpgHtFp55SWy3HgbsfqXT30`)
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                innerGallery.innerHTML += `<div class="col-4">
                                        <div class="box">
                                            <img src=${el.url} alt="" class="gallery-card">
                                            <button class="gallery-card-button"><i class="fa-solid fa-heart"></i></button>
                                        </div>
                                    </div>`
                const getHearthSelectors = document.querySelectorAll('.gallery-card-button')
                getHearthSelectors.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const getFav = document.querySelector('.likes-img-box')
                        const favCard = document.createElement('div')
                        favCard.classList.add('card-img')
                        favCard.innerHTML = `
        <img src=${btn.previousElementSibling.src} class="likes-img">
        <div class="hover-div"></div> 
        <button class="delete-fav-img">UN-FAV-IT</button>`
                        getFav.append(favCard)
                        const delBtn = document.querySelectorAll('.delete-fav-img')
                        delBtn.forEach(el => {
                            el.addEventListener('click', () => {
                                el.parentElement.remove()
                            })
                        })
                        document.querySelector('.special-descr').remove()
                    })
                })
            })
        })
}

const randomPicture = () => {
    fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
        .then(res => res.json())
        .then(data => {
            data.map(el => {
                innerGallery.innerHTML += `<div class="col-4">
                                        <div class="box">
                                            <img src=${el.url} alt="" class="gallery-card">
                                            <button class="gallery-card-button"><i class="fa-solid fa-heart"></i></button>
                                        </div>
                                    </div>`
            })
        })
}

let pageCount
let filterBreed;
let filterOrder;

resetButton.addEventListener('click', () => {
    innerGallery.innerHTML = ``
    randomPicture()
})

const makeCount = (selected) => {
    pageCount = selected.value;
    innerGallery.innerHTML = ''
    getGallery()
    resetButton.classList.add('hidden-button')
}

const makeBreed = (breed) => {
    filterBreed = breed.value;
    innerGallery.innerHTML = ''
    getGallery()
}

const makeOrder = (order) => {
    filterOrder = order.value
    innerGallery.innerHTML = ''
    getGallery()
}

