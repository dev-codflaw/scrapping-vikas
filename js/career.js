function include(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("body").item(0).appendChild(script);
}
$("#apply-form").on("submit", function (event) {
  event.preventDefault();

  var that = $(this);
  var errorCount = 0;
  $("#apply-form .with-errors").remove();
  $("#apply-form .border-danger").removeClass("border-danger");
  $("#apply-form")
    .find(".mandatory")
    .each(function () {
      var that = $(this);
      var inputVal = that.val();
      var inputId = that.attr("id");
      inputVal = $.trim(inputVal);
      that.removeClass("border-danger");
      if (inputVal == "") {
        that.addClass("border-danger");
        errorCount++;
      }
      
    });

  if (errorCount == 0) {
    $(".loaderform").show();
    $.ajax({
      url: "contact-form-apply.php",
      method: "POST",
      data: new FormData(this),
      headers: {
        Accept: "application/json",
      },
      contentType: false,
      processData: false,
      error: (err) => {
        console.log(err);
        $(".loaderform").hide();
      },
      success: function (response) {
        $(".loaderform").hide();
        if (response == 1) {
          $("#apply-form").trigger("reset");
          location.href = "job-applied-successfully.php";
        } else {
          alert("something went wrong please try again");
        }
      },
    });
  }
});

// function mailValidation(inputText) {

//   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//   if (reg.test(inputText) == false) {

//   return false;

//   }

//   return true;

//   }

// ----------------------------- career images -------------------------------------------

// (function () {
//   var initPhotoSwipeFromDOM;

//   initPhotoSwipeFromDOM = function (gallerySelector) {
//     var closest,
//       galleryElements,
//       hashData,
//       i,
//       l,
//       onThumbnailsClick,
//       openPhotoSwipe,
//       parseThumbnailElements,
//       photoswipeParseHash;
    
//     parseThumbnailElements = function (el) {
//       var figureEl, i, item, items, linkEl, numNodes, size, thumbElements;
//       thumbElements = el.childNodes;
//       numNodes = thumbElements.length;
//       items = [];
//       figureEl = void 0;
//       linkEl = void 0;
//       size = void 0;
//       item = void 0;
//       i = 0;
//       while (i < numNodes) {
//         figureEl = thumbElements[i];
       
//         if (figureEl.nodeType !== 1) {
//           i++;
//           continue;
//         }
//         linkEl = figureEl.children[0];
       
//         size = linkEl.getAttribute("data-size").split("x");
        
//         item = {
//           src: linkEl.getAttribute("href"),
//           w: parseInt(size[0], 10),
//           h: parseInt(size[1], 10),
//         };
//         if (figureEl.children.length > 1) {
          
//           item.title = figureEl.children[1].innerHTML;
//         }
//         if (linkEl.children.length > 0) {
          
//           item.msrc = linkEl.children[0].getAttribute("src");
//         }
//         item.el = figureEl;
        
//         items.push(item);
//         i++;
//       }
//       return items;
//     };
    
//     closest = function (el, fn) {
//       return el && (fn(el) ? el : closest(el.parentNode, fn));
//     };
    
//     onThumbnailsClick = function (e) {
//       var childNodes,
//         clickedGallery,
//         clickedListItem,
//         eTarget,
//         i,
//         index,
//         nodeIndex,
//         numChildNodes;
//       e = e || window.event;
//       if (e.preventDefault) {
//         e.preventDefault();
//       } else {
//         e.returnValue = false;
//       }
//       eTarget = e.target || e.srcElement;
     
//       clickedListItem = closest(eTarget, function (el) {
//         return el.tagName && el.tagName.toUpperCase() === "FIGURE";
//       });
//       if (!clickedListItem) {
//         return;
//       }
     
//       clickedGallery = clickedListItem.parentNode;
//       childNodes = clickedListItem.parentNode.childNodes;
//       numChildNodes = childNodes.length;
//       nodeIndex = 0;
//       index = void 0;
//       i = 0;
//       while (i < numChildNodes) {
//         if (childNodes[i].nodeType !== 1) {
//           i++;
//           continue;
//         }
//         if (childNodes[i] === clickedListItem) {
//           index = nodeIndex;
//           break;
//         }
//         nodeIndex++;
//         i++;
//       }
//       if (index >= 0) {
       
//         openPhotoSwipe(index, clickedGallery);
//       }
//       return false;
//     };
    
//     photoswipeParseHash = function () {
//       var hash, i, pair, params, vars;
//       hash = window.location.hash.substring(1);
//       params = {};
//       if (hash.length < 5) {
//         return params;
//       }
//       vars = hash.split("&");
//       i = 0;
//       while (i < vars.length) {
//         if (!vars[i]) {
//           i++;
//           continue;
//         }
//         pair = vars[i].split("=");
//         if (pair.length < 2) {
//           i++;
//           continue;
//         }
//         params[pair[0]] = pair[1];
//         i++;
//       }
//       if (params.gid) {
//         params.gid = parseInt(params.gid, 10);
//       }
//       return params;
//     };
//     openPhotoSwipe = function (
//       index,
//       galleryElement,
//       disableAnimation,
//       fromURL
//     ) {
//       var gallery, items, j, options, pswpElement;
//       pswpElement = document.querySelectorAll(".pswp")[0];
//       gallery = void 0;
//       options = void 0;
//       items = void 0;
//       items = parseThumbnailElements(galleryElement);
     
//       options = {
//         galleryUID: galleryElement.getAttribute("data-pswp-uid"),
//         getThumbBoundsFn: function (index) {
//           var pageYScroll, rect, thumbnail;
        
//           thumbnail = items[index].el.getElementsByTagName("img")[0];
//           pageYScroll =
//             window.pageYOffset || document.documentElement.scrollTop;
//           rect = thumbnail.getBoundingClientRect();
//           return {
//             x: rect.left,
//             y: rect.top + pageYScroll,
//             w: rect.width,
//           };
//         },
//       };
      
//       if (fromURL) {
//         if (options.galleryPIDs) {
          
//           j = 0;
//           while (j < items.length) {
//             if (items[j].pid === index) {
//               options.index = j;
//               break;
//             }
//             j++;
//           }
//         } else {
         
//           options.index = parseInt(index, 10) - 1;
//         }
//       } else {
//         options.index = parseInt(index, 10);
//       }
      
//       if (isNaN(options.index)) {
//         return;
//       }
//       if (disableAnimation) {
//         options.showAnimationDuration = 0;
//       }
     
//       gallery = new PhotoSwipe(
//         pswpElement,
//         PhotoSwipeUI_Default,
//         items,
//         options
//       );
//       gallery.init();
//     };
    
//     galleryElements = document.querySelectorAll(gallerySelector);
//     i = 0;
//     l = galleryElements.length;
//     while (i < l) {
//       galleryElements[i].setAttribute("data-pswp-uid", i + 1);
//       galleryElements[i].onclick = onThumbnailsClick;
//       i++;
//     }
    
//     hashData = photoswipeParseHash();
//     if (hashData.pid && hashData.gid) {
//       openPhotoSwipe(
//         hashData.pid,
//         galleryElements[hashData.gid - 1],
//         true,
//         true
//       );
//     }
//   };

 
//   initPhotoSwipeFromDOM(".gallery");

 
// }).call(this);