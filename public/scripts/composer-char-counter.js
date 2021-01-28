$(document).ready(function() {

  $('#tweet-text').on('input', function() {
    const MAXTWEETLENGTH = 140;
    const counterNum = MAXTWEETLENGTH - $(this).val().length;
    const counter = $(this).siblings().children('output');
    counter.html(counterNum);
    if (counterNum < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }
  });
});