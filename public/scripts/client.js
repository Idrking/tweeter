$(document).ready(function() {
  // Sets formatting for date parser
  dayjs().format();
  dayjs.extend(window.dayjs_plugin_relativeTime);
  

  //Helper functions for createTweetElement from /tweetAssembler.js
  const createTweetElement = tweetData => {
    const $tweet = $(`<article class="tweet"></article>`);
    $tweet.append(createHeader(tweetData)).append(createBody(tweetData)).append(createFooter(tweetData));
    return $tweet;
  };

  const renderTweets = tweetsToRender => {
    const $tweetContainer = $('#tweet-feed');
    for (let tweets of tweetsToRender) {
      $tweetContainer.prepend(createTweetElement(tweets));
    }
  };

  $('.new-tweet-form').on('submit', function(event) {
    event.preventDefault();
    let tweet = $('#tweet-text').val();
    if (tweet === '' || tweet === null) {
      alert('Cannot submit an empty tweet');
    } else if (tweet.length > 140) {
      alert('Tweet is too long! Please limit to 140 characters');
    } else {
      $.post('/tweets/', $(this).serialize(), () => {
        //Resets the form to base state (counter at 140, and empty text area) upon successful submission
        $('#tweet-text').val('');
        $('.counter').html(140);
        
        //Updates the tweet feed to show the new tweet
        loadTweets(true);
      });
      
    }
  });

  // Loads all tweets in the 'database' if optional parameter is undefined or false, or just the most recent tweet is mostRecent is true;
  const loadTweets = (mostRecent) => {
    $.get({url: '/tweets/', success: (data) => {
      renderTweets(mostRecent ? [data[data.length - 1]] : data);
    }});



  };
  loadTweets();
});













