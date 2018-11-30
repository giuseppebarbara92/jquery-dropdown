// Esercizio Dropdown
$('.item').mouseenter(function(){
  $('.dropdown_menu').removeClass('active');
  $('.item').removeClass('open');
  $(this).addClass('open');
  var dropdown_menu = $(this).children('.dropdown_menu');
  dropdown_menu.addClass('active');
});

$('.item').mouseleave(function(){
  $('.item').removeClass('open');
  var dropdown_menu = $(this).children('.dropdown_menu');
  dropdown_menu.removeClass('active');
});
