$(document).ready(function(){

  console.log(marked('I am using __markdown__!'));

  $('.nav_add_file_btn').on('click', function(){
    console.log("click");
    var title = "untitled";
    title = prompt("Enter filename") + ".md";
    console.log(title);

    $(".file_name").html(title);
    $('.markdown_textarea').val('')
    $('.preview_textarea').html('')


  })

  $("#sv_file").on('click', function(){
    var title = $(".file_name").html();
    var newTitle = title.substring(0, title.length - 3)
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

    if (title !== document.getElementById('file_titles').firstChild.innerHTML) {
      console.log("this should work");
      $('.nav_link_container').prepend('<div class="nav_link name-'+newTitle+'" data-id="'+newTitle+'">'+title+'</div><i data-id="'+newTitle+'" aria-hidden="true" class="fa fa-trash-o delete-'+newTitle+'"></i>')
    }


  })

  $(document).on('click', '.fa-trash-o',
  function () {
      var id = $(this).data('id')
      if(id.substring(id.length - 3, id.length) === '.md'){
        id = id.substring(0, id.length - 3);
      }
      let url = routeSlice(id)
      console.log(url);
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


  $(document).on('click', '.nav_link',
  function(){
    var url = $(this).data('id')
    $('.file_name').html(url + '.md')
    url = '/'+url+'.md'
    console.log('url --> ',url)

    fetch(url, {
      method: 'get'
    }).then(
      function(res){
        console.log('res => ',res)
        return res.text()
      }
    ).then(
      function(content){
        console.log('content => ', content)
        $('.markdown_textarea').val(content);
        $('.preview_textarea').html(marked(content));
      }
    )
  })



});




function routeSlice(filename) {
  console.log(filename.substring(filename.length - 3,filename.length - 1));
  if (filename.substring(filename.length - 3,filename.length) === '.md') {
    return '/' + filename
  } else {
  return '/' + filename + '.md'
  }
}
