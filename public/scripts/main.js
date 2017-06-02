$(document).ready(function(){

  // window.onload = function (){
  //   if(document.cookie.length != 0) {
  //     var cookie = document.cookie
  //     var cookieArray = cookie.split('=');
  //     saved_file_name = cookieArray[1].replace(/[; ]+/g, " ").trim();
  //     document.current_file = saved_file_name;
  //
  //     var title;
  //     if(cookieArray[1] === ''){
  //       title = "untitled.md"
  //       console.log('saved_file_name => ',saved_file_name)
  //     } else {
  //       title = saved_file_name
  //       console.log('works!!!')
  //     }
  //     $(".file_name").html(title);
  //
  //     console.log('loaded!!!')
  //   }
  // }

  console.log(marked('I am using __markdown__!'));

  $('.nav_add_file_btn').on('click', function(){
    console.log("click");
    title = prompt("Enter filename") + ".md";
    console.log(title);

    $(".file_name").html(title);


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
      document.cookie = "fileName=" + title + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"

      var cookieString = document.cookie
      console.log('cookieString => ',cookieString); // why do we see NewerThing.md ?
      console.log('you\'ve been saved');

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
    var title = $(this).data('id')+'.md'
    console.log('title ===> ',title);
    document.cookie = "fileName=" + title + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    console.log('document.cookie => ',document.cookie);
  }

)



});




function routeSlice(filename) {
  console.log(filename.substring(filename.length - 3,filename.length - 1));
  if (filename.substring(filename.length - 3,filename.length) === '.md') {
    return '/' + filename
  } else {
  return '/' + filename + '.md'
  }
}
