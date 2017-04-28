$(document).ready(function () {
    $(document).on('click', '.clickable', function (e){
      e.preventDefault();
      let imgURL = this.src;
      let text = this.alt;
      $('.modal-photo img').attr('src', imgURL)
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
