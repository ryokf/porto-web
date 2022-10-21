let moon = document.querySelector("#home .klik-img");
moon.addEventListener('click', function () {
    console.log('hai');
})

gsap.from('#home .img-moon', { duration: 10, rotate: 360, repeat: -1, ease: "none" });
gsap.from('#home .img-cloud1', { duration: 1, y: 10, repeat: -1, ease: "none", yoyo: true });
gsap.from('.img-planet', { duration: 15, rotate: -360, repeat: -1, ease: "none" });
gsap.from('.pindah-slide', { duration: 1, y: 10, repeat: -1, ease: "none", yoyo: true });

let link_atas = document.querySelector('.pindah-atas');
let link_bawah = document.querySelector('.pindah-bawah');
let slider = document.querySelectorAll('.pindah-slide');
for (let i = 0; i <= 4; i++) {
    slider[i].addEventListener('click', function () {
        // console.log(window.location.hash);
        if (window.location.hash == '') {
            link_bawah.setAttribute('href', '#about');
        } else if (window.location.hash == '#home') {
            link_atas.setAttribute('href', '#home');
            link_bawah.setAttribute('href', '#about');
        } else if (window.location.hash == '#about') {
            link_atas.setAttribute('href', '#home');
            link_bawah.setAttribute('href', '#portofolio');
        } else if (window.location.hash == '#portofolio') {
            link_atas.setAttribute('href', '#about');
            link_bawah.setAttribute('href', '#portofolio2');
        } else if (window.location.hash == '#portofolio2') {
            link_atas.setAttribute('href', '#portofolio');
            link_bawah.setAttribute('href', '#portofolio2');
        }
    })
}