$(document).ready(function(){

$('#content').load('content/home.php');

$('ul#colornav li a').click(function(){
var page=$(this).attr('href');
  $('#content').load('content/'+page+'.php');
  return false;
});

});
