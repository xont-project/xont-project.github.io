$(document).mouseup(function(e) {
    var div = $(".modal-dialog");
    if (!div.is(e.target)
        &&
        div.has(e.target).length === 0) {
        div.closes('.modal').removeClass('show');
    }
});

$(document).ready(() => {
    $('.nav-link').on('click', () => {
        const data = $(this).data('toggle');
        if (data === 'modal') {
            if ($('.modal').hasClass('show')) {

            }
        }
    });
});
