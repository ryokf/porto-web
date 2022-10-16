// aos
AOS.init();

// form to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyv9lcMcoQ2UJYALqnv1esiv5Yy-pZ6oRA2e69EfYfjce1NhK4M9OEWLNzttiAWvoxSxw/exec';

const form = document.forms['submit-to-google-sheet'];

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alert = document.querySelector('.alert');

form.addEventListener('submit', e => {

    btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');

    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            alert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

// dark mode
const tombol_dark = document.getElementById('tombol-dark');
const link_dark = document.getElementById('link-dark');

tombol_dark.addEventListener('click', function(){

    if(link_dark.getAttribute('href') == "css/light.css"){
        link_dark.setAttribute('href', 'css/dark.css');
    } else if(link_dark.getAttribute('href') == "css/dark.css") {
        link_dark.setAttribute('href', 'css/light.css');
    }

    gsap.from('.navbar', { duration: 0.35, y: -700 });

})