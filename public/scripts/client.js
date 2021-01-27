$(document).ready(function() {
  // Sets formatting for date parser
  dayjs().format();
  dayjs.extend(window.dayjs_plugin_relativeTime);
  
  // //Helper
  // const createHeader = (tweetData) => {
  //   const $header = $(`<header></header>`)
  //   $header.append($(`<img src="${tweetData.user.avatars}" alt="profile-picture"><p>${tweetData.user.name}</p><h4>${tweetData.user.handle}</h4>`));
  //   return $header;
  // };

  // const createBody = (tweetData) => {
  //   return $(`<div>${tweetData.content.text}</div>`);
  // };


  // const createFooter = (tweetData) => {
  //   const $footer = $(`<footer></footer>`);
  //   $footer.append($(`<p>${dayjs(tweetData.created_at).fromNow()}</p><div class="social-icons">
  //   <i class="fas fa-flag"></i>
  //   <i class="fas fa-retweet"></i>
  //   <i class="fas fa-heart"></i>
  //   </div>`));
  //   return $footer;
  // }
  
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













