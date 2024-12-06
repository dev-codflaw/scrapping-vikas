//case studies

function include(file) {   
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true;   
  document.getElementsByTagName('body').item(0).appendChild(script);   
  } 
  include('https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit');


  var onloadCallback = function() {
  if ( $('#html_element_2').length ) {
                grecaptcha.render('html_element_2', {'sitekey' : '6LceWUAhAAAAAEXlS8IfkdIBvW8TUx5QZFpeU8nf'
          });
    }
  
  }

$('#casestudies-form').on('submit', function(event) {
  event.preventDefault();

var that = $(this);
var errorCount = 0;
$("#casestudies-form .with-errors").remove();
$("#casestudies-form .border-danger").removeClass('border-danger');
$("#casestudies-form").find(".mandatory").each(function() {
var that = $(this);
var inputVal = that.val();
var inputId = that.attr("id");
inputVal = $.trim(inputVal);
that.removeClass("border-danger");
if (inputVal == "") {
  that.addClass("border-danger");
  errorCount++;
} else if (inputId == "i_email") {

if (!mailValidationcase(inputVal)) {
that.after('<div class="text-danger with-errors">Please Enter Company Email Address!</div>');
that.addClass("border-danger");
errorCount++;
}

}

});

var gCaptchaResponse = grecaptcha.getResponse(0);
 if(gCaptchaResponse == ""){
     $('#html_element_2').after('<div class="with-errors"><span class="text-danger with-errors">Please verify I am not robot</span></div>');
    errorCount++;
 }

if(errorCount == 0){
  $('.loaderform').show();
  $.ajax({
    url: 'contact-form-submit-brochure.php',
    method: 'POST',
    data: new FormData(this),
    headers: {
      'Accept': 'application/json'
    },
    contentType: false,
    processData: false,
    error:err=>{
        console.log(err)
        $('.loaderform').hide();
    },success: function(response) {
      $('.loaderform').hide();
      if (response == 1) {
        $('form').trigger('reset');
        location.href = 'thank-you.php';
      } else {
        alert('something went wrong please try again');
      }
    },
  });
}

}); 
  
  
  function mailValidationcase(inputText) {
  
  var reg = /^[a-zA-Z0-9_.+-]+@(?!(gmail|yahoo|outlook|ymail|hotmail|GMAIL|YAHOO)).*\.[a-zA-Z]{2,6}$/;
  
  if (reg.test(inputText) == false) {
  
  return false;
  
  }
  
  return true;
  
  }

//reserch and report 

    // function include(file) {   
    //   var script  = document.createElement('script'); 
    //   script.src  = file; 
    //   script.type = 'text/javascript'; 
    //   script.defer = true;   
    //   document.getElementsByTagName('body').item(0).appendChild(script);   
    //   } 
    
    
    // $('#research-form').on('submit', function(event) {
    //   event.preventDefault();
    
    // var that = $(this);
    // var errorCount = 0;
    // $("#research-form .with-errors").remove();
    // $("#research-form .border-danger").removeClass('border-danger');
    // $("#research-form").find(".mandatory").each(function() {
    // var that = $(this);
    // var inputVal = that.val();
    // var inputId = that.attr("id");
    // inputVal = $.trim(inputVal);
    // that.removeClass("border-danger");
    // if (inputVal == "") {
    //   that.addClass("border-danger");
    //   errorCount++;
    // } else if (inputId == "r_email") {
    
    // if (!mailValidationcase(inputVal)) {
    // that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
    // that.addClass("border-danger");
    // errorCount++;
    // }
    
    // }
    
    // });
    
    
    // if(errorCount == 0){
    //   $('.loaderform').show();
    //   $.ajax({
    //     url: 'contact-form-submit-rr.php',
    //     method: 'POST',
    //     data: new FormData(this),
    //     headers: {
    //       'Accept': 'application/json'
    //     },
    //     contentType: false,
    //     processData: false,
    //     error:err=>{
    //         console.log(err)
    //         $('.loaderform').hide();
    //     },success: function(response) {
    //       $('.loaderform').hide();
    //       if (response == 1) {
    //         $('form').trigger('reset');
    //         location.href = 'thank-you.php';
    //       } else {
    //         alert('something went wrong please try again');
    //       }
    //     },
    //   });
    // }
    
    // });
    
// //whitepaper

// function include(file) {   
//   var script  = document.createElement('script'); 
//   script.src  = file; 
//   script.type = 'text/javascript'; 
//   script.defer = true;   
//   document.getElementsByTagName('body').item(0).appendChild(script);   
//   } 


// $('#whitepaper-form').on('submit', function(event) {
//   event.preventDefault();

// var that = $(this);
// var errorCount = 0;
// $("#whitepaper-form .with-errors").remove();
// $("#whitepaper-form .border-danger").removeClass('border-danger');
// $("#whitepaper-form").find(".mandatory").each(function() {
// var that = $(this);
// var inputVal = that.val();
// var inputId = that.attr("id");
// inputVal = $.trim(inputVal);
// that.removeClass("border-danger");
// if (inputVal == "") {
//   that.addClass("border-danger");
//   errorCount++;
// } else if (inputId == "i_email") {

// if (!mailValidationcase(inputVal)) {
// that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
// that.addClass("border-danger");
// errorCount++;
// }

// }

// });


// if(errorCount == 0){
//   $('.loaderform').show();
//   $.ajax({
//     url: 'contact-form-submit-whitepaper.php',
//     method: 'POST',
//     data: new FormData(this),
//     headers: {
//       'Accept': 'application/json'
//     },
//     contentType: false,
//     processData: false,
//     error:err=>{
//         console.log(err)
//         $('.loaderform').hide();
//     },success: function(response) {
//       $('.loaderform').hide();
//       if (response == 1) {
//         $('form').trigger('reset');
//         location.href = 'thank-you.php';
//       } else {
//         alert('something went wrong please try again');
//       }
//     },
//   });
// }

// });
  

// //brochure

// function include(file) {   
//   var script  = document.createElement('script'); 
//   script.src  = file; 
//   script.type = 'text/javascript'; 
//   script.defer = true;   
//   document.getElementsByTagName('body').item(0).appendChild(script);   
//   } 


// $('#brochure').on('submit', function(event) {
//   event.preventDefault();

// var that = $(this);
// var errorCount = 0;
// $("#brochure .with-errors").remove();
// $("#brochure .border-danger").removeClass('border-danger');
// $("#brochure").find(".mandatory").each(function() {
// var that = $(this);
// var inputVal = that.val();
// var inputId = that.attr("id");
// inputVal = $.trim(inputVal);
// that.removeClass("border-danger");
// if (inputVal == "") {
//   that.addClass("border-danger");
//   errorCount++;
// } else if (inputId == "i_email") {

// if (!mailValidationcase(inputVal)) {
// that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
// that.addClass("border-danger");
// errorCount++;
// }

// }

// });


// if(errorCount == 0){
//   $('.loaderform').show();
//   $.ajax({
//     url: 'contact-form-submit-brochure.php',
//     method: 'POST',
//     data: new FormData(this),
//     headers: {
//       'Accept': 'application/json'
//     },
//     contentType: false,
//     processData: false,
//     error:err=>{
//         console.log(err)
//         $('.loaderform').hide();
//     },success: function(response) {
//       $('.loaderform').hide();
//       if (response == 1) {
//         $('form').trigger('reset');
//         location.href = 'thank-you.php';
//       } else {
//         alert('something went wrong please try again');
//       }
//     },
//   });
// }

// });




