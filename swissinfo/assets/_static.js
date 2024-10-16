/**
 * Process ads with cache busting 'On'
 */
var advanced_ads_layer_cache_busting;
if (!advanced_ads_layer_cache_busting) {
   advanced_ads_layer_cache_busting = {
      doc_loaded: false,
      bufferedAds: [],

      flush: function () {
         var _bufferedAds = this.bufferedAds;
         this.bufferedAds = [];

         for (var i = 0; i < _bufferedAds.length; i++) {
            this._process_item(jQuery(_bufferedAds[i]));

         }

      },

      _process_item: function (banner) {
         var banner_id = banner.attr('id');

         advads_items.conditions[banner_id] = advads_items.conditions[banner_id] || {};

         advads_layer_center_if_not_sticky(banner)

         if (banner.hasClass('advads-effect')) {
            advads_layer_gather_effects(banner_id);
         }

         if (!banner.hasClass('use-fancybox')) {
            advads_layer_gather_background(banner_id);
         }

         advads_layer_gather_auto_close(banner);

         // display onload ad right away
         if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-onload')) {
            advads_items.conditions[banner_id].scrolloffset = true;
            advads_check_item_conditions(banner_id);
            // exit popup (if the user leaves the page) 
         } else if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-exit')) {
            ouibounce(banner[0], {
               // the modal will fire any time the page is reloaded, for the same user
               aggressive: true,
               // amount of time that firing is surpressed for
               timer: 0,
               callback: function () {
                  // reset display to none after Ouibounce
                  banner.css('display', 'none');
                  advads_items.conditions[banner_id].scrolloffset = true;
                  advads_check_item_conditions(banner_id);
               }
            });
            // display after delay of n seconds
         } else if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-delay')) {
            var delay = (parseInt(banner.attr('data-advads-layer-delay'), 10)) || 0;
            setTimeout(function () {
               advads_items.conditions[banner_id].delay_expired = true;
               advads_check_item_conditions(banner_id);
            }, delay);
            // ad depends on scrolling
         } else {
            // calculate scroll length (document height - window height)
            var advads_scrollhalf = (jQuery(document).height() - jQuery(window).height()) / 2;

            var scroll_handler = function (event) {
               if (jQuery.inArray(banner_id, advads_items.showed) !== -1) {
                  //console.log( 'off scroll event' )
                  jQuery(window).off('scroll', scroll_handler);
                  return;
               }

               // display scroll ads right after scrolling stopped
               if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-stop')) {
                  advads_items.conditions[banner_id].scrolloffset = true;
                  advads_check_item_conditions(banner_id);
               }

               // display ads after half the page was scrolled
               if (jQuery(document).scrollTop() >= advads_scrollhalf) {
                  if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-half')) {
                     advads_items.conditions[banner_id].scrolloffset = true;
                     advads_check_item_conditions(banner_id);
                  }
               }

               // display ads after custom scroll offset
               if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-offset')) {
                  var custom_offset = advads_extract_custom_offset_from_class('#' + banner_id);
                  if (jQuery(document).scrollTop() >= custom_offset) {
                     advads_items.conditions[banner_id].scrolloffset = true;
                     advads_check_item_conditions(banner_id);
                  }
               }
            }


            jQuery(window).onEnd('scroll', scroll_handler, 100);
         }

      },

      observe: function (event) {
         if (event.event === 'postscribe_done' && event.ref && event.ad) {
            var banner = jQuery(event.ref).children('div');
            if (!banner.hasClass(advanced_ads_layer_settings.layer_class + '')) {
               return;
            }

            if (advanced_ads_layer_cache_busting.doc_loaded) {
               advanced_ads_layer_cache_busting.bufferedAds.push(banner);
               advanced_ads_layer_cache_busting.flush();
            }
         }
      },
   }
}

// Advanced Ads Pro is enabled
if (typeof advanced_ads_pro === 'object' && advanced_ads_pro !== null) {
   // observe cache busting done event
   advanced_ads_pro.postscribeObservers.add(advanced_ads_layer_cache_busting.observe);
}

/**
 * Process ads with cache busting 'Off'
 */
var layers = function () {
   advanced_ads_layer_cache_busting.doc_loaded = true;

   jQuery('.' + advanced_ads_layer_settings.layer_class).each(function () {
      advanced_ads_layer_cache_busting.bufferedAds.push(jQuery(this));
   });

   advanced_ads_layer_cache_busting.flush();
};

if (typeof advads !== 'undefined' && typeof advads.privacy.dispatch_event !== 'undefined') {
   document.addEventListener('advanced_ads_privacy', function (event) {
      if (
         event.detail.previousState === 'unknown' &&
         (event.detail.state === 'accepted' || event.detail.state === 'not_needed') &&
         window.advanced_ads_layer_settings.placements !== null
      ) {
         window.advanced_ads_layer_settings.placements.forEach(function (value) {
            document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"][data-placement="' + value + '"]').forEach(advads.privacy.decode_ad);
         });
      }

      layers();
   });
} else {
   (window.advanced_ads_ready || jQuery(document).ready).call(null, function () {
      layers();
   });
}

/**
 * adjust position for centered layer banner if not added by the sticky plugin
 * @param {string} $ad jQuery object (wrapped set)
 */
function advads_layer_center_if_not_sticky($ad) {
   if ($ad.hasClass('is-sticky')) {
      return;
   }
   /*
   var left = ( jQuery( window ).width() - ad.width() ) / 2;
   var top = ( jQuery( window ).height() - ad.height() ) / 2;
   ad.css('left', left);
   ad.css('top', top);
   ad.css('position', 'fixed'); 
   */

   var width = parseInt($ad.attr('data-width'), 10);
   var height = parseInt($ad.attr('data-height'), 10);


   var is_transform_supported = getSupportedTransform();

   var transform_property = '';
   if (!height) {
      if (is_transform_supported) {
         transform_property += 'translateY(50%) ';
      } else {
         jQuery($ad).css({
            'top': '0',
            'bottom': 'auto'
         });
      }
   }
   if (!width) {
      if (is_transform_supported) {
         transform_property += 'translateX(-50%) ';
      } else {
         jQuery($ad).css({
            'left': '0',
            'right': 'auto'
         });
      }

   }
   if (transform_property) {
      set_ad_transform($ad, transform_property);
   }
}

/**
 * gather information about display effects and duration
 * @param {string} id of the ad, without #
 */
function advads_layer_gather_effects(id) {
   var banner = jQuery('#' + id);
   // display effect duration
   advads_items.effect_durations[id] = advads_extract_duration_from_class(banner);
   // load display effects
   if (banner.hasClass('advads-effect-fadein')) {
      advads_items.display_effect_callbacks[id] = 'advads_display_effect_fadein';
   };
   if (banner.hasClass('advads-effect-show')) {
      advads_items.display_effect_callbacks[id] = 'advads_display_effect_show';
   };
   if (banner.hasClass('advads-effect-slide')) {
      advads_items.display_effect_callbacks[id] = 'advads_display_effect_slide';
   };
}

/**
 * gather information about background
 * @param {string} id of the ad, without #
 */
function advads_layer_gather_background(id) {
   var banner = jQuery('#' + id);
   // add display callback to the ads with background
   if (banner.hasClass('advads-has-background') && banner.is(':hidden')) {
      if (!advads_items.display_callbacks[id] != 'undefined') {
         advads_items.display_callbacks[id] = {};
         var length = 0;
      } else {
         var length = advads_items.display_callbacks[id].length;
      }

      advads_items.display_callbacks[id][length] = 'advads_layer_display_background_callback';
   }
}

/**
 * Gather auto close info and schedule auto close.
 *
 * @param {obj} $banner A jQuery object representing the banner wrapper.
 */
