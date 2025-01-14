// after clicking an item in the the navbar menu icon, collapse it automatically so that user does not have to click it again to collapse it.
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});