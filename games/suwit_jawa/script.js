//function logika game
function getPilihanComp() {
    let comp = Math.random()
    if (comp <= 0.34) return 'gajah'
    if (comp > 0.34 && comp < 0.6) return 'orang'
    return 'semut'
}

function getHasil(player, comp) {
    if (player == comp) return 'seri'
    if (player == 'gajah') return (comp == 'orang') ? 'menang' : 'kalah'
    if (player == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang'
    if (player == 'semut') return (comp == 'orang') ? 'kalah' : 'menang'
}

//setting waktu gambar random
function putar() {
    let gambar = document.querySelector('.img-komputer')
    let pilGambar = ['gajah', 'orang', 'semut']
    let i = 0
    let waktuAwal = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval
            return
        }
        gambar.setAttribute('src', 'img/' + pilGambar[i++] + '.png')
        if (i === pilGambar.length) i = 0
    }, 100)

}


//setting setiap pilihan
let pGajah = document.querySelector('.gajah')
pGajah.addEventListener('click', function () {
    let pilihanComp = getPilihanComp()
    let pilihanPlayer = pGajah.className
    let hasil = getHasil(pilihanPlayer, pilihanComp)
    let gambar = document.querySelector('.img-komputer')

    putar()

    setTimeout(function () {
        gambar.setAttribute('src', 'img/' + pilihanComp + '.png')
        let info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)
})

let pOrang = document.querySelector('.orang')
pOrang.addEventListener('click', function () {
    let pilihanComp = getPilihanComp()
    let pilihanPlayer = pOrang.className
    let hasil = getHasil(pilihanPlayer, pilihanComp)
    let gambar = document.querySelector('.img-komputer')
    putar()

    setTimeout(function () {
        gambar.setAttribute('src', 'img/' + pilihanComp + '.png')
        let info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)
})

let pSemut = document.querySelector('.semut')
pSemut.addEventListener('click', function () {
    let pilihanComp = getPilihanComp()
    let pilihanPlayer = pSemut.className
    let hasil = getHasil(pilihanPlayer, pilihanComp)
    let gambar = document.querySelector('.img-komputer')
    putar()

    setTimeout(function () {
        gambar.setAttribute('src', 'img/' + pilihanComp + '.png')
        let info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)
})

// dark mode
const tombol_dark = document.getElementById('tombol-dark');
const link_dark = document.getElementById('link-dark');

tombol_dark.addEventListener('click', function(){

    if(link_dark.getAttribute('href') == "style.css"){
        link_dark.setAttribute('href', 'style-dark.css');
        // console.log('hai');
    } else if(link_dark.getAttribute('href') == "style-dark.css") {
        link_dark.setAttribute('href', 'style.css');
    }

})