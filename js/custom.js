/*
 window.start_load = function(){
      $('body').prepend('<div id="loader"></div>')
    }
    window.end_load = function(){
      $('#loader').fadeOut('fast', function() {
          $(this).remove();
        })
    }


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



  $(document).ready(function(){
    $('#register-form').submit(function(e){
    e.preventDefault()
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
      } else if (inputId == "contactEmail") {

      if (!mailValidation(inputVal)) {
        that.after('<div class="text-danger with-errors">Please Enter Valid Email!</div>');
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
    start_load();
    $.ajax({
      url:'contact-form-submit.php',
      method:'POST',
      data:$(this).serialize(),
      error:err=>{
        console.log(err)
        end_load();
      },success:function(resp){
        if(resp == 1){
          $('#register-form')[0].reset();
          location.href ='thank-you.php';
        }else{
          end_load();
          alert('something went wrong please try again');
          
        }

      }

    })

  }else{
    return false;
  }

  })

  });



  function mailValidation(inputText) {

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(inputText) == false) {

    return false;

  }

  return true;

}



*/

//pagination

 var items=$(".list-wrapper .list-item");
 var perpage=6;
 var numitems=items.length/perpage;
 
 items.slice(perpage).hide();
 
 $("#pagination-container").pagination({
  items:numitems,
  itemsonpage:perpage,
  prevtext:"<",
  nexttext:">",
  onPageClick:function(e){
    var t=perpage*(e-1);
    items.hide().slice(t,t+perpage).show()
  }
});

$(document).ready(function(){

  var pagination = $('#pagination-container');

  $("#search").keyup(function(){
    var text=$(this).val().toLowerCase();
    // $(".rec").hide();
    // $(".list-item").hide(),$(".list-item ").each(function(){
    //   -1!=$(this).text().toLowerCase().indexOf(""+e)&&$(this).closest(".list-item ").show()
    // })

    var perPage = 20;
    var pageNumber = 1;
    if (text.length == 0) {
      perPage = 6;
      pageNumber = 1;
     
  }
  $('.list-item').hide();
  $('.rec').hide();
  var matches = $('.list-item').filter(function () {
      return $(this).text().toLowerCase().indexOf(text) != -1;
  });
  
  matches.each(function (index) {
      if (index < perPage) {
        $(this).closest('.list-item').show();
        
      }
  });  

  if (text.trim() === '') {
    pagination.show();
    $('.rec').show();
  } else {
    pagination.hide();
  }
  });



  $("#clear").click(function(){
    if($('#search').val(''))
    { 
        window.location.replace("blog.php");
    }
  })

  $('#clearMarketplace').click(function() {
    if ($('#search').val('')) {
        window.location.replace("https://www.actowizsolutions.com/marketplace.php");
    }
});




});

// //case study searchbar

// var items=$(".list-case .list-item-case");

// $(document).ready(function(){
    
//   $('#case-search').keyup(function(){
//       var text = $(this).val().toLowerCase();
//         $('.list-item-case').hide();
//         $('.list-item-case ').each(function(){
//           $('#clear').css('visibility', 'visible');
//             if($(this).text().toLowerCase().indexOf("" + text + "") != -1 ){
//                 $(this).closest('.list-item-case ').show();
//             }  
//        });       
//   });
//   $('#clear').click(function(){
//     if($('#case-search').val(''))
//     { 
//         window.location.replace("work.php");
//     }
    
//   });
// });   





document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});



// ========================================= scraper and api serachbar  ===================================

$(document).ready(function () {
  $('#search-api').keyup(function () {
    var text = $(this).val().toLowerCase();
    $('.list-item').hide();
    $('.list-item').each(function () {

      if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
        $(this).closest('.list-item').show();

      }
    });
  });
});  

// ========================================= case study serachbar  ===================================

$(document).ready(function () {
  $('#search-casestudy').keyup(function () {
    
    var text = $(this).val().toLowerCase();
    $('.list-item').hide();
    $('.list-item').each(function () {

      if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
        $(this).closest('.list-item').show();
      }
    });
  });
});


// var items=$(".list-case .list-item");

// $(document).ready(function(){
    
//   $('#search-casestudy').keyup(function(){
//       var text = $(this).val().toLowerCase();
//         $('.list-item').hide();
//         $('.list-item ').each(function(){
//           $('#clear').css('visibility', 'visible');
//             if($(this).text().toLowerCase().indexOf("" + text + "") != -1 ){
//                 $(this).closest('.list-item ').show();
//             }  
//        });       
//   });
//   $('#clear').click(function(){
//     if($('#search-casestudy').val(''))
//     { 
//         window.location.replace("work.php");
//     }
    
//   });
// });  