const createHeader = (tweetData) => {
  const $header = $(`<header></header>`);
  $header.append($(`<img src="${tweetData.user.avatars}" alt="profile-picture"><p>${tweetData.user.name}</p><h4>${tweetData.user.handle}</h4>`));
  return $header;
};

const createBody = (tweetData) => {
  return $(`<div>${tweetData.content.text}</div>`);
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