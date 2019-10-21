"use strict";
jQuery(document).on('ready', function () {


	var loader_html = '<div class="system-site-wrap"><div class="system-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>';

	/* ---------------------------------------
	 Ajax Code for Contact Form
	 --------------------------------------- */
	jQuery(document).on('click', '.submit-now', function (e) {
		e.preventDefault();
		var _this = jQuery(this);
		jQuery('body').append(loader_html);
		var serialize_data = _this.parents('.tg-ajax-contact').serialize();
		var dataString = serialize_data;

		var path = document.location
		var loc = window.location;
		var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/'));
		var dir = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));

		jQuery.ajax({
			type: "POST",
			url: dir + '/php/mailer.php',
			data: dataString,
			dataType: "json",
			success: function (response) {
				jQuery('body').find('.system-site-wrap').remove();
				if (response.type == 'error') {
					jQuery.sticky(response.message, { classList: 'important', speed: 200, autoclose: 500000 });
				} else {
					_this.parents('.tg-ajax-contact').get(0).reset();
					jQuery.sticky(response.message, { classList: 'success', speed: 200, autoclose: 500000 });
				}
			}
		});
		return false;
	});

	/* -------------------------------------
	 PRELOADER
	 -------------------------------------- */
	jQuery("#status").delay(2000).fadeOut();
	jQuery("#preloader").delay(2000).fadeOut("slow");
	/* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	if (jQuery('#tg-header').length > 0) {
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > 59) {
				jQuery('body').addClass('tg-fixedme');
			} else {
				jQuery('body').removeClass('tg-fixedme');
			}
		});
	}
	/* -------------------------------------
			SCROLL NAV
	-------------------------------------- */
	var body = jQuery('body');
	if (body.hasClass('tg-home')) {
		body.addClass("home");
		jQuery(window).on('scroll', function () {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 10) {
				jQuery("#tg-header").addClass("single-page-nav");
			} else {
				jQuery("#tg-header").removeClass("single-page-nav");
			}
		});
	}
	var _tg_navigation = jQuery('.tg-navigation');
	_tg_navigation.singlePageNav({
		updateHash: false,
		offset: 90,
		filter: ':not(.external)',
	});
	var _tg_btnscrolltop = jQuery("#tg-btnscrolltop");
	_tg_btnscrolltop.on('click', function () {
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	})
	/* -------------------------------------
			HOME BANNER SLIDER
	-------------------------------------- */
	var _tg_homeslider = jQuery("#tg-homeslider")
	_tg_homeslider.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: false,
		navText: [
			'<i class="icon-chevron-left"></i><span>prev</span>',
			'<i class="icon-chevron-right"></i><span>next</span>',
		],
		navClass: [
			'tg-btnprev',
			'tg-btnnext'
		],
	});
	/*------------------------------------------
			SIDE NAVIGATION
	------------------------------------------*/
	var _tg_btnopenclose = jQuery('.tg-btnopenclose');
	_tg_btnopenclose.on('click', function () {
		jQuery('#tg-wrapper').toggleClass('tg-sidenavshow');
		if (jQuery('#tg-wrapper').hasClass('tg-sidenavshow')) {
			jQuery('body').addClass('spread-overlay');
			return true;
		}
		jQuery('body').removeClass('spread-overlay');
	});
	var _tg_close = jQuery('.tg-close');
	_tg_close.on('click', function () {
		jQuery('#tg-wrapper').toggleClass('tg-sidenavshow');
		if (jQuery('#tg-wrapper').hasClass('tg-sidenavshow')) {
			jQuery('body').addClass('spread-overlay');
			return true;
		}
		jQuery('body').removeClass('spread-overlay');
	});
	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	var _tg_upcomingeventcounter = jQuery('#tg-upcomingeventcounter');
	_tg_upcomingeventcounter.countdown('2019/11/07', function (event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<div class="tg-eventcounter"><span>%-D</span><span> Dias restantes</span></div>'
			+ '<div class="tg-eventcounter"><span>%H</span><span>Horas</span></div>'
			+ '<div class="tg-eventcounter"><span>%M</span><span>Minutos</span></div>'
			+ '<div class="tg-eventcounter"><span>%S</span><span>Segundos</span></div>'
		));
	});
	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	var _tg_upcomingeventcountervtwo = jQuery('#tg-upcomingeventcountervtwo');
	_tg_upcomingeventcountervtwo.countdown('2019/11/07', function (event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%-D</span><span> Days</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%H</span><span>Horas</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%M</span><span>Minutos</span></div></div>'
			+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%S</span><span>Segundos</span></div></div>'
		));
	});
	/* -------------------------------------
			TESTIMONIAL SLIDER
	-------------------------------------- */
	var _tg_testimonialslider = jQuery("#tg-testimonialslider")
	_tg_testimonialslider.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		animateIn: "fadeIn",
		autoplay: false
	});
	/* -------------------------------------
			TESTIMONIAL SLIDER
	-------------------------------------- */
	var _tg_eventspeakerslider = jQuery("#tg-eventspeakerslider")
	_tg_eventspeakerslider.owlCarousel({
		loop: true,
		nav: false,
		animateIn: "fadeIn",
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			}
		}
	});
	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	function themeAccordion() {
		jQuery('.tg-panelcontent').hide();
		jQuery('.tg-accordion h4:first').addClass('active').next().slideDown('slow');
		jQuery('.tg-accordion h4').on('click', function () {
			if (jQuery(this).next().is(':hidden')) {
				jQuery('.tg-accordion h4').removeClass('active').next().slideUp('slow');
				jQuery(this).toggleClass('active').next().slideDown('slow');
			}
		});
	}
	themeAccordion();
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	var _tg_locationmap = jQuery("#tg-locationmap");
	_tg_locationmap.gmap3({
		marker: {
			latLng: [-17.7906784, -63.1773305],
			options: {
				title: "Foros CAINCO",
				icon: "images/map-marker.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	function testimonialSlider() {
		var sync1 = jQuery('.tg-galleryslider');
		var sync2 = jQuery('.tg-gallerthumbslider');
		var slidesPerPage = 1;
		var syncedSecondary = true;
		sync1.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			autoplay: false,
			slideSpeed: 2000,
			responsiveRefreshRate: 200,
		}).on('changed.owl.carousel', syncPosition);
		sync2.on('initialized.owl.carousel', function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
			.owlCarousel({
				items: slidesPerPage,
				dots: false,
				nav: true,
				smartSpeed: 200,
				slideSpeed: 500,
				slideBy: slidesPerPage,
				responsiveRefreshRate: 100,
				navText: [
					'<i class="icon-chevron-left"></i><span>prev</span>',
					'<i class="icon-chevron-right"></i><span>next</span>',
				],
				navClass: [
					'tg-btnprev',
					'tg-btnnext'
				],
			}).on('changed.owl.carousel', syncPosition2);
		function syncPosition(el) {
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - (el.item.count / 2) - .5);
			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}
			sync2
				.find(".owl-item")
				.removeClass("current")
				.eq(current)
				.addClass("current")
			var onscreen = sync2.find('.owl-item.active').length - 1;
			var start = sync2.find('.owl-item.active').first().index();
			var end = sync2.find('.owl-item.active').last().index();
			if (current > end) {
				sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}
		function syncPosition2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				sync1.data('owl.carousel').to(number, 100, true);
			}
		}
		sync2.on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = jQuery(this).index();
			sync1.data('owl.carousel').to(number, 300, true);
		});
	}
	testimonialSlider();
	/* -------------------------------------
			PHOTO SWIPE
	-------------------------------------- */
	var initPhotoSwipeFromDOM = function (gallerySelector) {
		var parseThumbnailElements = function (el) {
			var thumbElements = el.childNodes, numNodes = thumbElements.length, items = [], figureEl, linkEl, size, item;
			for (var i = 0; i < numNodes; i++) {
				figureEl = thumbElements[i];
				if (figureEl.nodeType !== 1) {
					continue;
				}
				linkEl = figureEl.children[0]; // <a> element
				size = linkEl.getAttribute('data-size').split('x');
				item = {
					src: linkEl.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};
				if (figureEl.children.length > 1) {
					item.title = figureEl.children[1].innerHTML;
				}
				if (linkEl.children.length > 0) {
					item.msrc = linkEl.children[0].getAttribute('src');
				}
				item.el = figureEl;
				items.push(item);
			}
			return items;
		};
		var closest = function closest(el, fn) {
			return el && (fn(el) ? el : closest(el.parentNode, fn));
		};
		var onThumbnailsClick = function (e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var eTarget = e.target || e.srcElement;
			var clickedListItem = closest(eTarget, function (el) {
				return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
			});
			if (!clickedListItem) {
				return;
			}
			var clickedGallery = clickedListItem.parentNode, childNodes = clickedListItem.parentNode.childNodes, numChildNodes = childNodes.length, nodeIndex = 0, index;
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
		var photoswipeParseHash = function () {
			var hash = window.location.hash.substring(1),
				params = {};
			if (hash.length < 5) {
				return params;
			}
			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if (!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');
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
		var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0], gallery, options, items;
			items = parseThumbnailElements(galleryElement);
			options = {
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				getThumbBoundsFn: function (index) {
					var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
						pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						rect = thumbnail.getBoundingClientRect();
					return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
				}
			};
			if (fromURL) {
				if (options.galleryPIDs) {
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
			if (isNaN(options.index)) {
				return;
			}
			if (disableAnimation) {
				options.showAnimationDuration = 0;
			}
			gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};
		var galleryElements = document.querySelectorAll(gallerySelector);
		for (var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i + 1);
			galleryElements[i].onclick = onThumbnailsClick;
		}
		var hashData = photoswipeParseHash();
		if (hashData.pid && hashData.gid) {
			openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
		}
	};
	initPhotoSwipeFromDOM('.my-gallery');
	/* -------------------------------------
			STICKY HEADER
	-------------------------------------- */
	jQuery(window).on('scroll', function () {
		var scroll = jQuery(window).scrollTop();
		if (scroll >= 900) {
			jQuery('.tg-header.tg-headervthree').addClass('tg-showheader');
		} else {
			jQuery('.tg-header.tg-headervthree').removeClass('tg-showheader');
		}
	});
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	/* -------------------------------------
			THEME TOOLTIP
	-------------------------------------- */
	jQuery('[data-toggle="tooltip"]').tooltip()
});


