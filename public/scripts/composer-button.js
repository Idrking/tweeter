$(document).ready(() => {
  const $button = $('.scrollUp');
  const $newTweet = $('nav button');
  $(window).scroll(() => {
    if ($(window).scrollTop() <= 200) {
      $newTweet.show();
      $button.hide()
    } else {
      $button.show();
      $newTweet.hide();
    }
  });

  $button.click(() => {
    $(window).scrollTop(0);
    $('.new-tweet').show()
    $('#tweet-text').focus();
  })
});