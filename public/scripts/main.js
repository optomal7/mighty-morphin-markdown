console.log(marked('I am using __markdown__!'));

$(document).ready(function(){
  $('.nav_plus').on('click', function(){
    console.log("click");
    var title = "untitled";
    title = prompt("Enter filename") + ".md";
    console.log(title);

    $(".file_name").html(title);


  })

  $("#sv_file").on('click', function(){
    console.log("heyoo!");
    var title = $(".file_name").html();
    console.log(title);
    $('.nav_link_container').prepend('<div class="nav_link" id="title_'+title+'">'+title+'</div><i id="trash_'+title+'" aria-hidden="true" class="fa fa-trash-o"></i>')
  })
});
