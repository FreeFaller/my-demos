// JavaScript Document
// $(function() {
//     $('.circle').each(function(index, el) {
//         var num = $(this).find('span').text() * 3.6;
//         if (num<=180) {
//             $(this).find('.right').css('transform', "rotate(" + num + "deg)");
//         } else {
//             $(this).find('.right').css('transform', "rotate(180deg)");
//             $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
//         };
//     });
// });


function showCircle(){
    $('.circle').each(function(index, el) {
    	number = $(this).find('span').text();
    	var num = number * 3.6;
        if (num<=180) {
            $(this).find('.right').css({
                'transform':"rotate(" + num + "deg)",
                '-o-transform': "rotate(" + num + "deg)",
                '-ms-transform': "rotate(" + num + "deg)",
                '-moz-transform': "rotate(" + num + "deg)",
                '-webkit-transform': "rotate(" + num + "deg)",
                'transition': 'transform ' + 100 + 'ms linear',
                '-o-transition': '-o-transform ' + 100 + 'ms linear',
                '-ms-transition': '-ms-transform ' + 100 + 'ms linear',
                '-moz-transition': '-moz-transform ' + 100 + 'ms linear',
                '-webkit-transition': '-webkit-transform ' + 100 + 'ms linear'
            });
        } else {
            $(this).find('.right').css('transform', "rotate(180deg)");
            $(this).find('.left').css({
                'transform': "rotate(" + (num - 180) + "deg)",
                '-o-transform': "rotate(" + (num - 180) + "deg)",
                '-ms-transform': "rotate(" + (num - 180) + "deg)",
                '-moz-transform': "rotate(" + (num - 180) + "deg)",
                '-webkit-transform': "rotate(" + (num - 180) + "deg)",
                'transition': 'transform ' + 100 + 'ms linear',
                '-o-transition': '-o-transform ' + 100 + 'ms linear',
                '-ms-transition': '-ms-transform ' + 100 + 'ms linear',
                '-moz-transition': '-moz-transform ' + 100 + 'ms linear',
                '-webkit-transition': '-webkit-transform ' + 100 + 'ms linear'
            });
        };
    });
}
$(function() {
	showCircle();
});
function incrementNumber(){
	number ++;
	$('.mask').find('span').text(number);
	showCircle();
	if (number == 100) {
		clearInterval(intervalId);
		alert("《JS高程》学完啦！");
	};
}
intervalId = setInterval(incrementNumber,100);