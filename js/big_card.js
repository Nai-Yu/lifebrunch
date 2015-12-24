$(function () {
if ( $('html').hasClass('csstransforms3d') ) {
  $('.big_artGroup').removeClass('slide').addClass('flip');
  $('.artGroup.flip').on('mouseenter',
    function () {
      $(this).find('.artwork').addClass('theFlip');
    });
  $('..flip').on('mouseleave',
    function () {
      $(this).find('.artwork').removeClass('theFlip');
    });
} else {
  $('.big_artGroup').on('mouseenter',
    function () {
      $(this).find('.detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
    });
  $('.big_artGroup').on('mouseleave',
    function () {
      $(this).find('.detail').stop().animate({bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
    });
}
});                  