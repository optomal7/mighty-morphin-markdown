$(document).ready(function(){

  console.log(marked('I am using __markdown__!'));

  $('.nav_add_file_btn').on('click', function(){
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

  $( '.markdown_textarea' ).keyup(function() {
    var value = marked( $( this ).val() );
    $( '.preview_textarea' ).html( value );
  }).keyup();

HTMLView.innerHTML = marked(markdownview.textContent)


});
