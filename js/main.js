const expandableBlock = (button, textBlock, defaultHeight = 63) => {
  $(button).on('click', (e) => {
    const thisText = $(e.currentTarget).siblings(`.${textBlock}`);
    console.log($(thisText).hasClass(`${textBlock}--show`));
    if($(thisText).hasClass(`${textBlock}--show`)) {
      $(thisText).animate({
        height: `${defaultHeight}px`
      }, 0, function () {
        $(thisText).removeClass(`${textBlock}--show`);
      })
    } else {
      const paragraphs = $(thisText).find('p');
      let height = 0;
      paragraphs.map((index, element) => {
        console.log(element, $(element).outerHeight(true));
        height += $(element).outerHeight(true);
      });
      $(thisText).animate({
        height: `${height}px`
      }, 0, function () {
        $(thisText).addClass(`${textBlock}--show`);
      })
    }
  })
}

$(document).mouseup(function (e) {
  const div = $('.modal-dialog')
  if(!div.is(e.target) && div.has(e.target).length === 0) {
    div.closes('.modal').removeClass('show');
  }
});

$(document).ready(() => {
  $('.nav-link').on('click', () => {
    const data = $(this).data('toggle');
    if(data === 'modal') {
      if($('.modal').hasClass('show')) {

      }
    }
  });
  expandableBlock('.shop-gifts__more', 'shop-gifts__text');
  expandableBlock('.answer__item-more', 'answer__item-text', 125);
});


$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
  e.preventDefault();
});