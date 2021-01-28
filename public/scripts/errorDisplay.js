//TODO: Handle a tweet of just spaces
const displayError = (message) => {
  let $errorContainer = $('<div class="error"></div>')
    .append('<i class="fas fa-exclamation-triangle"></i>')
    .append(`<h3>${message}</h3>`);
  
  $('.container').prepend($errorContainer);
  $('.error').hide().slideDown(400);
}