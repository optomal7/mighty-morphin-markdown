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
    var title = $(".file_name").html();
    var info = $(".markdown_textarea").val();
    console.log(info);
    var url = '/saveZone'
    var data = {
      data: info,
      file: title
    }
    fetch(url, {
      method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then(() => {
      console.log('youve been saved');
    })
    .catch(function(e) {
      console.log('EEEEEEERROR!' + e);
    })
    console.log("heyoo!");

    console.log(title);
    $('.nav_link_container').prepend('<div class="nav_link name-'+title+'" data-id="'+title+'">'+title+'</div><i data-id="'+title+'" aria-hidden="true" class="fa fa-trash-o delete-'+title+'"></i>')



  })

  $(document).on('click', '.fa-trash-o',
  function () {
      var id = $(this).data('id')
      let url = routeSlice(id)
      console.log(url + "url");
      fetch(url, {
        method: 'delete'
      }).then(() => {
        $('.name-'+id).remove()
        $('.delete-'+id).remove()
      })
    }
  )


  $( '.markdown_textarea' ).keyup(function() {
    var value = marked( $( this ).val() );
    $( '.preview_textarea' ).html( value );
  }).keyup();

});



function routeSlice(filename) {
  return '/' + filename + '.md'
}
