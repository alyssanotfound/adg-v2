$(document).ready(function() {
  var selectedText = $('.mobile-nav .selected:first').text();
  $('.selected-mnav-text').text(selectedText);

  $('.selected-mnav').click(function() {
    console.log($('.selected-mnav').attr('data-selected'))
    if ($('.selected-mnav').attr('data-selected') === 'false') {
      $('.selected-mnav-arrow .icon-small').removeClass('no-rotate');
      $('.selected-mnav-arrow .icon-small').addClass('rotate-90');
      $('.dropdown').removeClass('hidden');
      $('.selected-mnav').attr('data-selected', 'true');
    } else {
      $('.selected-mnav-arrow .icon-small').removeClass('rotate-90');
      $('.selected-mnav-arrow .icon-small').addClass('no-rotate');
      $('.dropdown').addClass('hidden');
      $('.selected-mnav').attr('data-selected', 'false');
    }
  });
});