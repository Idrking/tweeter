// Whenever an error is present, inserts an error node into the dom
const displayError = (message) => {
  let $errorContainer = $('<div class="error"></div>')
    .append('<i class="fas fa-exclamation-triangle"></i>')
    .append(`<h3>${message}</h3>`);
  
  $('.new-tweet').prepend($errorContainer);
  $('.error').hide().slideDown(400);
};