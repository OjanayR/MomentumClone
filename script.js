$(document).ready(function() {
    //current time
    // update every 10 seconds;
    setCurrentTime();
    setInterval(function() {
        setCurrentTime();
    }, 10*1000);

var username = getCookie('username');
//check cookie
if(username){
    $('.greeting').css('display', 'inline-block');
    $('.user-name').css('display', 'none');
    $('.greeting').html(`Hello <span class="stored-name">${username}</spam>.`);
}else{
    $('.greeting').css('display', 'none');
    $('.user-name').css('display', 'inline-block');
    $('.greeting').html(`What's your name?`);
}

$('.user-name').keypress(function(e) {
    if(e.which == 13) {
        var username = e.target.value;
        if(!username) return;
        $('.user-name').fadeOut(function() {
            $('.greeting').html(`Hello ${username}.`);
            $('.greeting').fadeIn(function() {
                setCookie('username', username, 365);
            });
        });
    }
});

});

function setCurrentTime(){
    var now = new Date();
    $('.time').html(now.getHours() + ":"+now.getMinutes())
    $('.date').html(now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}));
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires" + toUTCString() ;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodedURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




    