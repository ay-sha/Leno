document.addEventListener('DOMContentLoaded', function(){
    // Toggle Hamburger
    const toggle = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    toggle.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });


    // video modal
    const modal = document.getElementById('videoModal');
    const videoBtn = document.querySelector('.preview__video-btn');
    const videoPlayer = document.getElementById('videoPlayer')
    const closeBtn = document.querySelector('.modal__close-btn');

    videoBtn.addEventListener('click', function(){
        modal.style.display='block'; 

        videoPlayer.src = 'https://www.youtube.com/embed/2qBiUz07Vew';

    });
    closeBtn.addEventListener('click',function(){
        modal.style.display='none';
        videoPlayer.src= '';
    });

    window.addEventListener('click', function(event){
        if(event.target== modal){
            modal.style.display='none';
            videoPlayer.src= '';
        }
    })
});

// Change Navbar Background on scroll
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    if(this.window.scrollY>0){
        navbar.classList.add('navbar--scroll');
    }
    else{
        navbar.classList.remove('navbar--scroll');
    }
})