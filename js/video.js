
// =============================================== new testimonial =======================================

document.addEventListener('DOMContentLoaded', () => {
  // get all user-pic elements and user-text elements
  const userPics = document.querySelectorAll('.user-pic');
  const userTexts = document.querySelectorAll('.user-text');

  // check if userPics and userTexts exist and have the same length
  if (userPics && userTexts && userPics.length === userTexts.length) {
    // add event listener to each user-pic element
    userPics.forEach((userPic, index) => {
      userPic.addEventListener('click', () => {
        // remove active classes from all user-pic and user-text elements
        userPics.forEach((pic) => pic.classList.remove('active-pic'));
        userTexts.forEach((text) => text.classList.remove('active-text'));

        // add active classes to clicked user-pic and corresponding user-text elements
        userPic.classList.add('active-pic');
        userTexts[index].classList.add('active-text');
      });
    });
  } 
});



// =============================================== new address =======================================


document.addEventListener('DOMContentLoaded', () => {
  const animatedLocations = document.querySelectorAll('.animated-location');
  const locationDatas = document.querySelectorAll('.location-data');
  
  animatedLocations.forEach((animatedLocation, index) => {
    animatedLocation.addEventListener('click', () => {
      animatedLocations.forEach((animatedLocation) => {
        animatedLocation.classList.remove('active-location');
      });
      animatedLocation.classList.add('active-location');
  
      locationDatas.forEach((locationData) => {
        locationData.classList.remove('active-location-text');
      });
      locationDatas[index].classList.add('active-location-text');
    });
  });
});


// =============================================== new testimonial end =======================================


$(document).ready(function(){
	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".whatch-video").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();

});


// =========================================== testimonial video ===========================================

$(document).ready(function(){
	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".review-video-icon").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-testimonial-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-testimonial-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.testimonial-close-video-modal, .testimonial-video-modal .testimonial-overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();

});







// ===================================================== video.php ==============================================


// Define an array of video containers with their properties
var videoContainers = [
  {
    containerId: 'videoContainer1',
    videoUrl: 'https://www.youtube.com/embed/JudqjEqbXWs?autoplay=1'
  },
  {
    containerId: 'videoContainer2',
    videoUrl: 'https://www.youtube.com/embed/Pqfb8m9DIEU?autoplay=1'
    
  },
  {
    containerId: 'videoContainer3',
    videoUrl: 'https://www.youtube.com/embed/pFa71QDwOlM?autoplay=1'

  },
  {
    containerId: 'videoContainer4',
    videoUrl: 'https://www.youtube.com/embed/LoTHHBh5fno?autoplay=1'

  },
  {
    containerId: 'videoContainer5',
    videoUrl: 'https://www.youtube.com/embed/kQuXlJhavmI?autoplay=1'

  },
  {
    containerId: 'videoContainer6',
    videoUrl: 'https://www.youtube.com/embed/RNF3kFQ2JjI?autoplay=1'

  }
  // Add more objects for additional video containers
];

// Add event listeners for each video container
videoContainers.forEach(function(container) {
  var videoWrapper = document.getElementById(container.containerId);
  var youtubeIcon = videoWrapper.querySelector('.youtube-icon');
  var videoFrame = videoWrapper.querySelector('.video-frame');
  var closeButton = videoWrapper.querySelector('.close-button');

  videoWrapper.addEventListener('click', function() {
    playVideo(container, videoFrame, youtubeIcon, closeButton);
  });

  closeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    closeVideo(videoFrame, youtubeIcon, closeButton);
  });
});

// Function to play the video when the container is clicked
function playVideo(container, videoFrame, youtubeIcon, closeButton) {
  // Set the YouTube video URL
  var videoUrl = container.videoUrl;

  // Stop any currently playing videos
  var allVideoFrames = document.querySelectorAll('.video-frame.show');
  var allYoutubeIcons = document.querySelectorAll('.youtube-icon');
  var allCloseButtons = document.querySelectorAll('.close-button');

  allVideoFrames.forEach(function(frame) {
    if (frame !== videoFrame) {
      frame.src = '';
      frame.classList.remove('show');
    }
  });

  allYoutubeIcons.forEach(function(icon) {
    if (icon !== youtubeIcon) {
      icon.style.opacity = '1';
    }
  });

  allCloseButtons.forEach(function(button) {
    if (button !== closeButton) {
      button.style.display = 'none';
    }
  });

  // Update the src attribute of the iframe
  videoFrame.src = videoUrl;

  // Show the iframe and close button
  videoFrame.classList.add('show');
  youtubeIcon.style.opacity = '0';
  closeButton.style.display = 'block';

  // Add a class to the video container
  videoFrame.closest('.video-container').classList.add('video-filter');
    // Remove the 'position-relative' class from the parent container
    videoFrame.closest('.new-img-relative').classList.remove('new-img-relative');
}

// Function to close the video when the close button is clicked
function closeVideo(videoFrame, youtubeIcon, closeButton) {
  // Reset the src attribute of the iframe
  videoFrame.src = '';

  // Hide the iframe and close button
  videoFrame.classList.remove('show');
  youtubeIcon.style.opacity = '1';
  closeButton.style.display = 'none';

  // Add 'postion-relative' class back to parent container
  videoFrame.closest('.new-video-item-img').classList.add('new-img-relative');
  // Remove the 'position-relative' class from the parent container
  videoFrame.closest('.video-container').classList.remove('video-filter');
}