function advads_layer_gather_auto_close($banner) {
   var delay = parseInt($banner.data('auto-close-delay'), 10);
   if (!delay) {
      return;
   }
   var banner_id = $banner.attr('id');
   advads_items.display_callbacks[banner_id] = advads_items.display_callbacks[banner_id] || {};
   advads_items.display_callbacks[banner_id].auto_close = function (banner_id) {
      setTimeout(function () {
         advads_layer_close_item(banner_id);
      }, delay);
   }
}

/**
 * check if background can be removed
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if background can be removed
 */
function can_remove_background(item) {
   advads_items.backgrounds[item] = false;
   var remove = true;
   jQuery.each(advads_items.backgrounds, function (i, val) {
      if (val == true) {
         //if ( advads_items.conditions.hasOwnProperty(i) && advads_items.conditions[i].scrolloffset == true  ) {
         remove = false;
         //break the loop
         return false;
         //}
      }
   });
   return remove;
}

/**
 * check item conditions and display the ad if all conditions are true
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if item can be displayed
 */
function advads_check_item_conditions(id) {
   var item = jQuery('#' + id);
   if (item.length == 0) {
      return;
   }

   var display = true;
   jQuery.each(advads_items.conditions[id], function (method, flag) {
      if (flag === false) {
         // display the banner
         display = false;
      }
   });

   if (display) {
      advads_items.showed.push(id);

      item.trigger(advanced_ads_layer_settings.layer_class + '-trigger');

      if (item.hasClass('use-fancybox')) {
         fancybox_display(id);
      } else {
         var ad = jQuery('#' + id);

         var position = jQuery(ad).attr('data-position');
         var width = parseInt(ad.attr('data-width'), 10);
         var height = parseInt(ad.attr('data-height'), 10);
         var is_transform_supported = getSupportedTransform();


         switch (position) {
            case 'topcenter':
               if (!width) {
                  if (is_transform_supported) {
                     set_ad_transform(ad, 'translateX(-50%)');
                  } else {
                     jQuery(ad).css({
                        'left': '0',
                        'right': 'auto',
                        'top': '0',
                        'bottom': 'auto'
                     });
                  }
               }
               break;
            case 'centerleft':
               if (!height) {
                  if (is_transform_supported) {
                     set_ad_transform(ad, 'translateY(50%)');
                  } else {
                     jQuery(ad).css({
                        'left': '0',
                        'right': 'auto',
                        'top': '0',
                        'bottom': 'auto'
                     });
                  }
               }
               break;
            case 'center':
               var transform_property = '';
               if (!height) {
                  if (is_transform_supported) {
                     transform_property += 'translateY(50%) ';
                  } else {
                     jQuery(ad).css({
                        'top': '0',
                        'bottom': 'auto'
                     });
                  }
               }
               if (!width) {
                  if (is_transform_supported) {
                     transform_property += 'translateX(-50%) ';
                  } else {
                     jQuery(ad).css({
                        'left': '0',
                        'right': 'auto'
                     });
                  }

               }
               if (transform_property) {
                  set_ad_transform(ad, transform_property);
               }
               break;
            case 'centerright':
               if (!height) {
                  if (is_transform_supported) {
                     set_ad_transform(ad, 'translateY(50%)');
                  } else {
                     jQuery(ad).css({
                        'left': '0',
                        'right': 'auto',
                        'top': '0',
                        'bottom': 'auto'
                     });
                  }

               }
               break;
            case 'bottomcenter':
               if (!width) {
                  if (is_transform_supported) {
                     set_ad_transform(ad, 'translateX(-50%)');
                  } else {
                     jQuery(ad).css({
                        'left': '0',
                        'right': 'auto',
                        'top': '0',
                        'bottom': 'auto'
                     });
                  }

               }
               break;
         }

         advads_layer_call_display_callbacks(id);

         if (advads_items.display_effect_callbacks[id] == undefined) {
            ad.show();
         } else {
            var callback = window[advads_items.display_effect_callbacks[id]];
            callback(id);
         }
      }
   }
}

/**
 * shows the ad using fancybox plugin
 *
 * @param {string} id id of the ad, without #
 */
function fancybox_display(id) {
   var banner = jQuery('#' + id);

   var settings = {
      'speedIn': 0,
      'speedOut': 0,
      'showCloseButton': true,
      'hideOnOverlayClick': banner.hasClass('advads-background-click-close'),
      'centerOnScroll': true,
      //'autoScale' : false,
      //'autoDimensions' : false,
      'margin': 20,
      'padding': 10,
      'onClosed': function () {
         if (typeof advads_items.close_functions[id] === 'function') {
            advads_items.close_functions[id]();
         }
      },
      // Once the content is displayed.
      'onComplete': function () {
         advads_layer_call_display_callbacks(id);
      },
   }

   if (advads_items.display_effect_callbacks[id] == undefined) {
      settings['transitionIn'] = 'none';
   } else {
      var callback = advads_items.display_effect_callbacks[id];
      switch (callback) {
         case 'advads_display_effect_fadein':
            settings['transitionIn'] = 'fade';
            break;
         case 'advads_display_effect_show':
            settings['transitionIn'] = 'elastic';
            break;
         default:
            settings['transitionIn'] = 'none';
      }
   }

   if (!banner.hasClass('advads-has-background')) {
      settings['overlayShow'] = false;
   }

   if (!banner.hasClass('advads-close')) {
      settings['showCloseButton'] = false;
   }
   // extract duration of the transitionIn effect
   var speedIn = advads_extract_duration_from_class(banner);
   settings['speedIn'] = (speedIn) ? speedIn : 0;

   var position = jQuery(banner).attr('data-position');
   // css for Fancybox
   var output_css = '#fancybox-close { right: -15px; }';
   output_css += '#fancybox-loading, #fancybox-loading div, #fancybox-overlay, #fancybox-wrap, #fancybox-wrap div {';
   output_css += '-webkit-box-sizing: content-box !important; -moz-box-sizing: content-box !important; box-sizing: content-box !important; }';

   switch (position) {
      case 'topleft':
         output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: auto !important; left: 0px !important; }';
         break;
      case 'topcenter':
         output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; }';
         break;
      case 'topright':
         output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: 0px !important; left: auto !important; }';
         break;
      case 'centerleft':
         output_css += '#fancybox-wrap { left: 0px !important; right: auto !important; }';
         break;
      case 'center':
         break;
      case 'centerright':
         output_css += '#fancybox-wrap { right: 0px !important; left: auto !important; }';
         break;
      case 'bottomleft':
         output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: auto !important; left: 0px !important; }';
         break;
      case 'bottomcenter':
         output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; }';
         break;
      case 'bottomright':
         output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: 0px !important; left: auto !important; }';
         break;
   }


   jQuery('#' + advanced_ads_layer_settings.layer_class + '-custom-css').html(output_css);

   // show fancybox
   if (typeof jQuery.fancybox == 'function') {
      banner.waitForImages(function () {
         settings['content'] = banner.show();
         jQuery.fancybox(settings);
      });
   }
}

/**
 * Call display callbacks.
 *
 * @param {string} banner_id id of the banner, without #
 */
function advads_layer_call_display_callbacks(banner_id) {
   // iterate through all callback function and call them
   advads_items.display_callbacks[banner_id] = advads_items.display_callbacks[banner_id] || {};
   jQuery.each(advads_items.display_callbacks[banner_id], function (key, func) {
      if (typeof func === 'string') {
         func = window[func];
      }
      func(banner_id);
   });
}

