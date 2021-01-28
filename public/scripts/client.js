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

  // Renders all tweets with the newest tweets at the top using prepend.
  const renderTweets = tweetsToRender => {
    const $tweetContainer = $('#tweet-feed');
    for (let tweets of tweetsToRender) {
      $tweetContainer.prepend(createTweetElement(tweets));
    }
  };

  // Accepts an options object to control how many tweets it loads to the page.
  // If options is omitted, or mostRecent is provided as false, loads all available tweets in the database
  // If mostRecent is passed in as true, loads only the newest tweet
  const loadTweets = (options) => {
    $.get({url: '/tweets/', success: (data) => {
      renderTweets(options && options.mostRecent ? [data[data.length - 1]] : data);
    }});
  };
  
  // Handler for the new tweet submission form - uses AJAX call to update database and display the new tweet
  $('.new-tweet-form').on('submit', function(event) {
    event.preventDefault();
    
    // Removes an existing error messages so the user can notice if new errors appear
    $('.error').slideUp(400, function() {
      this.remove();
    });
    
    let tweet = $('#tweet-text').val();
    if (tweet === '' || tweet === null) {
      displayError('Cannot submit an empty tweet');
    } else if (tweet.length > 140) {
      displayError('Tweet is too long! Please limit to 140 characters');
    } else {
      $.post('/tweets/', $(this).serialize(), () => {
        //Resets the form to base state (counter at 140, and empty text area) upon successful submission
        $('#tweet-text').val('');
        $('.counter').html(140);
        
        //Updates the tweet feed to show the new tweet
        loadTweets({mostRecent: true});
      });
    }
  });
  
  //On page load, loads all tweets;
  loadTweets();
});













