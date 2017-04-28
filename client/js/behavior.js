const $ = require('jquery')
$(document).ready(function () {
    $(document).on('click', '.clickable', function (e){
      e.preventDefault();
      const imgUrl = this.src;
      const text = this.alt;
      $('.modal-photo img').attr('src', imgUrl)
      $('.modal-info p').html(text)
      $('.test-overlay').css('display', 'flex')
      return false;
    })
    $(document).on('click', '.ion-close-round', function(e){
      e.preventDefault();
      $('.test-overlay').css('display', 'none')
      return false;
    })
});
