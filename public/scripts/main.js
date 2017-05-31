console.log(marked('I am using __markdown__!'));

$(document).ready(function(){
  $('.nav_plus').on('click', function(){
    console.log("click");
    var title = "untitled";
    title = prompt("Enter filename");
  })
});
