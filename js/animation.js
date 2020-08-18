$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

$('body').css('display', 'none').fadeIn(500);

$(document).ready(function () {
    $('.sidenav').sidenav();
  });
var text = document.getElementById("section-title").innerText;
var showingText = new Array(text);
var iSpeed = 100;
var iIndex = 0;
var iArrLength = showingText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("section-title");

  while (iRow < iIndex) {
    sContents += showingText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + showingText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != showingText.length) {
      iArrLength = showingText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
var $animation_elements = $(".animation-element");
var $window = $(window);

