$(document).ready(() => {
  const $button = $('.scrollUp');
  const $newTweet = $('nav button');
  
  // As soon as the window scrolls down the page shows the bottom navigation and hides the new tweet button
  $(window).scroll(() => {
    if ($(window).scrollTop() <= 150) {
      $newTweet.show();
      $button.hide();
    } else {
      $button.show();
      $newTweet.hide();
    }
  });

  // On click of the bottom button, returns to the top of the page and focuses on new tweet text area
  // ensures that area is visible with .show() incase the user had toggled the tweet area previously
  $button.click(() => {
    $(window).scrollTop(0);
    $('.new-tweet').show();
    $('#tweet-text').focus();
  });

  // Toggle for new tweet area
  $('nav button').on('click', () => {
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus();
  });
});