$(function(){
//login- modal開く
  $('.login-show').click(function(){
   $('#menu-modal').fadeOut();
   $('#login-modal').fadeIn();
 }) ;

 // login-modal閉じる
 $('.close-modal').click(function(){
   $('#login-modal').fadeOut();
 });

 $('#login-modal').click(function(){
   $('#login-modal').fadeOut();
 });



// menu-icon
$('#menu-icon').click(function(){
  if($('#menu-icon').hasClass('open')){
    $('#menu-icon').removeClass('open');
    $('#menu-modal').fadeOut();
    console.log('togita');
  }else {
    $('#menu-icon').addClass('open');
    $('#menu-modal').fadeIn();
    console.log('hiraita');
  }
});
});


 $('#menu-modal').click(function(){
   $('#menu-modal').fadeOut();
 });