/**
 * return a custom offset extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function advads_extract_custom_offset_from_class(field) {
   var offset = 0;
   var classes = jQuery(field).attr('class');
   if (classes !== undefined) {
      // create class array
      classes = classes.split(/\s+/);
      jQuery.each(classes, function (key, value) {
         if (value === '')
            return false;
         // get information about the solution from a class
         var pattern = new RegExp(advanced_ads_layer_settings.layer_class + '-offset-', 'gi');
         if (value.match(pattern)) {
            infos = value.split('-');
            offset = parseInt(infos[3])
            return false;
         }
      });
   }

   return offset;
};

/**
 * return a duration extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function advads_extract_duration_from_class(field) {
   var duration = 0;
   var classes = field.attr('class');
   if (classes !== undefined) {
      // create class array
      classes = classes.split(/\s+/);
      jQuery.each(classes, function (key, value) {
         if (value === '')
            return false;
         // get information about the solution from a class
         if (value.match(/advads-duration-/gi)) {
            infos = value.split('-');
            duration = parseInt(infos[2])
            return false;
         }
      });
   }

   return duration;
};

/**
 * callback function in case a layer ad is displayed with a background
 * @param {type} ad object
 */
function advads_layer_display_background_callback(id) {
   // display overlay in case it is attached to an ad still not visible
   var banner = jQuery('#' + id);
   // only display background if there is an unvisible ad with a background AND no background visible yet
   if (banner.hasClass('advads-has-background') && banner.is(':hidden')) {
      //there is background for this ad
      advads_items.backgrounds[id] = true;
      if (jQuery('.advads-background').length === 0) {
         var args = {
            "class": "advads-background",
            "style": "position: fixed; bottom: 0; right: 0; display: block; width: 100%; height: 100%; background: #000; z-index: 9998; opacity:.5;",
         }
         if (banner.hasClass('advads-background-click-close')) {
            args.click = function () {
               jQuery(this).remove();
               advads_layer_close_items();
            }
         }
         jQuery('<div/>', args).appendTo('body');
      }
   }
}

/**
 * callback for display effect fadeIn
 * @param {obj} ad container
 */
function advads_display_effect_fadein(id) {
   var banner = jQuery('#' + id);
   var duration = parseInt(advads_items.effect_durations[id]);
   banner.fadeIn(duration);
}

/**
 * callback for display effect show
 * @param {obj} ad container
 */
function advads_display_effect_show(id) {
   var banner = jQuery('#' + id);
   var duration = parseInt(advads_items.effect_durations[id]);
   banner.show(duration);
}

/**
 * callback for display effect slideDown
 * @link http://api.jquery.com/slideDown/
 * @param {obj} ad container
 */
function advads_display_effect_slide(id) {
   var banner = jQuery('#' + id);
   var duration = parseInt(advads_items.effect_durations[id]);
   banner.slideDown(duration);
}

/**
 * check, if css transform is supported by user's browser
 * 
 * [http://stackoverflow.com/a/12625986]
 */
function getSupportedTransform() {
   var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
   var div = document.createElement('div');
   for (var i = 0; i < prefixes.length; i++) {
      if (div && div.style[prefixes[i]] !== undefined) {
         return prefixes[i];
      }
   }
   return false;
}

/**
 * set css transform property for the ad
 * @param {string} jQuery object (wrapped set)
 * @param {string} values of property
 */
function set_ad_transform(ad, transform_properties) {
   jQuery(ad).css({
      '-webkit-transform': transform_properties,
      '-moz-transform': transform_properties,
      'transform': transform_properties
   });
}

/**
 * Close item (when user clicks on the close button/background or automatically after n sec.).
 *
 * @param {string} item_id Id of the item.
 */
function advads_layer_close_item(item_id) {
   if (typeof advads_items.close_functions[item_id] === 'function') {
      advads_items.close_functions[item_id]();
      advads_items.close_functions[item_id] = null;

      // Close Fancybox window.
      if (jQuery.fancybox && typeof jQuery.fancybox.close === 'function') {
         jQuery.fancybox.close();
      }
   }
}

/**
 * Close all items.
 */
function advads_layer_close_items() {
   for (var item_id in advads_items.close_functions) {
      if (advads_items.close_functions.hasOwnProperty(item_id)) {
         advads_layer_close_item(item_id);
      }
   }
}

//https://github.com/tonai/jquery-onend
! function (a) {
   "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
   a.fn.onEnd = function () {
      var a, b = Array.prototype.slice.call(arguments),
         c = b.pop(),
         d = b.pop(),
         e = function () {
            var b = Array.prototype.slice.call(arguments);
            clearTimeout(a), a = setTimeout(function () {
               d.apply(this, b)
            }.bind(this), c)
         };
      e.guid = d.guid || (d.guid = jQuery.guid++), b.push(e), this.on.apply(this, b)
   }
});

/*!
 * Ouibounce
 * https://github.com/carlsednaoui/ouibounce
 *
 * Copyright (c) 2014 Carl Sednaoui
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 **/
! function (e, n) {
   "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : e.ouibounce = n()
}(this, function (e, n, o) {
   return function (e, n) {
      "use strict";

      function o(e, n) {
         return "undefined" == typeof e ? n : e
      }

      function i(e) {
         var n = 24 * e * 60 * 60 * 1e3,
            o = new Date;
         return o.setTime(o.getTime() + n), "; expires=" + o.toUTCString()
      }

      function t() {
         s() || (L.addEventListener("mouseleave", u), L.addEventListener("mouseenter", r), L.addEventListener("keydown", c))
      }

      function u(e) {
         e.clientY > k || (D = setTimeout(m, y))
      }

      function r() {
         D && (clearTimeout(D), D = null)
      }

      function c(e) {
         g || e.metaKey && 76 === e.keyCode && (g = !0, D = setTimeout(m, y))
      }

      function d(e, n) {
         return a()[e] === n
      }

      function a() {
         for (var e = document.cookie.split("; "), n = {}, o = e.length - 1; o >= 0; o--) {
            var i = e[o].split("=");
            n[i[0]] = i[1]
         }
         return n
      }

      function s() {
         return d(T, "true") && !v
      }

      function m() {
         s() || (e && (e.style.display = "block"), E(), f())
      }

      function f(e) {
         var n = e || {};
         "undefined" != typeof n.cookieExpire && (b = i(n.cookieExpire)), n.sitewide === !0 && (w = ";path=/"), "undefined" != typeof n.cookieDomain && (x = ";domain=" + n.cookieDomain), "undefined" != typeof n.cookieName && (T = n.cookieName), document.cookie = T + "=true" + b + x + w, L.removeEventListener("mouseleave", u), L.removeEventListener("mouseenter", r), L.removeEventListener("keydown", c)
      }
      var l = n || {},
         v = l.aggressive || !1,
         k = o(l.sensitivity, 20),
         p = o(l.timer, 1e3),
         y = o(l.delay, 0),
         E = l.callback || function () {},
         b = i(l.cookieExpire) || "",
         x = l.cookieDomain ? ";domain=" + l.cookieDomain : "",
         T = l.cookieName ? l.cookieName : "viewedOuibounceModal",
         w = l.sitewide === !0 ? ";path=/" : "",
         D = null,
         L = document.documentElement;
      setTimeout(t, p);
      var g = !1;
      return {
         fire: m,
         disable: f,
         isDisabled: s
      }
   }
});