(function ($) { $.sticky = $.fn.sticky = function (note, options, callback) { if (typeof options === 'function') callback = options; var hashCode = function (str) { var hash = 0, i = 0, c = '', len = str.length; if (len === 0) return hash; for (i = 0; i < len; i++) { c = str.charCodeAt(i); hash = ((hash << 5) - hash) + c; hash &= hash; } return 's' + Math.abs(hash); }, o = { position: 'top-right', speed: 'fast', allowdupes: true, autoclose: 5000, classList: '' }, uniqID = hashCode(note), display = true, duplicate = false, tmpl = '<div class="sticky border-POS CLASSLIST" id="ID"><span class="sticky-close"></span><p class="sticky-note">NOTE</p></div>', positions = ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']; if (options) $.extend(o, options); $('.sticky').each(function () { if ($(this).attr('id') === hashCode(note)) { duplicate = true; if (!o.allowdupes) display = false; } if ($(this).attr('id') === uniqID) uniqID = hashCode(note); }); if (!$('.sticky-queue').length) { $('body').append('<div class="sticky-queue ' + o.position + '">'); } else { $('.sticky-queue').removeClass(positions.join(' ')).addClass(o.position); } if (display) { $('.sticky-queue').prepend(tmpl.replace('POS', o.position).replace('ID', uniqID).replace('NOTE', note).replace('CLASSLIST', o.classList)).find('#' + uniqID).slideDown(o.speed, function () { display = true; if (callback && typeof callback === 'function') { callback({ 'id': uniqID, 'duplicate': duplicate, 'displayed': display }); } }); } $('.sticky').ready(function () { if (o.autoclose) { $('#' + uniqID).delay(o.autoclose).fadeOut(o.speed, function () { $(this).remove(); }); } }); $('.sticky-close').on('click', function () { $('#' + $(this).parent().attr('id')).dequeue().fadeOut(o.speed, function () { $(this).remove(); }); }); }; })(jQuery);