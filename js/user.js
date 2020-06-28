const conArrowDown = document.querySelector('.wrapper-icon');
const navbarDrowpdown = document.querySelector('.navbar-dropdown');


conArrowDown.addEventListener('click', function() {
    navbarDrowpdown.classList.toggle('hide');
    conArrowDown.classList.toggle('rotate');
});

// Load More 

$(function () {
    $(".wrapper-display-card").slice(0,6).show();

    $("#loadMore").on('click', function(e) {
        e.preventDefault();

        $(".box-hidden:hidden").slice(0,6).slideDown();
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000)
    });
});

let links = document.querySelectorAll('.menu a');
let actives = document.getElementsByClassName('menu-active');

// links.forEach(link => {
//     link.addEventListener('click', function() {
//         links.forEach(active => active.classList.remove('active-green'));
//             link.classList.add('active-green');
//     });
// });


console.log(link);