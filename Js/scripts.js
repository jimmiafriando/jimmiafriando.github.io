var nav = document.getElementById('nav-bg');
    window.onscroll = function(){

        if (window.pageYOffset >100) {
            nav.style.background = "#171717";
        }
        else{
            nav.style.background = "transparent";
        }
    }

document.getElementById('content').addEventListener('click',
    function() {
        document.querySelector('.bg-popup').style.display = 'flex';
    });

document.getElementById('close').addEventListener('click',
    function() {
        document.querySelector('.bg-popup').style.display = 'none';
    });