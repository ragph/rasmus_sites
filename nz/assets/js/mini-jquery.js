// Set global variable $ to replace jQuery
/* Methods: extend
            cookie
            trim
            isFunction
            inArray
            request
            removeCookie
            docReady
*/
var $utils = (function() {
  // Deep extend method
  var extend = function(outputObj) {
    outputObj = outputObj || {};

    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];

      if (!obj) continue;

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object") {
            if (obj[key] instanceof Array == true) outputObj[key] = obj[key].slice(0);
            else outputObj[key] = extend(outputObj[key], obj[key]);
          } else outputObj[key] = obj[key];
        }
      }
    }

    return outputObj;
  };

  // Remove the spaces at the beginning and at the end of string
  var trim = function(a) {
    if (typeof a === "string") {
      return a.trim();
    }
    return undefined;
  };

  // Check if item is in array
  var inArray = function(item, arr) {
    if (Array.isArray(arr)) {
      return arr.indexOf(item);
    }
    return -1;
  };

  // Check the var is a function
  // Taken from underscore
  var isFunction = function(object) {
    return !!(object && object.constructor && object.call && object.apply);
  };

  // XMLHttpRequest
  var request = function(options) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", function() {
      if (typeof options.always !== "undefined") {
        options.always();
      }
    });
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          if (typeof options.success !== "undefined") {
            options.success(xhr);
          }
        } else if (xhr.status >= 400) {
          if (typeof options.errors !== "undefined") {
            options.errors(xhr);
          }
        }
      }
    };
    xhr.open(options.type, options.url);
    xhr.responseType = options.dataType;
    if (typeof options.timeout !== "undefined") {
      xhr.timeout = options.timeout;
    }
    xhr.send();
  };

  var docReady = function(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  return {
    extend: extend,
    trim: trim,
    isFunction: isFunction,
    inArray: inArray,
    request: request,
    docReady: docReady
  };
})();

// Attach coookie methods to $ object
(function($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s
        .slice(1, -1)
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\");
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $utils.isFunction(converter) ? converter(value) : value;
  }

  var config = ($utils.cookie = function(key, value, options) {
    // Write

    if (arguments.length > 1 && !$utils.isFunction(value)) {
      options = $utils.extend({}, config.defaults, options);

      if (typeof options.expires === "number") {
        var days = options.expires,
          t = (options.expires = new Date());
        t.setMilliseconds(t.getMilliseconds() + days * 864e5);
      }

      return (document.cookie = [
        encode(key),
        "=",
        stringifyCookieValue(value),
        options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
        options.path ? "; path=" + options.path : "",
        options.domain ? "; domain=" + options.domain : "",
        options.samesite ? "; sameSite=" + options.samesite : "; sameSite=Lax",
        options.secure ? "; secure" : ""
      ].join(""));
    }

    // Read

    var result = key ? undefined : {},
      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling $utils.cookie().
      cookies = document.cookie ? document.cookie.split("; ") : [],
      i = 0,
      l = cookies.length;

    for (; i < l; i++) {
      var parts = cookies[i].split("="),
        name = decode(parts.shift()),
        cookie = parts.join("=");

      if (key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  });

  config.defaults = {};

  $utils.removeCookie = function(key, options) {
    // Must not alter options, thus extending a fresh object...
    $utils.cookie(key, "", $utils.extend({}, options, { expires: -1 }));
    return !$utils.cookie(key);
  };
})($utils);