/*! waitForImages jQuery Plugin 2015-06-02 */
! function (a) {
   "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
   var b = "waitForImages";
   a.waitForImages = {
      hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
      hasImageAttributes: ["srcset"]
   }, a.expr[":"]["has-src"] = function (b) {
      return a(b).is('img[src][src!=""]')
   }, a.expr[":"].uncached = function (b) {
      return a(b).is(":has-src") ? !b.complete : !1
   }, a.fn.waitForImages = function () {
      var c, d, e, f = 0,
         g = 0,
         h = a.Deferred();
      if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0], d = arguments[1], e = arguments[2]), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
      return this.each(function () {
         var i = a(this),
            j = [],
            k = a.waitForImages.hasImageProperties || [],
            l = a.waitForImages.hasImageAttributes || [],
            m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
         e ? i.find("*").addBack().each(function () {
            var b = a(this);
            b.is("img:has-src") && j.push({
               src: b.attr("src"),
               element: b[0]
            }), a.each(k, function (a, c) {
               var d, e = b.css(c);
               if (!e) return !0;
               for (; d = m.exec(e);) j.push({
                  src: d[2],
                  element: b[0]
               })
            }), a.each(l, function (c, d) {
               var e, f = b.attr(d);
               return f ? (e = f.split(","), void a.each(e, function (c, d) {
                  d = a.trim(d).split(" ")[0], j.push({
                     src: d,
                     element: b[0]
                  })
               })) : !0
            })
         }) : i.find("img:has-src").each(function () {
            j.push({
               src: this.src,
               element: this
            })
         }), f = j.length, g = 0, 0 === f && (c.call(i[0]), h.resolveWith(i[0])), a.each(j, function (e, j) {
            var k = new Image,
               l = "load." + b + " error." + b;
            a(k).one(l, function m(b) {
               var e = [g, f, "load" == b.type];
               return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0
            }), k.src = j.src
         })
      }), h.promise()
   }
});;

function advanced_ads_sticky_check_position_fixed() {
   var container = document.body;
   if (document.createElement && container && container.appendChild && container.removeChild) {
      var el = document.createElement('div');
      if (!el.getBoundingClientRect) {
         return null;
      }
      el.innerHTML = 'x';
      el.style.cssText = 'position:fixed;top:100px;';
      container.appendChild(el);
      var originalHeight = container.style.height,
         originalScrollTop = container.scrollTop;
      // In IE<=7, the window's upper-left is at 2,2 (pixels) with respect to the true client.
      // surprisely, in IE8, the window's upper-left is at -2, -2 (pixels), but other elements
      // tested is just right, so we need adjust this.
      // https://groups.google.com/forum/?fromgroups#!topic/comp.lang.javascript/zWJaFM5gMIQ
      // https://bugzilla.mozilla.org/show_bug.cgi?id=174397
      var extraTop = parseInt(document.documentElement.getBoundingClientRect().top, 10);
      extraTop = extraTop > 0 ? extraTop : 0;
      container.style.height = '3000px';
      container.scrollTop = 500;
      var elementTop = parseInt(el.getBoundingClientRect().top, 10);
      container.style.height = originalHeight;
      var isSupported = (elementTop - extraTop) === 100;
      container.removeChild(el);
      container.scrollTop = originalScrollTop;
      return isSupported;
   }
   return null;
};

// decode sticky ads right after consent is given.
document.addEventListener('advanced_ads_privacy', function (event) {
   if (event.detail.state !== 'accepted' && event.detail.state !== 'not_needed') {
      return;
   }

   window.advanced_ads_sticky_settings.placements.forEach(function (value) {
      document.querySelectorAll('script[type="text/plain"][data-tcf="waiting-for-consent"][data-placement="' + value + '"]').forEach(advads.privacy.decode_ad);
   });
});

