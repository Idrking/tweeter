$(document).ready(function() {

  $('#tweet-text').on('input', function () {
    let counterNum = 140 - $(this).val().length;
    const counter = $(this).siblings().children('output');
    counter.html(counterNum);
    if (counterNum < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }
  });
});