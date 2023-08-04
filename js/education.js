let toggler = document.querySelector('.navbar-toggler')
let menu = document.querySelector('.mm')

toggler.addEventListener('click', function(e){
        e.stopPropagation();
        menu.classList.toggle('active');
})
menu.addEventListener('click', function(e){
        e.stopPropagation();
})
document.addEventListener('click', function(e){
        if(e.target != menu.children && e.target !=toggler.children){
                menu.classList.remove('active')
                console.log(toggler.children)
        }
})
