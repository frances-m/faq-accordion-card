$(document).ready(() => {
  $('.question').on('click', event => {
    $(event.currentTarget).parent().siblings().find('p').hide();
    $(event.currentTarget).parent().siblings().find('h2').removeClass('active');
    $(event.currentTarget).next().toggle();
    $(event.currentTarget).toggleClass('active');
  })
});
