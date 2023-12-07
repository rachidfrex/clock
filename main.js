$(document).ready(function() {
    setInterval(function() {
        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var hr_rotation = 30 * hr + min / 2;
        var min_rotation = 6 * min;
        var sec_rotation = 6 * sec;
        
        $('#hour').css('transform', 'rotate(' + hr_rotation + 'deg)');
        $('#minute').css('transform', 'rotate(' + min_rotation + 'deg)');
        $('#second').css('transform', 'rotate(' + sec_rotation + 'deg)');
        }, 1000);
    } );