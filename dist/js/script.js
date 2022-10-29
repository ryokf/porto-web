// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyK0hexyBc-2NMN81kG2lW_cedmg59aFWhDHiQsvBdZ01H8RDXgyzeTMom8OYqGO_wLlw/exec'
const form = document.forms['submit-to-google-sheet'];

const btn_kirim = document.querySelector('.btn-kirim');
const btn_selesai = document.querySelector('.btn-selesai');

form.addEventListener('submit', e => {
    e.preventDefault()
    btn_kirim.classList.toggle('hidden');
    btn_selesai.classList.toggle('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btn_kirim.classList.toggle('hidden');
            btn_selesai.classList.toggle('hidden');
            form.reset();
            alert('Pesan berhasil terkirim');
            console.log('Success!', response)
        })
        .catch(error => {
            btn_kirim.classList.toggle('hidden');
            btn_selesai.classList.toggle('hidden');
            alert('Pesan gagal terkirim');
            console.error('Error!', error.message)
        })
})

// animate nav
const nav_list = document.querySelectorAll('header nav ul a li');
for(let i = 1; i <= nav_list.length; i++){
    gsap.from(nav_list[i-1], {opacity:0 ,y:-100,duration: i/4, ease: "none"});
}

// animate home
gsap.from("#home p.fisrt", {opacity:0 ,y:-100, duration: 1, delay:1, ease: "none"});
gsap.from("#home h2", {opacity:0 ,y:-100, duration: 1, delay: 0.75, ease: "none"});
gsap.from("#home p.second", {opacity:0 ,y:-100, duration: 1, delay: 0.5, ease: "none"});
gsap.from("#home p.third", {opacity:0 ,y:-100, duration: 1, delay: 0.25, ease: "none"});
// gsap.from("#home button", {opacity:0 ,y:-100, duration: 1, ease: "none"});
gsap.from(".kotak-blur", {duration: 5, rotation: 360, repeat:-1, ease: "none"});

// animate about
gsap.from("#about .logo img", {duration: 1 ,y:5, repeat: -1, yoyo: true, ease: "none"});

const img_logo = document.querySelectorAll("#about .logo img");
const img_social = document.querySelectorAll("#about .social");

for(let i = 0; i < img_logo.length; i++){
    img_logo[i].addEventListener('mouseover', function(){
        gsap.from(img_logo[i], {rotation: 12, repeat:-1, yoyo:true});
    })
}

for(let j = 0; j < img_social.length; j++){
    img_social[j].addEventListener('mouseover', function(){
        gsap.from(img_social[j], {duration: 20, rotation: 360, repeat:-1, yoyo:true});
    })
}

// navbar
const burger = document.querySelectorAll('.burger div hr');
const tombol_burger = document.querySelector('.burger');
const isi_burger = document.querySelector('.isi-burger');

tombol_burger.addEventListener('click', function (){
    burger[0].classList.toggle('burger-active-top');
    burger[1].classList.toggle('burger-active-bottom');
    isi_burger.classList.toggle('invisible');

    gsap.from("nav", {opacity:0 ,y:-100, duration: 1});
})