jQuery(document).ready(function ($) {
   var resize_timeout = null,
      $el, previous_width = $(window).width();


   // Update position when viewport size changes.
   function resize_handler() {
      if (resize_timeout) clearTimeout(resize_timeout);
      resize_timeout = setTimeout(function () {
         var new_width = $(window).width();
         if (previous_width === new_width) {
            // Return if the viewport has not actually changed
            // Scroll event triggered this due to the position of the address bar.
            return;
         }
         previous_width = new_width;

         if (typeof advanced_ads_sticky_items !== 'undefined') {
            $.each(advanced_ads_sticky_items, function (wrapper_id, data) {
               $el = $('#' + wrapper_id);
               // Apply initial 'position: absolute' styles if 'position: absolute' was transformed to 'position: fixed'
               // using the 'advads.fix_element' function.
               $el.prop('style', data.initial_css);

               // Fix to windows position and/or center vertically again.
               data.modifying_func();
            });
         }
      }, 1000);
   }

   if ('undefined' === typeof advanced_ads_responsive || !parseInt(advanced_ads_responsive.reload_on_resize, 10)) {
      // If the "Reload ads on resize" feature of the Responsive add-on is not used.
      jQuery(window).on('resize', resize_handler);
   }

   //Remove 'position: fixed' if not supported, if the feature enabled in the settings.
   if (typeof advanced_ads_sticky_settings === 'undefined' || !advanced_ads_sticky_settings.check_position_fixed) {
      return;
   }

   // story scroll enable value so it isnâ€™t checked multiple times per page view
   var advanced_ads_sticky_position_fixed_supported = '';
   var allowed_offset = $(document.body).is('.admin-bar') ? $('#wpadminbar').height() : 0;

   /**
    * Remove all position related inline styles.
    *
    * @param {object=} $stickyads Optional jQuery object.
    */
   function remove_css($stickyads) {
      // if position fixed is unsupported
      if (advanced_ads_sticky_position_fixed_supported === false) {
         $(window).off('resize', resize_handler);
         $stickyads = $stickyads || jQuery('.' + advanced_ads_sticky_settings.sticky_class);
         setTimeout(function () {
            $stickyads.each(function (key, value) {
               var $stickyad = $(value);
               if (window.advanced_ads_sticky_items[$stickyad.attr('id')].can_convert_to_abs) {
                  $stickyad.css('position', 'absolute');
               } else {
                  $stickyad.css('position', '').css('top', '').css('right', '').css('bottom', '').css('left', '').css('margin-left', '')
                     .css('transform', 'none').css('-webkit-transform', 'none').css('-moz-transform', 'none').css('-ms-transform', 'none');
               }
            });
         });
      }
   }


   function scroll_handler() {
      clearTimeout($.data(this, 'scrollTimer'));
      // wait 100ms when scrolling before checking
      $.data(this, 'scrollTimer', setTimeout(function () {
         // donâ€™t do anything if scroll position is 0 == top
         // or admin bar has not been scrolled.
         if ($(document).scrollTop() <= allowed_offset) {
            return;
         }
         // check if position fixed is supported; story result in a variable so test runs only once
         if (advanced_ads_sticky_position_fixed_supported == '') {
            advanced_ads_sticky_position_fixed_supported = advanced_ads_sticky_check_position_fixed();
            clearTimeout($.data(this, 'scrollTimer'));
            $(window).off('scroll', scroll_handler);
         }
         // rewrite sticky ads
         remove_css();
      }, 100));
   }

   if (navigator.userAgent.indexOf('Opera Mini') > -1) {
      //Opera mini does not support 'scroll' event.
      advanced_ads_sticky_position_fixed_supported = false;
      remove_css();
   } else {
      $(window).scroll(scroll_handler);
   }


   // When cache-busting inserts new item.
   if (typeof advanced_ads_pro === 'object' && advanced_ads_pro !== null) {
      advanced_ads_pro.postscribeObservers.add(function (event) {
         if (event.event === 'postscribe_done' && event.ref && event.ad) {
            var $stickyad = jQuery(event.ref).children('.' + advanced_ads_sticky_settings.sticky_class);
            if ($stickyad.length) {
               remove_css($stickyad);
            }
         }
      });
   }
});;
! function (e) {
   var t = "advads_procfp",
      a = "advanced_ads_ad_clicks",
      d = null,
      n = null;

   function o(e) {
      try {
         return JSON.parse(e)
      } catch (e) {
         return null
      }
   }
   e(document).on("advads-passive-cb-conditions", (function (e, t) {
      t.conditions.ad_clicks = "check_ad_clicks", t.check_ad_clicks = function (e, t) {
         if (advads.cookie_exists(a + "_" + t.id)) {
            var d = advads.get_cookie(a + "_" + t.id);
            d = o(d)
         }
         if (d) {
            var n = parseInt((new Date).getTime() / 1e3);
            for (var i in d)
               if ("_" + e.expiration == i && d[i].ttl >= n && d[i].count >= parseInt(e.limit)) return !1
         }
         return !0
      }
   }));
   var i = function () {
      this.$elements = {}, this.currentIFrame = !1, this.focusLost = !1, this.wrappers = [".google-auto-placed"], this.attributes = {
         "data-anchor-status": "displayed",
         "data-vignette-loaded": "true"
      }, this.lastClick = 0, this.init()
   };
   i.prototype = {
      constructor: i,
      init: function () {
         const t = this;
         let a;
         e(document).on("click", "a[data-cfpa]", (function () {
            t.onClick(parseInt(e(this).attr("data-cfpa")))
         })), e(window).on("blur", (function (e) {
            setTimeout((function () {
               if (!t.currentIFrame)
                  for (let e = document.activeElement; e && e !== this && e !== document && (t.currentIFrame = t.checkWrappers(e), !t.currentIFrame); e = e.parentNode);
               t.currentIFrame && (t.onClick(t.currentIFrame), t.focusLost = !0, top.focus())
            }), 0)
         })), e(document).on("mouseenter", "div[data-cfpa]", (function () {
            var a = parseInt(e(this).attr("data-cfpa"));
            t.addElement(a)
         })), document.addEventListener("touchmove", (function () {
            a = !0
         }), !1), document.addEventListener("touchstart", (function () {
            a = !1
         }), !1), ["click", "touchend"].forEach((function (e) {
            document.addEventListener(e, (function (e) {
               if (a || t.getTimestamp() - t.lastClick < 1) return;
               let d = null;
               for (let a = e.target; a && a !== this && a !== document; a = a.parentNode) {
                  if (d = t.checkWrappers(a), d) {
                     t.onClick(d);
                     break
                  }
                  if (a.hasAttribute("data-cfpa") && a.hasAttribute("data-cfptl")) {
                     d = parseInt(a.getAttribute("data-cfpa"), 10), t.onClick(d);
                     break
                  }
               }
            }))
         }))
      },
      getTimestamp: function () {
         return Math.floor(Date.now() / 1e3)
      },
      checkWrappers: function (e) {
         for (let t = 0, a = this.wrappers.length, d = null; t < a; t++)
            if (d = this.wrappers[t], e.matches && e.matches(d)) return ".google-auto-placed" === d ? "google-auto-placed" : null;
         for (const [t, a] of Object.entries(this.attributes))
            if (e.hasAttribute(t) && e.getAttribute(t) === a) return "google-auto-placed";
         return null
      },
      addElement: function (t) {
         !1 == t instanceof jQuery && (t = e('div[data-cfpa="' + t + '"]').first());
         var i = !!t.find("iframe").length;
         if (i || t.find("a").length) {
            var r = parseInt(t.attr("data-cfpa"));
            if (this.$elements[r] = t, t.removeAttr("data-cfpa"), i ? (t.find("iframe").first().attr({
                  "data-cfpa": r
               }), t.attr("data-cfph") && t.find("iframe").first().attr({
                  "data-cfph": t.attr("data-cfph")
               })) : (t.find("a").not(".advads-edit-button").first().attr({
                  "data-cfpa": r
               }), t.attr("data-cfph") && t.find("a").not(".advads-edit-button").first().attr({
                  "data-cfph": t.attr("data-cfph")
               })), t.removeAttr("data-cfph"), advads.cookie_exists(a + "_" + r)) {
               var s = advads.get_cookie(a + "_" + r);
               if (s = o(s)) {
                  var c = parseInt((new Date).getTime() / 1e3),
                     f = !1;
                  for (var u in s)
                     if (s.hasOwnProperty(u) && "exp" != u && s[u].ttl < c) {
                        for (var p = parseFloat(u.substr(1)), v = s[u].ttl; v < c;) v += 60 * p * 60;
                        s[u].ttl = v, s[u].count = 0, f = !0
                     } if (f) {
                     var _ = new Date(s.exp);
                     advads.set_cookie_sec(a + "_" + r, JSON.stringify(s, "false", !1), parseInt(_.getTime() / 1e3), d, n)
                  }
               }
            }
         }
      },
      _banVisitor: function () {
         var e = new Date,
            t = new Date;
         t.setTime(t.getTime() + 24 * advadsCfpInfo.cfpBan * 60 * 60 * 1e3);
         var a = (t.getTime() - e.getTime()) / 1e3;
         advads.set_cookie_sec("advads_pro_cfp_ban", 1, a, d, n), document.querySelectorAll("[data-cfpw]:not([data-cfp-exclude])").forEach((function (e) {
            e.remove()
         })), this.removeEmptyWrappers(), this.wrappers.forEach((function (e) {
            jQuery(e).remove()
         }));
         for (const [e, t] of Object.entries(this.attributes)) jQuery("[" + e + '="' + t + '"]').remove()
      },
      removeEmptyWrappers: function () {
         document.querySelectorAll("[data-cfptl]:not([data-cfpw])").forEach((function (e) {
            e.querySelectorAll("[data-cfpw]").length || e.remove()
         }))
      },
      onClick: function (i) {
         var r = this,
            s = !1,
            c = !1;
         if (this.lastClick = this.getTimestamp(), "google-auto-placed" !== i && e('[data-cfpa="' + i + '"]').attr("data-cfph")) {
            advads.cookie_exists(a + "_" + i) && (c = o(advads.get_cookie(a + "_" + i)));
            const t = o(e('[data-cfpa="' + i + '"]').attr("data-cfph"));
            if (c) {
               const e = parseInt((new Date).getTime() / 1e3, 10),
                  o = document.querySelectorAll('[data-cfpw="' + i + '"]');
               for (var f in c) c.hasOwnProperty(f) && "exp" !== f && (c[f].count = parseInt(c[f].count, 10) + 1, c[f].ttl >= e && c[f].count >= parseInt(t[f], 10) && (o.forEach((function (e) {
                  e.remove()
               })), r.removeEmptyWrappers()));
               var u = new Date,
                  p = new Date(c.exp),
                  v = parseInt((p.getTime() - u.getTime()) / 1e3);
               advads.set_cookie_sec(a + "_" + i, JSON.stringify(c, "false", !1), v, d, n)
            } else {
               var _ = {},
                  l = 0,
                  m = new Date;
               u = new Date;
               for (var f in t) f = f.substring(1), parseFloat(f) > l && (l = parseFloat(f)), _["_" + f] = {
                  count: 1,
                  ttl: parseInt(u.getTime() / 1e3 + 3600 * parseFloat(f), 10)
               };
               m.setTime(m.getTime() + 60 * l * 60 * 1e3);
               var w = "expires=" + m.toUTCString();
               v = parseInt((m.getTime() - u.getTime()) / 1e3);
               _.exp = w, advads.set_cookie_sec(a + "_" + i, JSON.stringify(_, "false", !1), v, d, n)
            }
         }
         if (advads.cookie_exists(t + "_" + i) && (s = o(advads.get_cookie(t + "_" + i))), s) {
            s.count = parseInt(s.count, 10) + 1;
            u = new Date, v = ((p = new Date(s.exp)).getTime() - u.getTime()) / 1e3;
            advads.set_cookie_sec(t + "_" + i, JSON.stringify(s, "false", !1), v, d, n), advadsCfpInfo.cfpClickLimit <= s.count && void 0 !== advadsCfpInfo.cfpBan && r._banVisitor()
         } else {
            m = new Date, u = new Date;
            m.setTime(m.getTime() + 60 * advadsCfpInfo.cfpExpHours * 60 * 1e3);
            w = "expires=" + m.toUTCString(), v = (m.getTime() - u.getTime()) / 1e3;
            advads.set_cookie_sec(t + "_" + i, '{"count":1,"exp":"' + w + '"}', v, d, n), 1 === advadsCfpInfo.cfpClickLimit && void 0 !== advadsCfpInfo.cfpBan && r._banVisitor()
         }
      }
   }, e((function () {
      for (var t in window.advadsProCfp = new i, e(document).on("mouseenter", "iframe[data-cfpa]", (function (t) {
            var a = parseInt(e(this).attr("data-cfpa"));
            advadsProCfp.currentIFrame = a
         })).on("mouseenter", ".google-auto-placed", (function (e) {
            advadsProCfp.currentIFrame = "google-auto-placed"
         })).on("mouseleave mouseout", "[data-cfpa], .google-auto-placed", (function () {
            advadsProCfp.currentIFrame = !1, advadsProCfp.focusLost && (advadsProCfp.focusLost = !1, e(window).trigger("focus"))
         })), advadsCfpQueue) advadsCfpQueue.hasOwnProperty(t) && advadsProCfp.addElement(advadsCfpQueue[t]);
      advadsCfpQueue = [], void 0 !== window.advadsCfpInfo.cfpPath && ("" != advadsCfpInfo.cfpPath && (d = advadsCfpInfo.cfpPath), "" != advadsCfpInfo.cfpDomain && (n = advadsCfpInfo.cfpDomain))
   }))
}(window.jQuery);
var advanced_ads_resizetimeout = 1e3,
   advanced_ads_cookieexpires = 30,
   advanced_ads_browser_width = advanced_ads_get_browser_width();
