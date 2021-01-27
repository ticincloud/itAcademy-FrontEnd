$(document).ready(function() {
    $('#bLogin').on('click', function() { $('.opcioMenu').removeClass('disabled'); });
    $('#loginModal').on('shown.bs.modal', function() {
        $('#inputEmail').focus();
    });
});