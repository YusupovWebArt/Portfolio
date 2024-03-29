/* ===================================================================
 * Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : ''   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var ssMenuOnScrolldown = function() {
        
        var hdr = $('.s-header'),
            hdrTop = $('.s-header').offset().top;

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > hdrTop) {
                hdr.addClass('sticky');
            }
            else {
                hdr.removeClass('sticky');
            }

        });
    };


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    var ssMobileMenu = function() {

        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle(); 
            }
        });

    };

   /* Highlight the current section in the navigation bar
    * ------------------------------------------------------ */
    var ssWaypoints = function() {

        var sections = $(".target-section"),
            navigation_links = $(".header-main-nav li a");

        sections.waypoint( {

            handler: function(direction) {

                var active_section;

                active_section = $('section#' + this.element.id);

                if (direction === "up") active_section = active_section.prevAll(".target-section").first();

                var active_link = $('.header-main-nav li a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");

            },

            offset: '25%'

        });
        
    };


   /* Masonry
    * ---------------------------------------------------- */ 
    var ssMasonryFolio = function () {
        
        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var ssPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        // get items
        $folioItems.each( function(i) {

            var $folio = $(this),
                $thumbLink =  $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];
        
            var item = {
                src  : $href,
                w    : $width,
                h    : $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function(i) {

            $(this).find('.thumb-link').on('click', function(e) {
                e.preventDefault();
                var options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });
    };


   /* -------------------------------------------------------------------------------------------PORTFOLIO-------------------------------------------------
    * ------------------------------------------------------ */


    (function() {
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
      
                for (var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
      
                    // include only element nodes
                    if (el.nodeType !== 1) {
                        continue;
                    }
      
                    childElements = el.children;
      
                    size = el.getAttribute("data-size").split("x");
      
                    // create slide object
                    item = {
                        src: el.getAttribute("href"),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute("data-author")
                    };
      
                    item.el = el; // save link to element for getThumbBoundsFn
      
                    if (childElements.length > 0) {
                        item.msrc = childElements[0].getAttribute("src"); // thumbnail url
                        if (childElements.length > 1) {
                            item.title = childElements[1].innerHTML; // caption (contents of figure)
                        }
                    }
      
                    var mediumSrc = el.getAttribute("data-med");
                    if (mediumSrc) {
                        size = el.getAttribute("data-med-size").split("x");
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
      
                    items.push(item);
                }
      
                return items;
            };
      
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };
      
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      
                var eTarget = e.target || e.srcElement;
      
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === "A";
                });
      
                if (!clickedListItem) {
                    return;
                }
      
                var clickedGallery = clickedListItem.parentNode;
      
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
      
                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }
      
                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
      
                if (index >= 0) {
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };
      
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                    params = {};
      
                if (hash.length < 5) {
                    // pid=1
                    return params;
                }
      
                var vars = hash.split("&");
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split("=");
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
      
                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
      
                return params;
            };
      
            var openPhotoSwipe = function(
            index,
             galleryElement,
             disableAnimation,
             fromURL
            ) {
                var pswpElement = document.querySelectorAll(".pswp")[0],
                    gallery,
                    options,
                    items;
      
                items = parseThumbnailElements(galleryElement);
      
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll =
                            window.pageYOffset ||
                            document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
      
                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        };
                    },
      
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if (!item.title) {
                            captionEl.children[0].innerText = "";
                            return false;
                        }
                        captionEl.children[0].innerHTML =
                            item.title +
                            "<br/><small>Based on: " +
                            item.author +
                            "</small>";
                        return true;
                    }
                };
      
                if (fromURL) {
                    if (options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
      
                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }
      
                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }
      
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(
                    pswpElement,
                    PhotoSwipeUI_Default,
                    items,
                    options
                );
      
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
      
                gallery.listen("beforeResize", function() {
                    var dpiRatio = window.devicePixelRatio
                    ? window.devicePixelRatio
                    : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
      
                    if (
                        realViewportWidth >= 1200 ||
                        (!gallery.likelyTouchDevice && realViewportWidth > 800) ||
                        screen.width > 1200
                    ) {
                        if (!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }
                    } else {
                        if (useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
      
                    if (imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
      
                    if (firstResize) {
                        firstResize = false;
                    }
      
                    imageSrcWillChange = false;
                });
      
                gallery.listen("gettingData", function(index, item) {
                    if (useLargeImages) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
      
                gallery.init();
            };
      
            // select all gallery elements
            var galleryElements = document.querySelectorAll(gallerySelector);
            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute("data-pswp-uid", i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
      
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(
                    hashData.pid,
                    galleryElements[hashData.gid - 1],
                    true,
                    true
                );
            }
        };
        
        initPhotoSwipeFromDOM(".gallery-items");
      })();




   /* slick slider
    * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            fade: true,
            cssEase: 'linear'
        });
    };


   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var ssSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var ssAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var ssAOS = function() {
        
        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };


   /* Initialize
    * ------------------------------------------------------ */
   (function clInit() {

    ssPreloader();
    ssMenuOnScrolldown();
    ssMobileMenu();
    ssWaypoints();
    ssMasonryFolio();
    ssPhotoswipe();
    ssSlickSlider();
    ssSmoothScroll();
    ssAlertBoxes();
    ssAOS();

})();

})(jQuery);

/* Current Year
* ------------------------------------------------------ */
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentYear');
yearElement.textContent = `© Copyright WebArt ${currentYear}`;

/* Accordion
* ------------------------------------------------------ */
$(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
});