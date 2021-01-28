const createHeader = (tweetData) => {
  const $header = $(`<header></header>`);
  $header.append($(`<img src="${tweetData.user.avatars}" alt="profile-picture"><p>${tweetData.user.name}</p><h4>${tweetData.user.handle}</h4>`));
  return $header;
};

// creates body with user generated tweet - uses .text to escape potential Cross Site Scripting
// If site ever expands to allow user generated handles, name or other profile info, we'll need to escape those as well.
const createBody = (tweetData) => {
  return $('<div></div>').text(tweetData.content.text);
};


const createFooter = (tweetData) => {
  const $footer = $(`<footer></footer>`);
  $footer.append($(`<p>${dayjs(tweetData.created_at).fromNow()}</p><div class="social-icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>`));
  return $footer;
};