if (void 0 !== window.advads) {
   var cookieValue = advads.get_cookie("advanced_ads_visitor"),
      info = cookieValue ? JSON.parse(cookieValue) : {};
   info.browser_width && info.browser_width === advanced_ads_browser_width || advanced_ads_save_width(advanced_ads_browser_width)
}

function advanced_ads_resize_window() {
   advads_resize_delay((function () {
      if (advanced_ads_browser_width !== (advanced_ads_browser_width = advanced_ads_get_browser_width())) {
         advanced_ads_save_width(advanced_ads_browser_width);
         var e = window.advanced_ads_responsive || {};
         window.jQuery && parseInt(e.reload_on_resize, 10) && jQuery(document).triggerHandler("advanced-ads-resize-window")
      }
   }), advanced_ads_resizetimeout)
}

function advanced_ads_save_width(e) {
   if (window.advanced_ads_responsive && void 0 !== window.advads) {
      var t = advads.get_cookie("advanced_ads_visitor"),
         a = t ? JSON.parse(t) : {};
      a.browser_width = e, advads.set_cookie("advanced_ads_visitor", JSON.stringify(a), advanced_ads_cookieexpires, advanced_ads_cookies.cookie_path, advanced_ads_cookies.cookie_domain)
   }
}
window.addEventListener ? window.addEventListener("resize", advanced_ads_resize_window, !1) : window.attachEvent && window.attachEvent("onresize", advanced_ads_resize_window);
var advads_resize_delay = function () {
   var e = 0;
   return function (t, a) {
      clearTimeout(e), e = setTimeout(t, a)
   }
}();

