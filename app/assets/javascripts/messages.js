$(function(){
    $('#text_field').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url, //読み込むURL
        type: "POST", 
        data: formData, //読み込む形式
        dataType: 'json',
        processData: false,
        contentType: false     
    })
  })
