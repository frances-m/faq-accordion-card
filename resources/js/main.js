
$(document).ready(() => {
  $('.question').on('click', event => {
    $(event.currentTarget).parent().siblings().removeAttr('open');
    $(event.currentTarget).parent().siblings().find('summary').removeClass('active');
    $(event.currentTarget).toggleClass('active');
  })
});
