(function() {
  toggleTop()
  backToTop()
  getMore()
})();

function toggleTop () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      console.log('666')
    } else {
      console.log('888')
    }
  })
}

function backToTop () {
  $('#blogTop').click(function () {
    window.scrollTo(0, 0)
  });
}

function getMore () {
  $('#blogMore').click(function () {
    var page = $(this).data('page')
    var size = $(this).data('size')
    $.ajax({
      url: '',
      type: 'post',
      data: { page: page, size: size },
      success: function (res) {
        console.log(res)
        $('#blogMore').data('page', page++)
      },
      error: function () {
        console.log('error')
      }
    })
  })
}