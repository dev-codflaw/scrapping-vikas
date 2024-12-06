// contact us and request demo page

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


  $('#pop-up-form').on('submit', function(event) {
    event.preventDefault();
  
    var that = $(this);
    var errorCount = 0;
    $("#pop-up-form .with-errors").remove();
    $("#pop-up-form .border-danger").removeClass('border-danger');
    $("#pop-up-form").find(".mandatory").each(function() {
    var that = $(this);
    var inputVal = that.val();
    var inputId = that.attr("id");
    inputVal = $.trim(inputVal);
    that.removeClass("border-danger");
    if (inputVal == "") {
      that.addClass("border-danger");
      errorCount++;
      that.closest(".input-group.new-bootom").addClass("border-danger");
    } else if (inputId == "contactEmail") {
  
    if (!mailValidationcontact(inputVal)) {
    that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
    that.addClass("border-danger");
    errorCount++;
    }
  
  }
  // else if (inputId == "contactPhone") {
  //   if (!validatenumber(inputVal)) {
  //     that.after('<div class="text-danger with-errors">Please enter valid number</div>');
  //     that.addClass("border-danger");
  //     errorCount++;
  //   }
  // }

  else if (inputId == "contactPhone") {
    if (!validatenumber(inputVal)) {
        var errorMessage = "Please Enter Valid Number!";
        // Select the .er div and set its text content to the error message
        
        $('.error-message').text(errorMessage);
        $('.input-group').addClass("border-danger");
       
        errorCount++;
    } else {
        // Remove the border-danger class and clear the error message if the input is valid
        $('.error-message').text("");
        $('.input-group').removeClass("border-danger");
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
    url: 'contact-form-submit.php',
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



function mailValidationcontact(inputText) {

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  if (reg.test(inputText) == false) {
  
  return false;
  
  }
  
  return true;
  
  }
  
//phone number validation

function validatenumber(inputText) {

  // var reg = /^[+]{1}\d{1,15}$/;
  // var reg = /^(\+?\d{1,15}(\s\d{1,15})*)$/;
  // var reg = /^\+?[-\s\d]{6,16}$/;

  var reg = /^\+?[-\s\d\(\)]{6,16}$/;
  
  if (reg.test(inputText) == false) {
  
  return false;
  
  }
  
  return true;
  
  }

//pop up form header

function include(file) {   
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true;   
  document.getElementsByTagName('body').item(0).appendChild(script);   
  } 


$('#register-form').on('submit', function(event) {
  event.preventDefault();

var that = $(this);
var errorCount = 0;
$("#register-form .with-errors").remove();
$("#register-form .border-danger").removeClass('border-danger');
$("#register-form").find(".mandatory").each(function() {
var that = $(this);
var inputVal = that.val();
var inputId = that.attr("id");
inputVal = $.trim(inputVal);
that.removeClass("border-danger");
if (inputVal == "") {
  that.addClass("border-danger");
  errorCount++;
  that.closest(".input-group.new-bootom").addClass("border-danger");
} else if (inputId == "contactEmail") {

if (!mailValidationcontact(inputVal)) {
that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
that.addClass("border-danger");
errorCount++;
}

}
// else if (inputId == "contactPhone") {
//   if (!validatenumber(inputVal)) {
//     that.after('<div class="text-danger with-errors">Please enter valid number</div>');
//     that.addClass("border-danger");
//     errorCount++;
//   }
// }

else if (inputId == "contactPhone") {
  if (!validatenumber(inputVal)) {
      var errorMessage = "Please Enter Valid Number!";
      // Select the .er div and set its text content to the error message
      
      $('.error-message').text(errorMessage);
      $('.input-group').addClass("border-danger");
     
      errorCount++;
  } else {
      // Remove the border-danger class and clear the error message if the input is valid
      $('.error-message').text("");
      $('.input-group').removeClass("border-danger");
  }
}
});


if(errorCount == 0){
  $('.loaderform').show();
  $.ajax({
    url: 'contact-form-submit.php',
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



//blog for side-contact-form

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

$('#blog-form').on('submit', function(event) {
  event.preventDefault();

var that = $(this);
var errorCount = 0;
$("#blog-form .with-errors").remove();
$("#blog-form .border-danger").removeClass('border-danger');
$("#blog-form").find(".mandatory").each(function() {
var that = $(this);
var inputVal = that.val();
var inputId = that.attr("id");
inputVal = $.trim(inputVal);
that.removeClass("border-danger");
if (inputVal == "") {
  that.addClass("border-danger");
  errorCount++;
  that.closest(".input-group.new-bootom").addClass("border-danger");
} else if (inputId == "contactEmail") {

if (!mailValidationcontact(inputVal)) {
that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
that.addClass("border-danger");
errorCount++;
}

}
else if (inputId == "contactPhone") {
  if (!validatenumber(inputVal)) {
    that.after('<div class="text-danger with-errors">Please enter valid number</div>');
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
    url: 'contact-form-submit.php',
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



