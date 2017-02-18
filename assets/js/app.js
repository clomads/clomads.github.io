
//This handles the accordion for the portfolio on homepage
$('#portfolio-accordion').accordionSlider({
    width: '100%',
    height: 500,
    responsiveMode: 'custom',
    visiblePanels: 4,
    startPanel: -1,
    openedPanelSize: '80%',
    closePanelsOnMouseOut: false,
    shadow: false,
    panelDistance: 10,
    autoplay: false,
    mouseWheel: false,
    breakpoints: {
        800: {height: 700, panelDistance: 5, openPanelDuration: 300, closePanelDuration: 300, openedPanelSize: '75%'}
    }
});

//this manages header size on "page" layout for now -- can be used elsewhere
$(".fit-text").fitText(0.65);
$(".fit-text-alt").fitText(0.9);
//$(".as-opened>.inner-fit-text").fitText(0.65);
//didn't work in accordion


$(window).load(function(){
  $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.7});
});



//email AJAX from Spruce.it
//add honeypot


$("#contact-form-footer").submit(function(e){

  e.preventDefault();
  $('#contact-cover').fadeIn(1000);
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var message = $("#contact-message").val();
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };

  if (isValidEmail(email) && (message.length > 10) && (name.length > 1)){
    $.ajax({
      dataType: "jsonp",
      url: "https://getsimpleform.com/messages/ajax?form_api_token=e7ab5d46d2fd1ba2a9e7566aeddfb53f",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).done( function(){
        $('#fa-spinner').fadeOut(500);
      // set timeout
        $('.success').fadeIn(1000);
      // clear form
      //set timeout
      // fade out success message
    });
  } else{
    $('#fa-spinner').fadeOut(500);
    $('.error').fadeIn(1000);
  }

  return false;
});

function closeContactError(){
    $('#contact-cover').fadeOut(500);
    $('.error').fadeOut(500);
    $('#fa-spinner').fadeIn(1000);
};
