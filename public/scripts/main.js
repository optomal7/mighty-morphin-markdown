$(document).ready(function(){

  console.log(marked('I am using __markdown__!'));

  $('.nav_add_file_btn').on('click', function(){
    console.log("click");
    var title = "untitled";
    title = prompt("Enter filename");
  })

  $( '.markdown_textarea' ).keyup(function() {
    var value = marked( $( this ).val() );
    $( '.preview_textarea' ).html( value );
  }).keyup();

HTMLView.innerHTML = marked(markdownview.textContent)


});
