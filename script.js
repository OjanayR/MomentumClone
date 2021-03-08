$(document).ready(function() {
    $('.user-name').keypress(function(e) {
        if(e.which == 13) {
            var value = e.target.value;
            if(!value) return;
            $('.user-name').fadeOut(function(){
                $('.greeting').html(`Hello ${value}.`);
                $('.greeting').fadeIn(function(){
                    setCookie('username', value,365);
                });
            });
        }
    });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodedURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == '') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}