function advanced_ads_get_browser_width() {
   if (window.jQuery) return jQuery(window).width();
   var e = 0;
   return "number" == typeof window.innerWidth ? e = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? e = document.documentElement.clientWidth : document.body && document.body.clientWidth && (e = document.body.clientWidth), e
};
/*! This file is auto-generated */
(() => {
   var e = {
         9681: e => {
            var t = {
                'Ã€': "A",
                'Ã': "A",
                'Ã‚': "A",
                'Ãƒ': "A",
                'Ã„': "A",
                'Ã…': "A",
                'áº¤': "A",
                'áº®': "A",
                'áº²': "A",
                'áº´': "A",
                'áº¶': "A",
                'Ã†': "AE",
                'áº¦': "A",
                'áº°': "A",
                'È‚': "A",
                'áº¢': "A",
                'áº': "A",
                'áº¨': "A",
                'áºª': "A",
                'áº¬': "A",
                'Ã‡': "C",
                'á¸ ˆ': "C",
                'Ãˆ': "E",
                'Ã‰': "E",
                'ÃŠ': "E",
                'Ã‹': "E",
                'áº¾': "E",
                'á¸–': "E",
                'á»€': "E",
                'á¸”': "E",
                'á¸ œ': "E",
                'È†': "E",
                'áºº': "E",
                'áº¼': "E",
                'áº¸': "E",
                'á»‚': "E",
                'á»„': "E",
                'á»†': "E",
                'ÃŒ': "I",
                'Ã': "I",
                'ÃŽ': "I",
                'Ã': "I",
                'á¸®': "I",
                'ÈŠ': "I",
                'á» ˆ': "I",
                'á» Š': "I",
                'Ã': "D",
                'Ã‘': "N",
                'Ã’': "O",
                'Ã“': "O",
                'Ã”': "O",
                'Ã•': "O",
                'Ã–': "O",
                'Ã˜': "O",
                'á»': "O",
                'á¹ Œ': "O",
                'á¹’': "O",
                'ÈŽ': "O",
                'á» Ž': "O",
                'á» Œ': "O",
                'á»”': "O",
                'á»–': "O",
                'á»˜': "O",
                'á» œ': "O",
                'á» ž': "O",
                'á»': "O",
                'á» š': "O",
                'á»¢': "O",
                'Ã™': "U",
                'Ãš': "U",
                'Ã›': "U",
                'Ãœ': "U",
                'á»¦': "U",
                'á»¤': "U",
                'á»¬': "U",
                'á»®': "U",
                'á»°': "U",
                'Ã': "Y",
                'Ã': "a",
                'Ã¡': "a",
                'Ã¢': "a",
                'Ã£': "a",
                'Ã¤': "a",
                'Ã¥': "a",
                'áº¥': "a",
                'áº¯': "a",
                'áº³': "a",
                'áºµ': "a",
                'áº·': "a",
                'Ã¦': "ae",
                'áº§': "a",
                'áº±': "a",
                'Èƒ': "a",
                'áº£': "a",
                'áº¡': "a",
                'áº©': "a",
                'áº«': "a",
                'áº­': "a",
                'Ã§': "c",
                'á¸‰': "c",
                'Ã¨': "e",
                'Ã©': "e",
                'Ãª': "e",
                'Ã«': "e",
                'áº¿': "e",
                'á¸—': "e",
                'á»': "e",
                'á¸•': "e",
                'á¸': "e",
                'È‡': "e",
                'áº»': "e",
                'áº½': "e",
                'áº¹': "e",
                'á» ƒ': "e",
                'á»…': "e",
                'á»‡': "e",
                'Ã¬': "i",
                'Ã­': "i",
                'Ã®': "i",
                'Ã¯': "i",
                'á¸¯': "i",
                'È‹': "i",
                'á»‰': "i",
                'á»‹': "i",
                'Ã°': "d",
                'Ã±': "n",
                'Ã²': "o",
                'Ã³': "o",
                'Ã´': "o",
                'Ãµ': "o",
                'Ã¶': "o",
                'Ã¸': "o",
                'á»‘': "o",
                'á¹': "o",
                'á¹“': "o",
                'È': "o",
                'á»': "o",
                'á»': "o",
                'á»•': "o",
                'á»—': "o",
                'á»™': "o",
                'á»': "o",
                'á» Ÿ': "o",
                'á»¡': "o",
                'á»›': "o",
                'á»£': "o",
                'Ã¹': "u",
                'Ãº': "u",
                'Ã»': "u",
                'Ã¼': "u",
                'á»§': "u",
                'á»¥': "u",
                'á»­': "u",
                'á»¯': "u",
                'á»±': "u",
                'Ã½': "y",
                'Ã¿': "y",
                'Ä€': "A",
                'Ä': "a",
                'Ä‚': "A",
                'Äƒ': "a",
                'Ä„': "A",
                'Ä…': "a",
                'Ä†': "C",
                'Ä‡': "c",
                'Äˆ': "C",
                'Ä‰': "c",
                'ÄŠ': "C",
                'Ä‹': "c",
                'ÄŒ': "C",
                'Ä': "c",
                'CÌ†': "C",
                'cÌ†': "c",
                'ÄŽ': "D",
                'Ä': "d",
                'Ä': "D",
                'Ä‘': "d",
                'Ä’': "E",
                'Ä“': "e",
                'Ä”': "E",
                'Ä•': "e",
                'Ä–': "E",
                'Ä—': "e",
                'Ä˜': "E",
                'Ä™': "e",
                'Äš': "E",
                'Ä›': "e",
                'Äœ': "G",
                'Ç´': "G",
                'Ä': "g",
                'Çµ': "g",
                'Äž': "G",
                'ÄŸ': "g",
                'Ä': "G",
                'Ä¡': "g",
                'Ä¢': "G",
                'Ä£': "g",
                'Ä¤': "H",
                'Ä¥': "h",
                'Ä¦': "H",
                'Ä§': "h",
                'á¸ ª': "H",
                'á¸«': "h",
                'Ä¨': "I",
                'Ä©': "i",
                'Äª': "I",
                'Ä«': "i",
                'Ä¬': "I",
                'Ä­': "i",
                'Ä®': "I",
                'Ä¯': "i",
                'Ä°': "I",
                'Ä±': "i",
                'Ä²': "IJ",
                'Ä³': "ij",
                'Ä´': "J",
                'Äµ': "j",
                'Ä¶': "K",
                'Ä·': "k",
                'á¸°': "K",
                'á¸±': "k",
                'KÌ†': "K",
                'kÌ†': "k",
                'Ä¹': "L",
                'Äº': "l",
                'Ä»': "L",
                'Ä¼': "l",
                'Ä½': "L",
                'Ä¾': "l",
                'Ä¿': "L",
                'Å€': "l",
                'Å': "l",
                'Å‚': "l",
                'á¸¾': "M",
                'á¸¿': "m",
                'MÌ†': "M",
                'mÌ†': "m",
                'Åƒ': "N",
                'Å„': "n",
                'Å…': "N",
                'Å†': "n",
                'Å‡': "N",
                'Åˆ': "n",
                'Å‰': "n",
                'NÌ†': "N",
                'nÌ†': "n",
                'ÅŒ': "O",
                'Å': "o",
                'ÅŽ': "O",
                'Å': "o",
                'Å': "O",
                'Å‘': "o",
                'Å’': "OE",
                'Å“': "oe",
                'PÌ†': "P",
                'pÌ†': "p",
                'Å”': "R",
                'Å•': "r",
                'Å–': "R",
                'Å—': "r",
                'Å˜': "R",
                'Å™': "r",
                'RÌ†': "R",
                'rÌ†': "r",
                'È’': "R",
                'È“': "r",
                'Åš': "S",
                'Å›': "s",
                'Åœ': "S",
                'Å': "s",
                'Åž': "S",
                'È˜': "S",
                'È™': "s",
                'ÅŸ': "s",
                'Å': "S",
                'Å¡': "s",
                'Å¢': "T",
                'Å£': "t",
                'È›': "t",
                'Èš': "T",
                'Å¤': "T",
                'Å¥': "t",
                'Å¦': "T",
                'Å§': "t",
                'TÌ†': "T",
                'tÌ†': "t",
                'Å¨': "U",
                'Å©': "u",
                'Åª': "U",
                'Å«': "u",
                'Å¬': "U",
                'Å­': "u",
                'Å®': "U",
                'Å¯': "u",
                'Å°': "U",
                'Å±': "u",
                'Å²': "U",
                'Å³': "u",
                'È–': "U",
                'È—': "u",
                'VÌ†': "V",
                'vÌ†': "v",
                'Å´': "W",
                'Åµ': "w",
                'áº‚': "W",
                'áºƒ': "w",
                'XÌ†': "X",
                'xÌ†': "x",
                'Å¶': "Y",
                'Å·': "y",
                'Å¸': "Y",
                'YÌ†': "Y",
                'yÌ†': "y",
                'Å¹': "Z",
                'Åº': "z",
                'Å»': "Z",
                'Å¼': "z",
                'Å½': "Z",
                'Å¾': "z",
                'Å¿': "s",
                'Æ’': "f",
                'Æ': "O",
                'Æ¡': "o",
                'Æ¯': "U",
                'Æ°': "u",
                'Ç': "A",
                'ÇŽ': "a",
                'Ç': "I",
                'Ç': "i",
                'Ç‘': "O",
                'Ç’': "o",
                'Ç“': "U",
                'Ç”': "u",
                'Ç•': "U",
                'Ç–': "u",
                'Ç—': "U",
                'Ç˜': "u",
                'Ç™': "U",
                'Çš': "u",
                'Ç›': "U",
                'Çœ': "u",
                'á»¨': "U",
                'á»©': "u",
                'á¹¸': "U",
                'á¹¹': "u",
                'Çº': "A",
                'Ç»': "a",
                'Ç¼': "AE",
                'Ç½': "ae",
                'Ç¾': "O",
                'Ç¿': "o",
                'Ãž': "TH",
                'Ã¾': "th",
                'á¹”': "P",
                'á¹•': "p",
                'á¹¤': "S",
                'á¹¥': "s",
                'XÌ': "X",
                'xÌ': "x",
                'Ðƒ': "Ð“",
                'Ñ“': "Ð³",
                'ÐŒ': "Ðš",
                'Ñœ': "Ðº",
                'AÌ‹': "A",
                'aÌ‹': "a",
                'EÌ‹': "E",
                'eÌ‹': "e",
                'IÌ‹': "I",
                'iÌ‹': "i",
                'Ç¸': "N",
                'Ç¹': "n",
                'á»’': "O",
                'á»“': "o",
                'á¹': "O",
                'á¹‘': "o",
                'á» ª': "U",
                'á»«': "u",
                'áº€': "W",
                'áº': "w",
                'á»²': "Y",
                'á»³': "y",
                'È€': "A",
                'È': "a",
                'È„': "E",
                'È…': "e",
                'Èˆ': "I",
                'È‰': "i",
                'ÈŒ': "O",
                'È': "o",
                'È': "R",
                'È‘': "r",
                'È”': "U",
                'È•': "u",
                'BÌŒ': "B",
                'bÌŒ': "b",
                'ÄŒÌ£': "C",
                'Ä Ì£': "c",
                'ÃŠÌŒ': "E",
                'ÃªÌŒ': "e",
                'FÌŒ': "F",
                'fÌŒ': "f",
                'Ç¦': "G",
                'Ç§': "g",
                'Èž': "H",
                'ÈŸ': "h",
                'JÌŒ': "J",
                'Ç°': "j",
                'Ç¨': "K",
                'Ç©': "k",
                'MÌŒ': "M",
                'mÌŒ': "m",
                'PÌŒ': "P",
                'pÌŒ': "p",
                'QÌŒ': "Q",
                'qÌŒ': "q",
                'Å˜ Ì©': "R",
                'Å™ Ì©': "r",
                'á¹¦': "S",
                'á¹§': "s",
                'VÌŒ': "V",
                'vÌŒ': "v",
                'WÌŒ': "W",
                'wÌŒ': "w",
                'XÌŒ': "X",
                'xÌŒ': "x",
                'YÌŒ': "Y",
                'yÌŒ': "y",
                'AÌ§': "A",
                'aÌ§': "a",
                'BÌ§': "B",
                'bÌ§': "b",
                'á¸': "D",
                'á¸‘': "d",
                'È¨': "E",
                'È©': "e",
                'Æ Ì§': "E",
                'É› Ì§': "e",
                'á¸¨': "H",
                'á¸©': "h",
                'IÌ§': "I",
                'iÌ§': "i",
                'Æ— Ì§': "I",
                'É¨ Ì§': "i",
                'MÌ§': "M",
                'mÌ§': "m",
                'OÌ§': "O",
                'oÌ§': "o",
                'QÌ§': "Q",
                'qÌ§': "q",
                'UÌ§': "U",
                'uÌ§': "u",
                'XÌ§': "X",
                'xÌ§': "x",
                'ZÌ§': "Z",
                'zÌ§': "z",
                'Ð¹': "Ð¸",
                'Ð™': "Ð˜",
                'Ñ‘': "Ðµ",
                'Ð': "Ð•"
             },
               r = Object.keys(t).join("|"),
               n = new RegExp(r, "g"),
               o = new RegExp(r, "");

            function i(e) {
               return t[e]
            }
            var u = function (e) {
               return e.replace(n, i)
            };
            e.exports = u, e.exports.has = function (e) {
               return !!e.match(o)
            }, e.exports.remove = u
         }
      },
      t = {};

   function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = t[n] = {
         exports: {}
      };
      return e[n](i, i.exports, r), i.exports
   }
   r.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, {
         a: t
      }), t
   }, r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
         enumerable: !0,
         get: t[n]
      })
   }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(e, "__esModule", {
         value: !0
      })
   };
   var n = {};
   (() => {
      "use strict";

      function e(e) {
         try {
            return new URL(e), !0
         } catch {
            return !1
         }
      }
      r.r(n), r.d(n, {
         addQueryArgs: () => y,
         buildQueryString: () => f,
         cleanForSlug: () => j,
         filterURLForDisplay: () => w,
         getAuthority: () => c,
         getFilename: () => C,
         getFragment: () => O,
         getPath: () => s,
         getPathAndQueryString: () => d,
         getProtocol: () => i,
         getQueryArg: () => U,
         getQueryArgs: () => m,
         getQueryString: () => p,
         hasQueryArg: () => E,
         isEmail: () => o,
         isURL: () => e,
         isValidAuthority: () => a,
         isValidFragment: () => A,
         isValidPath: () => l,
         isValidProtocol: () => u,
         isValidQueryString: () => g,
         normalizePath: () => P,
         prependHTTP: () => b,
         prependHTTPS: () => $,
         removeQueryArgs: () => I,
         safeDecodeURI: () => v,
         safeDecodeURIComponent: () => h
      });
      const t = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i;

      function o(e) {
         return t.test(e)
      }

      function i(e) {
         const t = /^([^\s:]+:)/.exec(e);
         if (t) return t[1]
      }

      function u(e) {
         return !!e && /^[a-z\-.\+]+[0-9]*:$/i.test(e)
      }

      function c(e) {
         const t = /^[^\/\s:]+:(?:\/\/)?\/?([^\/\s#?]+)[\/#?]{0,1}\S*$/.exec(e);
         if (t) return t[1]
      }

      function a(e) {
         return !!e && /^[^\s#?]+$/.test(e)
      }

      function s(e) {
         const t = /^[^\/\s:]+:(?:\/\/)?[^\/\s#?]+[\/]([^\s#?]+)[#?]{0,1}\S*$/.exec(e);
         if (t) return t[1]
      }

      function l(e) {
         return !!e && /^[^\s#?]+$/.test(e)
      }

      function p(e) {
         let t;
         try {
            t = new URL(e, "http://example.com").search.substring(1)
         } catch (e) {}
         if (t) return t
      }

      function f(e) {
         let t = "";
         const r = Object.entries(e);
         let n;
         for (; n = r.shift();) {
            let [e, o] = n;
            if (Array.isArray(o) || o && o.constructor === Object) {
               const t = Object.entries(o).reverse();
               for (const [n, o] of t) r.unshift([`${e}[${n}]`, o])
            } else void 0 !== o && (null === o && (o = ""), t += "&" + [e, o].map(encodeURIComponent).join("="))
         }
         return t.substr(1)
      }

      function g(e) {
         return !!e && /^[^\s#?\/]+$/.test(e)
      }

      function d(e) {
         const t = s(e),
            r = p(e);
         let n = "/";
         return t && (n += t), r && (n += `?${r}`), n
      }

      function O(e) {
         const t = /^\S+?(#[^\s\?]*)/.exec(e);
         if (t) return t[1]
      }

      function A(e) {
         return !!e && /^#[^\s#?\/]*$/.test(e)
      }

      function h(e) {
         try {
            return decodeURIComponent(e)
         } catch (t) {
            return e
         }
      }

      function m(e) {
         return (p(e) || "").replace(/\+/g, "%20").split("&").reduce(((e, t) => {
            const [r, n = ""] = t.split("=").filter(Boolean).map(h);
            if (r) {
               ! function (e, t, r) {
                  const n = t.length,
                     o = n - 1;
                  for (let i = 0; i < n; i++) {
                     let n = t[i];
                     !n && Array.isArray(e) && (n = e.length.toString()), n = ["__proto__", "constructor", "prototype"].includes(n) ? n.toUpperCase() : n;
                     const u = !isNaN(Number(t[i + 1]));
                     e[n] = i === o ? r : e[n] || (u ? [] : {}), Array.isArray(e[n]) && !u && (e[n] = {
                        ...e[n]
                     }), e = e[n]
                  }
               }(e, r.replace(/\]/g, "").split("["), n)
            }
            return e
         }), Object.create(null))
      }

      function y(e = "", t) {
         if (!t || !Object.keys(t).length) return e;
         let r = e;
         const n = e.indexOf("?");
         return -1 !== n && (t = Object.assign(m(e), t), r = r.substr(0, n)), r + "?" + f(t)
      }

      function U(e, t) {
         return m(e)[t]
      }

      function E(e, t) {
         return void 0 !== U(e, t)
      }

      function I(e, ...t) {
         const r = e.indexOf("?");
         if (-1 === r) return e;
         const n = m(e),
            o = e.substr(0, r);
         t.forEach((e => delete n[e]));
         const i = f(n);
         return i ? o + "?" + i : o
      }
      const x = /^(?:[a-z]+:|#|\?|\.|\/)/i;

      function b(e) {
         return e ? (e = e.trim(), x.test(e) || o(e) ? e : "http://" + e) : e
      }

      function v(e) {
         try {
            return decodeURI(e)
         } catch (t) {
            return e
         }
      }

      function w(e, t = null) {
         let r = e.replace(/^(?:https?:)\/\/(?:www\.)?/, "");
         r.match(/^[^\/]+\/$/) && (r = r.replace("/", ""));
         if (!t || r.length <= t || !r.match(/\/([^\/?]+)\.(?:[\w]+)(?=\?|$)/)) return r;
         r = r.split("?")[0];
         const n = r.split("/"),
            o = n[n.length - 1];
         if (o.length <= t) return "â€¦" + r.slice(-t);
         const i = o.lastIndexOf("."),
            [u, c] = [o.slice(0, i), o.slice(i + 1)],
            a = u.slice(-3) + "." + c;
         return o.slice(0, t - a.length - 1) + "â€¦" + a
      }
      var R = r(9681),
         S = r.n(R);

      function j(e) {
         return e ? S()(e).replace(/[\s\./]+/g, "-").replace(/[^\p{L}\p{N}_-]+/gu, "").toLowerCase().replace(/-+/g, "-").replace(/(^-+)|(-+$)/g, "") : ""
      }

      function C(e) {
         let t;
         if (e) {
            try {
               t = new URL(e, "http://example.com").pathname.split("/").pop()
            } catch (e) {}
            return t || void 0
         }
      }

      function P(e) {
         const t = e.split("?"),
            r = t[1],
            n = t[0];
         return r ? n + "?" + r.split("&").map((e => e.split("="))).map((e => e.map(decodeURIComponent))).sort(((e, t) => e[0].localeCompare(t[0]))).map((e => e.map(encodeURIComponent))).map((e => e.join("="))).join("&") : n
      }

      function $(e) {
         return e ? e.startsWith("http://") ? e : (e = b(e)).replace(/^http:/, "https:") : e
      }
   })(), (window.wp = window.wp || {}).url = n
})();;