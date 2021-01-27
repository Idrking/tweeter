$(document).ready(function() {
  // Sets formatting for date parser
  dayjs().format();
  dayjs.extend(window.dayjs_plugin_relativeTime);
  

  //Helper functions for createTweetElement from /tweetAssembler.js  
  const createTweetElement = tweetData => {
    const $tweet = $(`<article class="tweet"></article`);
    $tweet.append(createHeader(tweetData)).append(createBody(tweetData)).append(createFooter(tweetData));
    return $tweet
  };

  const renderTweets = tweetsToRender => {
    const $tweetContainer = $('#tweet-feed');
    for (let i = tweetsToRender.length - 1; i >= 0; i--) {
      $tweetContainer.prepend(createTweetElement(tweetsToRender[i]));
    }
  };



  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  
  renderTweets(data);

});













