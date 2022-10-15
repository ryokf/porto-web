const tombol_dark = document.getElementById('tombol-dark');
const link_dark = document.getElementById('link-dark');

tombol_dark.addEventListener('click', function(){

    if(link_dark.getAttribute('href') == "style.css"){
        link_dark.setAttribute('href', 'style-dark.css');
    } else if(link_dark.getAttribute('href') == "style-dark.css") {
        link_dark.setAttribute('href', 'style.css');
    }

})