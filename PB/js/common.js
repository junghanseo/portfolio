// $(document).ready(function() {
//     //리사이징 할때마다 새로고침
//     var lastWidth = $(window).width();
//     $(window).resize(function() {
//         if ($(window).width() != lastWidth) {
//             location.reload();
//             lastWidth = $(window).width();
//             return false;
//         }
//     });


$(document).ready(function () {
    var lw = $(window).Width();
    $(window).resize(function () {
        if ($(window).Width() !== lw) {
            location.reload();
            lw = $(window).Width();
            return false;
        }
    });
});