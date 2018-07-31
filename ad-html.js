// removing ads by setting display, visibility, or width height will trigger warning
// we'll just move them away from the screen instead

// hide all ads iframes (like clicking hide)
// this will eleminate floating 'hide' text
for(n = 0; n < 12; ++n) {
  $('#adsIfrme' + n).remove();
}

// horizontal ads
$('div').each((i, div) => {
  div = $(div)
  const id = div.attr('id')
  if(id && id.match(/adsIfrme\d+/)) {
    moveAway(div)
  }
})

function moveAway(jqElement) {
  jqElement.css('position', 'fixed')
  jqElement.css('right', '9999px')
}
