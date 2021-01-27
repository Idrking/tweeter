$(document).ready(function() {
  // Sets formatting for date parser
  dayjs().format();
  dayjs.extend(window.dayjs_plugin_relativeTime);
  

  //Helper functions for createTweetElement from /tweetAssembler.js  
  const createTweetElement = (tweetData) => {
    const $tweet = $(`<article class="tweet"></article`);
    $tweet.append(createHeader(tweetData)).append(createBody(tweetData)).append(createFooter(tweetData));
    return $tweet
  };



  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
   "user": {
     "name": "Newton",
     "avatars": "https://i.imgur.com/73hZDYK.png",
       "handle": "@SirIsaac"
     },
   "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
   "created_at": 1461116232227
  }
  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweet-feed').append($tweet); 

});













